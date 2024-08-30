const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const twilio = require('twilio');
const moment = require('moment');
// const bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // For testing purposes only; remove in production
  },
});

const accountSid = 'ACbbe3858df109505ac944b9458fe5db56';
const authToken = 'b38b9c0de79ac54c69325147d054b850';
const client = twilio(accountSid, authToken);

mongoose.connect('mongodb+srv://Akshay2:Akshay2@ems.yzofrjh.mongodb.net/interviewDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Add a function to check if the OTP can be sent based on interview details
const canSendOtp = async (phoneNumber) => {
  try {
    const interview = await Interview.findOne().sort({ _id: -1 }).lean(); // Get the latest interview

    if (!interview) return false; // No interview found

    const { date, time, period, duration } = interview.interviewDetails;
    const interviewStart = moment(`${date} ${time} ${period}`, 'DD-MM-YYYY HH:mm A');
    const interviewEnd = interviewStart.clone().add(duration, 'minutes');
    const now = moment();

    return now.isBetween(interviewStart, interviewEnd);
  } catch (error) {
    console.error('Error checking OTP send time:', error);
    return false;
  }
};

const interviewSchema = new mongoose.Schema({
  selectedLanguages: [String],
  selectedCutoffs: Map,
  interviewDetails: {
    date: String,
    time: String,
    period: String, // AM or PM
    duration: Number,
  },
});

const Interview = mongoose.model('Interview', interviewSchema);

const userSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
  otpExpires: Date,
});

const User = mongoose.model('User', userSchema);

app.post('/langselect', async (req, res) => {
  try {
    const { selectedLanguages, selectedCutoffs, interviewDetails } = req.body;
    const interview = new Interview({
      selectedLanguages,
      selectedCutoffs,
      interviewDetails,
    });

    await interview.save();
    res.status(201).send('Interview data saved successfully');
  } catch (error) {
    res.status(400).send('Error saving interview data');
  }
});

app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  const canSend = await canSendOtp(phoneNumber);
  if (!canSend) {
    return res.status(403).send('OTP cannot be sent outside the allowed time window');
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const otpExpires = new Date(Date.now() + 10 * 60000); // OTP valid for 10 minutes

  let user = await User.findOne({ phoneNumber });
  if (!user) {
    user = new User({ phoneNumber });
  }
  user.otp = otp;
  user.otpExpires = otpExpires;
  await user.save();

  client.messages
    .create({
      body: `Your OTP is ${otp}`,
      from: '+13476944833',
      to: phoneNumber,
    })
    .then(() => {
      res.status(200).send('OTP sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Failed to send OTP');
    });
});

const userSchema1 = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

userSchema1.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  next();
});

const User1 = mongoose.model('Company', userSchema1);

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User1.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User1({ email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User1.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.get('/api/interview/latest', async (req, res) => {
  try {
    const latestInterview = await Interview.findOne().sort({ _id: -1 }).lean();
    res.json(latestInterview);
  } catch (error) {
    console.error('Error fetching latest interview:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, otp } = req.body;
  const user = await User.findOne({ phoneNumber, otp });

  if (user && user.otpExpires > Date.now()) {
    user.otp = null;
    user.otpExpires = null;
    await user.save();
    res.status(200).send('OTP verified successfully');
  } else {
    res.status(400).send('Invalid or expired OTP');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
