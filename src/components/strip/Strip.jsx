import React from "react";
import style from "./Strip.module.css";
import image1 from "../../assets/images/image-retro-pcs.jpg";
import image2 from "../../assets/images/image-top-laptops.jpg";
import image3 from "../../assets/images/image-gaming-growth.jpg";

const Strip = () => {
  return (
    <div className={style.stripContainer}>
      <div className={style.contentContainer}>
        <img src={image1} alt="Retro PCs" />
        <div className={style.textContainer}>
          <h1>01</h1>
          <h2>Reviving Retro PCs</h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={style.contentContainer}>
        <img src={image2} alt="Top Laptops" />
        <div className={style.textContainer}>
          <h1>02</h1>
          <h2>Top 10 Laptops of 2022</h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className={style.contentContainer}>
        <img src={image3} alt="Growth Gaming" />
        <div className={style.textContainer}>
          <h1>03</h1>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Strip;
