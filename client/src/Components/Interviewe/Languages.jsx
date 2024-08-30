import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Languages = () => {
  const [latestInterview, setLatestInterview] = useState(null);

  useEffect(() => {
    const fetchLatestInterview = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/interview/latest');
        setLatestInterview(response.data);
      } catch (error) {
        console.error('Error fetching latest interview:', error);
      }
    };

    fetchLatestInterview();
  }, []);

  return (
    <>
      <Header />
      <div className="languages-container">
        <div className="content">
          <h2 className="title">Ready for the Interview?</h2>
          <div className="languages-list">
            {latestInterview && latestInterview.selectedLanguages.map((language, index) => (
              <div className="language-item" key={index}>
                <div className="bullet-point" />
                <div className="language-text">{language}</div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/interviewe/start">
          <button className="proceed-button">Start</button>
        </Link>
      </div>

      <style jsx>{`
        .languages-container {
          background-color: #f7f5fb;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 42px 20px 71px;
          min-height: 100vh;
        }

        .content {
          display: flex;
          flex-direction: column;
          max-width: 800px;
          width: 100%;
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .title {
          color: #3d52a0;
          font-size: 32px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
        }

        .languages-list {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .language-item {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .bullet-point {
          width: 12px;
          height: 12px;
          background-color: #3d52a0;
          border-radius: 50%;
          margin-right: 16px;
          box-shadow: 0 0 5px rgba(61, 82, 160, 0.5);
        }

        .language-text {
          font-size: 18px;
          line-height: 1.5;
          color: #333;
        }

        .proceed-button {
          align-self: center;
          margin-top: 20px;
          background-color: #3d52a0;
          color: #fff;
          padding: 14px 30px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(61, 82, 160, 0.3);
          transition: background-color 0.3s ease;
        }

        .proceed-button:hover {
          background-color: #2c3e75;
        }

        @media (max-width: 991px) {
          .content {
            padding: 20px;
          }

          .title {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .language-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .bullet-point {
            margin-bottom: 8px;
          }

          .proceed-button {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Languages;
