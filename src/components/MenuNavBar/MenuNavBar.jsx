import React from "react";
import style from "./MenuNavBar.module.css";

const MenuNavBar = (props) => {
  const { open } = props;
  return (
    <div className={open === true ? style.open : style.close}>
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
    </div>
  );
};

export default MenuNavBar;
