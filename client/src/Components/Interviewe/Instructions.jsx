import * as React from "react";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <>
    <Header/>
      <div className="div">
        <div className="div-2">
          <div className="div-3">Instrucitons</div>
          <div className="div-4">
            <div className="div-5" />
            <div className="div-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              animi dicta autem repellat ad, porro optio incidunt, perferendis
              <br /> dolorum rerum sed! Eos totam tempora quis sit commodi
              minima aperiam aut!
              <br />
            </div>
          </div>
          <div className="div-7">
            <div className="div-8" />
            <div className="div-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              animi dicta autem repellat ad, porro optio incidunt, perferendis
              <br /> dolorum rerum sed! Eos totam tempora quis sit commodi
              minima aperiam aut!
              <br />
            </div>
          </div>
          <div className="div-10">
            <div className="div-11" />
            <div className="div-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              animi dicta autem repellat ad, porro optio incidunt, perferendis
              <br /> dolorum rerum sed! Eos totam tempora quis sit commodi
              minima aperiam aut!
              <br />
            </div>
          </div>
          <div className="div-13">
            <div className="div-14" />
            <div className="div-15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              animi dicta autem repellat ad, porro optio incidunt, perferendis
              <br /> dolorum rerum sed! Eos totam tempora quis sit commodi
              minima aperiam aut!
              <br />
            </div>
          </div>
          <div className="div-16">
            <div className="div-17" />
            <div className="div-18">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              animi dicta autem repellat ad, porro optio incidunt, perferendis
              <br /> dolorum rerum sed! Eos totam tempora quis sit commodi
              minima aperiam aut!
              <br />
            </div>
          </div>
         <Link to="/interviewe/languages"><button className="div-19">Next</button></Link> 
        </div>
      </div>
      <style jsx>{`
        .div {
          align-items: center;
          background-color: #fff;
          display: flex;
          font-size: 20px;
          color: #000;
          font-weight: 400;
          justify-content: center;
          padding: 50px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          margin-top: 26px;
          width: 100%;
          max-width: 1201px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          align-self: center;
          font: 900 40px Inter, sans-serif;
        }
        .div-4 {
          display: flex;
          margin-top: 52px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-4 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-5 {
          background-color: #000;
          border-radius: 50%;
          align-self: start;
          width: 12px;
          height: 12px;
        }
        .div-6 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          display: flex;
          margin-top: 57px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-8 {
          background-color: #000;
          border-radius: 50%;
          align-self: start;
          width: 12px;
          height: 12px;
        }
        .div-9 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
          }
        }
        .div-10 {
          display: flex;
          margin-top: 57px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-10 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-11 {
          background-color: #000;
          border-radius: 50%;
          align-self: start;
          width: 12px;
          height: 12px;
        }
        .div-12 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
          }
        }
        .div-13 {
          display: flex;
          margin-top: 57px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-13 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-14 {
          background-color: #000;
          border-radius: 50%;
          align-self: start;
          width: 12px;
          height: 12px;
        }
        .div-15 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
          }
        }
        .div-16 {
          display: flex;
          margin-top: 57px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-16 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-17 {
          background-color: #000;
          border-radius: 50%;
          align-self: start;
          width: 12px;
          height: 12px;
        }
        .div-18 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
          }
        }
        .div-19 {
          justify-content: center;
          border-radius: 6px;
          background-color: #f8444f;
          align-self: end;
          margin-top: 67px;
          color: #fff;
          white-space: nowrap;
          padding: 14px 30px;
          font: 600 16px/126% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}