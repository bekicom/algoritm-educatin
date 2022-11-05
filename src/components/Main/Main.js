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

          <video src={video} controls muted loop ></video>
        </div>
        <div className="sec_r">
          <img src={compyu} alt="" />
        </div>
      </div>
    </div>
  );
}
