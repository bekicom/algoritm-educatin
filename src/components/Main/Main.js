import React from "react";
import { Routes, Route,} from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Register } from "../pages/Register/Register";
import video from "../../asets/video/Serverga qo‘yish _ Telegram bot _  Bepul va oson usuli.mp4"
import "./main.css";
import compyu from "../../asets/section1/comp.svg"

export function Main() {

  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <div className="section1">
        <div className="sec_l">
          <p>
            Zamonaviy <b>olamni</b> Biz bilan zabt eting
          </p>

          <video src={video} controls muted loop></video>
        </div>
        <div className="sec_r">
          <img src={compyu} alt="" />
        </div>
      </div>
      {/* ****************** section2*************** */}
      <div className="oquvkurslari">
        <div className="oquv">
          <p>O`quv kurslar</p>
        </div>
        <div className="kusrlar">
          <div className="webdasturlash">
            <p>Web dasturlash</p>
            <span>web dasturlash 9 oy davom etadi</span>
          </div>
          <div className="rustil">
            <p>Rus-tili</p>
            <span>Gramatika va Rus adabiy So`zlashuv (7oy/3 bosqich)</span>
          </div>
          <div className="ingilztili">
            <p>Ingilz-tili</p>
            <span>
              ALGORITM da ingiiz tiiini orgatish dasturi 5 bosqichdan iborat:
              3+3+3+351 у
            </span>
          </div>
          <div className="dtm">
            <p>DTM</p>
            <span>web dasturlash 9 oy davom etadi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
