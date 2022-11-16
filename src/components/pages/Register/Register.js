import React from "react";
import logo from "../../../asets/nav/Vector.png";
import "./register.css";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
import axios from "axios";

export function Register() {
  const api = "https://algoritm21.pandashop.uz";
  const [name, setName] = useState({});
  const [phone, setPhone] = useState({});
  const [course, setCourse] = useState({});
  // const [open, setOpen] = useState(false);

  return (
    <div className="register" >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios(`${api}/message`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              name,
              phone,
              course,
            }),
          })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        }}
      >
        {/* <span onClick={() => setOpen(true)}>x</span> */}
        <div className="logo_r">
          <img src={logo} alt="" />
          {/* <p>R’yxatdan otish</p> */}
        </div>
        <input
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="ism"
        />
        <PatternFormat
          required
          format="+998 (##) ### ####"
          allowEmptyFormatting
          mask="_"
          onValueChange={(e) => {
            setPhone(e.value);
          }}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          name=""
          id=""
        >
          <option value="Kursni tanlang">Kursni tanlang</option>
          <option value="Dasturlash">Dasturlash</option>
          <option value="Rus-tili">Rus-tili</option>
          <option value="Ingliz-tili">Ingliz-tili</option>
          <option value="DTM">DTM</option>
        </select>
        <button type="submit" >
          Login
        </button>
      </form>
    </div>
  );
}
