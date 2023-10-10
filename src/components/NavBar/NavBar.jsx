import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import style from "./NavBar.module.css";
import MenuNavBar from "../MenuNavBar/MenuNavBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className={style.navBar}>
      <img src={logo} alt="logo" />
      <ul className={style.navBarLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <button
        className={open === true ? style.menuBtnClose : style.menuBtn}
        onClick={handleMenu}
      >
        <hr className={open === true ? style.bigHrX : style.bigHr} />
        <hr className={open === true ? style.littleHrX : style.littleHr} />
      </button>
      <div
        className={open === true ? style.divOverLayOpen : style.divOverLayClose}
        onClick={handleMenu}
      ></div>
      <MenuNavBar open={open} />
    </div>
  );
};

export default NavBar;
