import * as React from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

export default function Languages() {
  return (
    <>
    <Header/>
      <div className="div">
        <div className="div-2">
         
          <div className="div-3">
            <div className="div-4">Ready for the Interview?</div>
            <div className="div-5">
              <div className="div-6">
                <div className="div-7" />
                <div className="div-8">Java</div>
              </div>
              <div className="div-9">
                <div className="div-10" />
                <div className="div-11">Python</div>
              </div>
              <div className="div-12">
                <div className="div-13" />
                <div className="div-14">C++</div>
              </div>
              <div className="div-15">
                <div className="div-16" />
                <div className="div-17">C</div>
              </div>
            </div>
            <Link to="/interviewe/start"><button className="div-18">Start</button></Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          align-items: center;
          background-color: #fff;
          display: flex;
          color: #000;
          justify-content: center;
          padding: 65px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          width: 100%;
          max-width: 1246px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
        }
        .div-3 {
          align-self: center;
          display: flex;
          margin-top: 82px;
          width: 100%;
          max-width: 1125px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-4 {
          font: 900 40px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          justify-content: center;
          display: flex;
          margin-top: 85px;
          width: 119px;
          max-width: 100%;
          flex-direction: column;
          font-size: 25px;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-5 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-6 {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
          }
        }
        .div-7 {
          background-color: #000;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: auto 0;
        }
        .div-8 {
          font-family: Inter, sans-serif;
        }
        .div-9 {
          display: flex;
          margin-top: 47px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-9 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-10 {
          background-color: #000;
          border-radius: 50%;
          align-self: start;
          width: 10px;
          height: 10px;
        }
        .div-11 {
          font-family: Inter, sans-serif;
        }
        .div-12 {
          display: flex;
          margin-top: 42px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-13 {
          background-color: #000;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: auto 0;
        }
        .div-14 {
          font-family: Inter, sans-serif;
        }
        .div-15 {
          display: flex;
          margin-top: 47px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-15 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-16 {
          background-color: #000;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: auto 0;
        }
        .div-17 {
          font-family: Inter, sans-serif;
        }
        .div-18 {
          justify-content: center;
          border-radius: 6px;
          background-color: #f8444f;
          align-self: end;
          margin-top: 183px;
          color: #fff;
          white-space: nowrap;
          padding: 14px 30px;
          font: 600 16px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}