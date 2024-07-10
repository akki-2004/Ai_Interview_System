import React, { useState } from 'react';
import image from "./image.png"
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './InterviweeLogin.css'; // Import the custom CSS file

export default function InterviweeLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/send-otp', { phoneNumber });
      setOtpSent(true);
      alert(`OTP sent to ${phoneNumber}`);
    } catch (error) {
      alert('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axios.post('http://localhost:5000/verify-otp', { phoneNumber, otp });
      localStorage.setItem('isLoggedIn', 'true'); // Save login status in local storage
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (error) {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
    <h1  className="fef" style={{textAlign:"center" , position:"relative", top:"10vh" }}>WiseHireAI</h1>
    <Container className="d-flex justify-content-center align-items-center interviwee-login-container">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={6} className="d-none d-lg-block"> {/* Hidden on smaller screens */}
          <Image style={{height:"40vh "}}
            src={image}
            alt="Login Image"
            fluid
          />
        </Col>
        <Col md={6} lg={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h5 className="card-title text-center mb-4">Login</h5>
              <Form>
                <Form.Group className="mb-3" controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="input-field"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="otp">
                  <Form.Label>Enter the OTP</Form.Label>
                  <Form.Control
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="input-field"
                  />
                </Form.Group>
                <Button
                  variant={otpSent ? "success" : "primary"}
                  onClick={otpSent ? handleVerifyOtp : handleSendOtp} // Handle different actions based on otpSent state
                  className="w-100 btn-custom"
                >
                  {otpSent ? 'Verify OTP' : 'Send OTP'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
