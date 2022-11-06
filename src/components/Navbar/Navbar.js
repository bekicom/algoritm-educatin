import React from "react";
import "./navbar.css";
import logo from "../../asets/nav/Vector.png";
import menu from "../../asets/nav/menu.svg";
import user from "../../asets/nav/user.svg"
import { useNavigate } from "react-router-dom";

export function Navbar() {

  const navigate = useNavigate()

  
  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="" />
        {/* <p>ALGORITIM</p> */}
      </div>
      <div className="lincs">
        <button>
          <img src={menu} alt="" />
          Kurslar
        </button>
        <button>
          <img src={menu} alt="" />
          Biz haqimizda
        </button>
        <button>
          <img src={menu} alt="" />
        Biz bilan aloqa
        </button>
      </div>
      <div className="profil">
        <button onClick={() => navigate("/register")}>
          Profil
          <img src={user} alt="" />
        </button>
      </div>
    </nav>
  );
}
