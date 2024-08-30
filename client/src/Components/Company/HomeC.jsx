import * as React from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

export default function HomeC() {
  return (
    <>
    <Header/>
      <div className="div">
   
        <div className="div-10">
          <div className="div-11">
            <div className="column">
              <div className="div-12">
                <div className="div-13">
                  Hire your
                  <br />
                  dream team
                  <br />
                  today.
                </div>
                <Link to="/company/languages"><button className="div-14">Get Started</button></Link>
              </div>
            </div>
            <div className="column-2">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=87b97839d64b44a2868b7c8b0059b12b&"
                className="img-2"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 36px 32px 80px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          border-radius: 4px;
          background-color: #fff;
          display: flex;
          width: 100%;
          gap: 20px;
          white-space: nowrap;
          justify-content: space-between;
          padding: 6px 69px 6px 31px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 4.17;
          object-fit: auto;
          object-position: center;
          width: 200px;
          max-width: 100%;
        }
        .div-3 {
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 20px;
          color: var(--Wireframe, #313131);
          font-weight: 400;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
          }
        }
        .div-4 {
          font-family: Poppins, sans-serif;
          border-radius: 4px;
          background-color: #f8444f;
          align-self: stretch;
          color: #fff;
          justify-content: center;
          padding: 8px 12px;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .div-5 {
          font-family: Poppins, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .div-6 {
          font-family: Poppins, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .div-7 {
          color: #000;
          font-family: Poppins, sans-serif;
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-8 {
          align-self: start;
          display: flex;
          margin-top: 7px;
          flex-direction: column;
          font-size: 25px;
          color: #000;
          font-weight: 900;
          text-align: center;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          font-family: Poppins, sans-serif;
          border-radius: 31px;
          background-color: #ffc46e;
          align-items: center;
          width: 40px;
          justify-content: center;
          height: 40px;
          padding: 0 11px;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
          }
        }
        .div-10 {
          align-self: center;
          margin-top: 60px;
          width: 100%;
          max-width: 1175px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-11 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-11 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-12 {
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          align-self: stretch;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-13 {
          color: #000;
          font: 700 90px/80px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            font-size: 40px;
            line-height: 40px;
          }
        }
        .div-14 {
          justify-content: center;
          border-radius: 50px;
          background-color: #3d52a0;
          align-self: start;
          margin-top: 41px;
          color: #fff;
          padding: 14px 30px;
          font: 600 16px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .img-2 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}