// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import completedImage from './correct.jpg'; // Replace with your image path

// const Fourthpage = () => {
//   const navigate = useNavigate();

//   const handleProceed = () => {
//     // Add logic for what to do when proceeding from this page
//     navigate('/startbt');
//   };

//   return (
//     <div className="fourthpage-container">
//       <h2 className="center-aligned">Information Submitted</h2>
//       <br />
//       <h4 className="message">
//         Thank you for providing all the necessary information for <br/>scheduling the interview. 
//       </h4>
//       <img src={completedImage} alt="Completed" className="completed-image" />
//       <div className="button-container">
//         <button className="proceed-button" onClick={handleProceed}>Back to Home</button>
//       </div>

//       <style jsx>{`
//         .fourthpage-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100vh; /* Use the full height of the viewport */
//           padding: 2rem;
//           background-color: #f5f5f5;
//         }

//         .center-aligned {
//           text-align: center;
//           color: #333;
//         }

//         .message {
//           text-align: center;
//           margin-bottom: 1.5rem;
//         }

//         .completed-image {
//           width: 100%;
//           max-width: 200px;
//           margin-bottom: 1.5rem;
//           border-radius: 8px;
//         //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }

//         .button-container {
//           display: flex;
//           justify-content: center;
//           width: 100%;
//         }

//         .proceed-button {
//           padding: 0.75rem 1.5rem;
//           background-color: #007bff;
//           color: #fff;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .proceed-button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Fourthpage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import completedImage from './correct.jpg'; // Replace with your image path
// import Navbar from './Navi';
import Header from '../Layout/Header';

const Fourthpage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Add logic for what to do when proceeding from this page
    navigate('/startbt');
  };

  return (
    <>
    <Header/>
      <div className="fourthpage-outer-container">
        <div className="fourthpage-container">
          <h2 className="center-aligned">Information Submitted</h2>
          <br />
          <h4 className="message">
            Thank you for providing all the necessary information for <br />scheduling the interview.
          </h4>
          <img src={completedImage} alt="Completed" className="completed-image" />
        </div>
        <div className="button-container">
          <Link to="/company/main">
            <button className="proceed-button" onClick={handleProceed}>Back to Home</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .fourthpage-outer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          background-color: #f7f5fb;
          padding: 20px;
        }

        .fourthpage-container {
          background-color: #fff;
          padding: 42px 61px 71px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (max-width: 991px) {
          .fourthpage-container {
            padding: 20px;
          }
        }

        .center-aligned {
          text-align: center;
          font-size: 32px;
          font-weight: 700;
          color: #3d52a0;
          margin-bottom: 40px;
        }

        .message {
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 20px;
          color: #333;
        }

        .completed-image {
          width: 100%;
          max-width: 200px;
          margin-bottom: 1.5rem;
          border-radius: 8px;
        }

        .button-container {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 800px;
          margin-top: 40px;
        }

        .proceed-button {
          padding: 0.75rem 1.5rem;
          background-color: #7091e6;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .proceed-button:hover {
          background-color: #3d52a0;
        }
      `}</style>
      <style jsx global>{`
        body {
          background-color: #f7f5fb;
          margin: 0;
          font-family: Arial, sans-serif;
        }
      `}</style>
    </>
  );
};

export default Fourthpage;