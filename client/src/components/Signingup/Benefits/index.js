import React from 'react';

const Benefits = () => {
  return (
    <div className="c-benefits">
      {/* <img src={require("../../../assets/png/joinImage.jpeg")} alt="Background with water"/> */}
      <img src={require("../../../assets/png/joinImage2.jpeg")} alt="Background with water" className="c-benefits__image"/>
      <div className="c-benefits-text">
        <p className="c-benefits__title">Besides free shipping get rewards, faster checkout, and 200 points just for signing up.</p>
        <p className="c-benefits__title">You already get your first reward.</p>
        <p className="c-benefits__title c-benefits__title--smaller">$1 spent = 1 point</p>
        <p className="c-benefits__title c-benefits__title--smaller">200 points = $15 off</p>
      </div>
    </div>
  );
};

export default Benefits;