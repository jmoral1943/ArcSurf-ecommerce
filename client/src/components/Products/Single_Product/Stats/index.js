import React from "react";
import Stars from "./Stars";

const Stats = () => {
  return (
    <div className="c-stats">
      <h1 className="c-stats__title">Essential Thermal</h1>
      <div className="c-stats__info">
        <h2 className="c-stats__price">$29.95</h2>
        <div className="c-stats__rating">
          <Stars/>
          <p className="c-stats__write">Write a review</p>
        </div>
      </div>

      <div className="c-color">
        <div className="c-colors">
          <p>Color: Navy Blue</p>
          <div className="c-colors__images">
            <img className="c-colors__image" src={require("../../../../assets/png/est2.jpg")} alt="essential thermal navy blue"/>
            <img className="c-colors__image" src={require("../../../../assets/png/estG1.jpg")} alt="essential thermal navy blue"/>
            <img className="c-colors__image" src={require("../../../../assets/png/estH1.jpg")} alt="essential thermal navy blue"/>
          </div>
        </div>
      </div>

      <div >
        <p>Size:</p>
        <div className="c-sizes">
          <p className="c-size">S</p>
          <p className="c-size">M</p>
          <p className="c-size">L</p>
          <p className="c-size">XL</p>
        </div>
      </div>

      <div>
        <button className="c-stats__addToCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Stats;
