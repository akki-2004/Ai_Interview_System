import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import loginImage from './login.png'; // Replace with the path to your image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirect to a protected route or dashboard
    navigate('/Startbt');
  };

  return (
    <div className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <style jsx>{`
        .custom-input {
          border-radius: 50px;
          border: 2px solid #000;
        }
        .custom-link {
          text-decoration: none;
          color: inherit;
        }
        .custom-link:hover {
          text-decoration: underline;
        }
        .fancy {
          background-color: transparent;
          border: 2px solid #000;
          border-radius: 0;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-block;
          float: center;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          outline: none;
          overflow: visible;
          padding: 1.25em 2em;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: none;
          transition: all 0.3s ease-in-out;
          user-select: none;
          font-size: 13px;
        }
        .fancy::before {
          content: " ";
          width: 1.5625rem;
          height: 2px;
          background: black;
          top: 50%;
          left: 1.5em;
          position: absolute;
          transform: translateY(-50%);
          transform-origin: center;
          transition: background 0.3s linear, width 0.3s linear;
        }
        .fancy .text {
          font-size: 1.125em;
          line-height: 1.33333em;
          padding-left: 2em;
          display: block;
          text-align: left;
          transition: all 0.3s ease-in-out;
          text-transform: uppercase;
          text-decoration: none;
          color: black;
        }
        .fancy .top-key {
          height: 2px;
          width: 1.5625rem;
          top: -2px;
          left: 0.625rem;
          position: absolute;
          background: #e8e8e8;
          transition: width 0.5s ease-out, left 0.3s ease-out;
        }
        .fancy .bottom-key-1 {
          height: 2px;
          width: 1.5625rem;
          right: 1.875rem;
          bottom: -2px;
          position: absolute;
          background: #e8e8e8;
          transition: width 0.5s ease-out, right 0.3s ease-out;
        }
        .fancy .bottom-key-2 {
          height: 2px;
          width: 0.625rem;
          right: 0.625rem;
          bottom: -2px;
          position: absolute;
          background: #e8e8e8;
          transition: width 0.5s ease-out, right 0.3s ease-out;
        }
        .fancy:hover {
          color: white;
          background: black;
        }
        .fancy:hover::before {
          width: 0.9375rem;
          background: white;
        }
        .fancy:hover .text {
          color: white;
          padding-left: 1.5em;
        }
        .fancy:hover .top-key {
          left: -2px;
          width: 0px;
        }
        .fancy:hover .bottom-key-1,
        .fancy:hover .bottom-key-2 {
          right: 0;
          width: 0;
        }
        .company-name {
          font-weight: bold;
          font-size: 2em;
          perspective: 800px;
          position: relative;
          text-align: center;
          margin-bottom: 50px; /* Adjusted margin-bottom */
          margin-top: -20px; /* Added margin-top */
        }
        .company-name::after,
        .company-name::before,
        .company-name .text::after,
        .company-name .text::before {
          perspective: 800px;
          animation: anim 2s ease-in-out infinite, dotMove 10s ease-out alternate infinite, move 10s linear infinite 1s;
          content: '●';
          color: rgba(228, 19, 141, 0.925);
          position: absolute;
          translate: -60px 500px;
          width: 5px;
          height: 5px;
        }
        .company-name::before {
          animation-delay: 3s;
        }
        .company-name .text::before {
          color: rgb(255, 179, 80);
          animation-delay: 2s;
        }
        .company-name .text::after {
          color: rgb(255, 179, 80);
        }
        .company-name .text {
          animation: anim 20s linear infinite, move 10s linear infinite 1s;
          color: transparent;
          background-image: linear-gradient(90deg, rgba(228, 19, 141, 0.925) 0%, rgb(255, 179, 80) 100%);
          background-clip: text;
          background-size: 100%;
          background-repeat: no-repeat;
          transform: skew(5deg, -5deg);
          -webkit-background-clip: text;
          position: relative;
        }
        @keyframes anim {
          0%, 100% {
            text-shadow: 2px 0px 2px rgba(179, 158, 158, .5);
          }
          50% {
            background-size: 0%;
            background-position-x: left;
            text-shadow: 2px 10px 6px rgba(179, 158, 158, 1);
          }
        }
        @keyframes move {
          50% {
            translate: 0px 0px;
            rotate: x 60deg;
            transform: skew(-5deg, 5deg);
          }
        }
        @keyframes dotMove {
          0%, 100% {
            translate: -60px 300px;
          }
          50% {
            translate: 160px -250px;
            scale: .5;
            opacity: .85;
          }
        }
      `}</style>
      <Row className="w-100">
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className="p-5 w-75">
            <div className="company-name">
              <p className="text">
                WiseHire AI
              </p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <div className="text-center mt-3">
                <Link to="/forgot-password" className="custom-link"><b>Forgot Password?</b></Link>
              </div>

              <div className="w-100 mt-4 text-center">
                <Link className="fancy" to="/Startbt">
                  <span className="top-key"></span>
                  <span className="text">Login</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </Link>
              </div>
            </Form>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-none d-md-flex justify-content-center align-items-center">
          <img src={loginImage} alt="Login" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;