import * as React from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <>
      <Header />
      <div className="instructions-container">
        <div className="content">
          <h2 className="title">Instructions</h2>
          <div className="instruction-item">
            <div className="bullet-point" />
            <div className="instruction-text">
            Be aware of the interview duration 
            </div>
          </div>
          <div className="instruction-item">
            <div className="bullet-point" />
            <div className="instruction-text">
            Speak clearly and confidently.
            </div>
          </div>
          <div className="instruction-item">
            <div className="bullet-point" />
            <div className="instruction-text">
            Avoid mumbling or speaking too quickly.
            </div>
          </div>
          <div className="instruction-item">
            <div className="bullet-point" />
            <div className="instruction-text">
            Ensure your answers are concise and to the point.
            </div>
          </div>
          <div className="instruction-item">
            <div className="bullet-point" />
            <div className="instruction-text">
            Maintain a moderate pace to ensure the interviewer can follow along.
            </div>
          </div>
          <div className="instruction-item">
            <div className="bullet-point" />
            <div className="instruction-text">
            Using external help during the interview is strictly prohibited and can result in disqualification.
            </div>
          </div>
          <Link to="/interviewe/languages">
            <button className="next-button">Next</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .instructions-container {
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

        .instruction-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .bullet-point {
          width: 12px;
          height: 12px;
          background-color: #3d52a0;
          border-radius: 70%;
          margin-right: 16px;
          margin-top: 6px;
          box-shadow: 0 0 5px rgba(61, 82, 160, 0.5);
        }

        .instruction-text {
          font-size: 16px;
          line-height: 1.5;
          color: #333;
        }

        .next-button {
          align-self: center;
          margin-top: 40px;
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

        .next-button:hover {
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

          .instruction-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .bullet-point {
            margin: 0 0 8px 0;
          }

          .next-button {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
}