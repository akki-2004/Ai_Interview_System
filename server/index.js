// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const twilio = require('twilio');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false  // For testing purposes only; remove in production
    }
});
// Twilio setup
const accountSid = 'ACbbe3858df109505ac944b9458fe5db56';
const authToken = 'b38b9c0de79ac54c69325147d054b850';
const client = twilio(accountSid, authToken);


mongoose.connect('mongodb://localhost:27017/otp-login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
  otpExpires: Date,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
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

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', mailOptions);
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email. Please try again.');
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
