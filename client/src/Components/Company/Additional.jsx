import * as React from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

export default function Additional() {
    const [form,setForm] = React.useState({
        date:"",
        time:"",
        duration:"",
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };

      const printData=()=>{
        console.log(form);
      }

  return (
    <>
      <Header />
      <div className="div">
        <div className="div-9">
          <div className="div-10">
            <div className="div-11">
              <div className="div-12">Date</div>
              <div className="div-13">Time</div>
            </div>
            <div className="div-14">
              <div className="div-15">Additional Settings</div>
              <input
                type="text"
                className="div-16"
                name="date"
                placeholder="DD-MM-YYYY"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="div-17"
                name="time"
                placeholder="00 : 00"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="div-18">
            <div className="div-19">Duration</div>
            <input
              type="text"
              className="div-20"
              name="duration"
              placeholder="e.g. 30 mins"
              onChange={handleInputChange}
            />
          </div>
          <Link to="/company/submit">
            <button onClick={printData} className="div-21">Next</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 36px 32px 71px;
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
          border-radius: 31px;
          background-color: #ffc46e;
          align-self: start;
          margin-top: 7px;
          align-items: center;
          color: #000;
          text-align: center;
          width: 40px;
          justify-content: center;
          height: 40px;
          padding: 0 11px;
          font: 900 25px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          background-color: #fff;
          align-self: center;
          display: flex;
          margin-top: 100px;
          width: 100%;
          max-width: 1318px;
          flex-direction: column;
          align-items: start;
          font-weight: 400;
          padding: 7px 0 0 80px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            padding-left: 20px;
            margin-top: 40px;
          }
        }
        .div-10 {
          display: flex;
          margin-left: 122px;
          width: 613px;
          max-width: 100%;
          gap: 20px;
          text-align: center;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-wrap: wrap;
          }
        }
        .div-11 {
          align-self: end;
          display: flex;
          margin-top: 125px;
          flex-direction: column;
          font-size: 31px;
          color: #000;
          white-space: nowrap;
          line-height: 126%;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-12 {
          font-family: Poppins, sans-serif;
        }
        .div-13 {
          font-family: Poppins, sans-serif;
          margin-top: 52px;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-top: 40px;
          }
        }
        .div-14 {
          display: flex;
          flex-direction: column;
          align-items: start;
          font-size: 20px;
          color: #b0b0b0;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          color: #000;
          align-self: end;
          font: 700 31px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-16 {
          font-family: Poppins, sans-serif;
          align-items: start;
          border-radius: 8px;
          background-color: #eaeaea;
          margin-top: 83px;
          width: 206px;
          max-width: 100%;
          white-space: nowrap;
          justify-content: center;
          padding: 17px 15px;
        }
        @media (max-width: 991px) {
          .div-16 {
            padding-right: 20px;
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-17 {
          font-family: Poppins, sans-serif;
          align-items: start;
          border-radius: 8px;
          background-color: #eaeaea;
          margin-top: 28px;
          width: 206px;
          max-width: 100%;
          justify-content: center;
          padding: 17px 15px;
        }
        @media (max-width: 991px) {
          .div-17 {
            padding-right: 20px;
          }
        }
        .div-18 {
          display: flex;
          width: 371px;
          max-width: 100%;
          gap: 20px;
          margin: 33px 0 0 122px;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-left: 10px;
          }
        }
        .div-19 {
          color: #000;
          flex-grow: 1;
          margin: auto 0;
          font: 31px/126% Poppins, sans-serif;
        }
        .div-20 {
          align-items: start;
          border-radius: 8px;
          background-color: #eaeaea;
          color: #b0b0b0;
          text-align: center;
          justify-content: center;
          padding: 26px 13px;
          font: 20px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            padding-right: 20px;
          }
        }
        .div-21 {
          justify-content: center;
          border-radius: 6px;
          background-color: #f8444f;
          align-self: end;
          margin-top: 180px;
          color: #fff;
          white-space: nowrap;
          padding: 14px 30px;
          font: 600 16px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
