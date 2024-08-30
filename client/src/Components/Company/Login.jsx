// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import loginImage from './login.jpg'; // Replace with the path to your image
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Redirect to protected route or dashboard upon successful login
        navigate('/company/main');
      } else {
        console.log('Login failed');
        // Handle login failure (optional)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (optional)
    }
  };

  return (
    <div className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} md={6} className="d-none d-md-flex justify-content-center align-items-center">
          <img src={loginImage} alt="Login" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className="p-5 w-75">
            <div className="company-name">WiseHire AI</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <div className="text-center mt-3">
                <Link to="/forgot-password" className="custom-link">
                  <b>Forgot Password?</b>
                </Link>
              </div>

              <div className="w-100 mt-4 text-center">
                <button type="submit" className="fancy">
                  <span className="text">Login</span>
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
