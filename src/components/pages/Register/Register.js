import React from 'react'
import logo from "../../../asets/nav/Vector.png"
import "./register.css"

export  function Register() {
  return (
    <div className="register">
      <form action="">
        <div className="logo_r">
          <img src={logo} alt="" />
          <p>R’yxatdan otish</p>
        </div>
        <input type="text" placeholder="ism" />
        <input type="text" placeholder="familya" />
        <input type="text" placeholder="tel"  />
        <select name="" id="">
          <option value="">Kursni tanlang</option>
          <option value="">Dasturlash</option>
          <option value="">Rus-tili</option>
          <option value="">Ingliz-tili</option>
          <option value="">DTM</option>
        </select>
        <button>Login</button>
      </form>
    </div>
  );
}
