import React from "react";
import style from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={style.gridContainer}>
      <div className={style.firstGrid}>
        <div className={style.image1}></div>
        <div className={style.firstGridText}>
          <div className={style.firstGridTextH1}>
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className={style.firstGridTextP}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
      <div className={style.secondGrid}>
        <div className={style.secondGrid1}>
          <h1>New</h1>
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr className={style.gridHr} />
        <div className={style.secondGrid2}>
          <h4>The Downsides of Al Artistry</h4>
          <p>
            What are the possible adverse effects of on-demand Al image
            generation?
          </p>
        </div>
        <hr className={style.gridHr} />
        <div className={style.secondGrid3}>
          <h4>Is VC Funding Drying Up?</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
