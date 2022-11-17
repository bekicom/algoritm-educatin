import React, { memo } from "react";
import "./navbar.css";
import logo from "../../asets/nav/Vector.png";
import menu from "../../asets/nav/menu.svg";
import user from "../../asets/nav/user.svg";
import { Register } from "../pages/Register/Register";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
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
          <button onClick={() => setOpen(true)}>
            Profil
            <img src={user} alt="" />
          </button>
        </div>
      </nav>
      <div className="register_modol" style={open ? { display: "flex" } : {}}>
        <Register setOpen={setOpen} />
      </div>
    </>
  );
};

export default memo(Navbar);
