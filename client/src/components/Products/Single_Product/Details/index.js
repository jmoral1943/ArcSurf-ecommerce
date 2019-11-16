import React from "react";

const Details = () => {
  return (
    <div className="c-details">
      <h3 className="c-details__title">Details</h3>
      <p>
        <span className="c-details__highlight">Style: </span>
        <span className="c-details__light c-details__number">M9239Df</span>
      </p>
      <p className="c-details__light c-details__descr">
        Whether layering with a jacket or just on its own, the Essential thermal
        is just that Essential. This long sleeve crew features a waffle knit
        fabric and a garment wash with softener for an extra cozy finish. Look
        out for the logo clamp at the bottom hem.
      </p>
      <p className="c-details__highlight">Features</p>
      <ul className="c-features">
        <li className="c-feature"> Men’s thermal crew</li>
        <li className="c-feature"> Waffle knit</li>
        <li className="c-feature"> Logo cam</li>
        <li className="c-feature"> Garment wash</li>
      </ul>
    </div>
  );
};

export default Details;
