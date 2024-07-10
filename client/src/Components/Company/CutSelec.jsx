import React, { useState } from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

export default function CutSelec() {
  const [selectedCutoffs, setSelectedCutoffs] = useState({
    Java: null,
    C: null,
    Python: null,
    CPlusPlus: null,
  });

  const handleCutoffClick = (language, value) => {
    setSelectedCutoffs((prevCutoffs) => ({
      ...prevCutoffs,
      [language]: value,
    }));
  };

  const printSelectedCutoffs = () => {
    console.log("Selected Cutoffs:", selectedCutoffs);
  };

  return (
    <>
      <Header />
      <div className="div">
        <div className="div-10">
          <div className="div-11">
            <div className="div-12">Select the cut off</div>
            <div className="div-13">
              <div className="div-14">
                <div className="column">
                  <div className="div-15">
                    <div className="div-16">Java</div>
                    {["90", "80", "70", "60", "50"].map((value) => (
                      <div
                        key={value}
                        className={`div-cutoff ${
                          selectedCutoffs.Java === value ? "selected" : ""
                        }`}
                        onClick={() => handleCutoffClick("Java", value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="column-2">
                  <div className="div-22">
                    <div className="div-23">C</div>
                    {["90", "80", "70", "60", "50"].map((value) => (
                      <div
                        key={value}
                        className={`div-cutoff ${
                          selectedCutoffs.C === value ? "selected" : ""
                        }`}
                        onClick={() => handleCutoffClick("C", value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="column-3">
                  <div className="div-29">
                    <div className="div-30">Python</div>
                    {["90", "80", "70", "60", "50"].map((value) => (
                      <div
                        key={value}
                        className={`div-cutoff ${
                          selectedCutoffs.Python === value ? "selected" : ""
                        }`}
                        onClick={() => handleCutoffClick("Python", value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="column-4">
                  <div className="div-36">
                    <div className="div-37">C++</div>
                    {["90", "80", "70", "60", "50"].map((value) => (
                      <div
                        key={value}
                        className={`div-cutoff ${
                          selectedCutoffs.CPlusPlus === value ? "selected" : ""
                        }`}
                        onClick={() => handleCutoffClick("CPlusPlus", value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/company/additional" onClick={printSelectedCutoffs}>
              <button className="div-43">Next</button>
            </Link>
          </div>
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
          display: flex;
          margin-top: 100px;
          width: 100%;
          max-width: 1318px;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-11 {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 0 0 80px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .div-12 {
          color: #000;
          text-align: center;
          font: 700 31px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-13 {
          justify-content: center;
          margin-top: 49px;
          width: 488px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-top: 40px;
          }
        }
        .div-14 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-14 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-15 {
          display: flex;
          flex-grow: 1;
          padding-top: 9px;
          flex-direction: column;
          font-size: 24px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          line-height: 126%;
        }
        @media (max-width: 991px) {
          .div-15 {
            border-bottom: 2px solid #eee;
            padding: 4px 0;
            white-space: initial;
          }
        }
        .div-16 {
          color: #000;
          font: 700 24px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-cutoff {
          cursor: pointer;
          margin-top: 6px;
        }
        .div-cutoff.selected {
          font-weight: bold;
          text-decoration: underline;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-22 {
          display: flex;
          flex-grow: 1;
          padding-top: 9px;
          flex-direction: column;
          font-size: 24px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          line-height: 126%;
        }
        @media (max-width: 991px) {
          .div-22 {
            border-bottom: 2px solid #eee;
            padding: 4px 0;
            white-space: initial;
          }
        }
        .div-23 {
          color: #000;
          font: 700 24px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-29 {
          display: flex;
          flex-grow: 1;
          padding-top: 9px;
          flex-direction: column;
          font-size: 24px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          line-height: 126%;
        }
        @media (max-width: 991px) {
          .div-29 {
            border-bottom: 2px solid #eee;
            padding: 4px 0;
            white-space: initial;
          }
        }
        .div-30 {
          color: #000;
          font: 700 24px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-36 {
          display: flex;
          flex-grow: 1;
          padding-top: 9px;
          flex-direction: column;
          font-size: 24px;
          color: #000;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          line-height: 126%;
        }
        @media (max-width: 991px) {
          .div-36 {
            border-bottom: 2px solid #eee;
            padding: 4px 0;
            white-space: initial;
          }
        }
        .div-37 {
          color: #000;
          font: 700 24px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-43 {
          font-family: Poppins, sans-serif;
          border-radius: 4px;
          background-color: #f8444f;
          margin-top: 56px;
          width: 488px;
          max-width: 100%;
          color: #fff;
          justify-content: center;
          height: 48px;
          padding: 8px 12px;
        }
        @media (max-width: 991px) {
          .div-43 {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
