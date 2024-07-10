import * as React from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LangSelec() {
  const [selectedLanguages, setSelectedLanguages] = React.useState({
    Java: false,
    Python: false,
    "C++": false,
    C: false,
  });

  const handleCheckboxChange = (language) => {
    setSelectedLanguages((prevSelectedLanguages) => ({
      ...prevSelectedLanguages,
      [language]: !prevSelectedLanguages[language],
    }));
  };
  const handleNextClick = () => {
    const selected = Object.keys(selectedLanguages).filter(
      (language) => selectedLanguages[language]
    );
    console.log("Selected languages:", selected);
  };
  return (
    <>
      <Header />
      <div className="div">
        <div className="div-10">
          <div className="div-11">
            <div className="div-12">
              Select programming Languages for the Interview
            </div>
            <div className="div-13">
              {Object.keys(selectedLanguages).map((language) => (
                <div className="div-14" key={language}>
                  <input
                    type="checkbox"
                    checked={selectedLanguages[language]}
                    onChange={() => handleCheckboxChange(language)}
                  />
                  <div className="div-15">{language}</div>
                </div>
              ))}
            </div>
            <Link to="/company/cutoff">
              <button onClick={handleNextClick} className="div-25">Next</button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 42px 61px 71px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          width: 100%;
          gap: 20px;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
            white-space: initial;
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
          background-color: #fff;
          display: flex;
          margin-top: 105px;
          flex-direction: column;
          align-items: center;
          color: #000;
          line-height: 126%;
          padding: 7px 60px 0;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            padding-left: 20px;
            margin-top: 40px;
          }
        }
        .div-11 {
          display: flex;
          width: 100%;
          max-width: 1114px;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          text-align: center;
          margin-left: 54px;
          font: 700 31px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
          }
        }
        .div-13 {
          display: flex;
          margin-top: 89px;
          width: 159px;
          max-width: 100%;
          flex-direction: column;
          font-size: 30px;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-14 {
          display: flex;
          gap: 20px;
          padding: 8px 0;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 30px;
        }
        .div-15 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-16 {
          display: flex;
          margin-top: 33px;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-16 {
            margin-right: 9px;
            white-space: initial;
          }
        }
        .div-17 {
          border-radius: 6px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 2px;
          align-self: start;
          width: 30px;
          height: 30px;
        }
        .div-18 {
          font-family: Poppins, sans-serif;
        }
        .div-19 {
          justify-content: center;
          display: flex;
          margin-top: 38px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-right: 7px;
            white-space: initial;
          }
        }
        .div-20 {
          border-radius: 6px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 2px;
          width: 30px;
          height: 30px;
        }
        .div-21 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-22 {
          display: flex;
          margin-top: 32px;
          gap: 20px;
          padding: 8px 0;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          border-radius: 6px;
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 2px;
          width: 30px;
          height: 30px;
        }
        .div-24 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-25 {
          display: flex;
          margin-top: 64px;
          flex-direction: column;
          align-items: center;
          color: #000;
          font-size: 21px;
          font-weight: 700;
          white-space: nowrap;
          padding: 10px 60px;
          border-radius: 8px;
          background-color:#f8444f;
        }
        @media (max-width: 991px) {
          .div-25 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}
