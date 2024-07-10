import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import completedImage from './correct.jpg'; // Replace with your image path

const Fourthpage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Add logic for what to do when proceeding from this page
    navigate('/startbt');
  };

  return (
    <div className="fourthpage-container">
      <h2 className="center-aligned">Information Submitted</h2>
      <br />
      <h4 className="message">
        Thank you for providing all the necessary information for <br/>scheduling the interview. 
      </h4>
      <img src={completedImage} alt="Completed" className="completed-image" />
      <div className="button-container">
       <Link to="/company/main"><button className="proceed-button" onClick={handleProceed}>Back to Home</button></Link> 
      </div>

      <style jsx>{`
        .fourthpage-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh; /* Use the full height of the viewport */
          padding: 2rem;
          
        }

        .center-aligned {
          text-align: center;
          color: #333;
        }

        .message {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .completed-image {
          width: 100%;
          max-width: 200px;
          margin-bottom: 1.5rem;
          border-radius: 8px;
        //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .button-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .proceed-button {
          padding: 0.75rem 1.5rem;
          background-color:#f8444f;
          
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .proceed-button:hover {
          background-color: ;
        }
      `}</style>
    </div>
  );
};

export default Fourthpage;