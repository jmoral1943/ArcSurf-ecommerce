import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="c-join">
      
      <h2 className="c-join__title c-join__title--top">Not a Member?</h2>
      <h2 className="c-join__title c-join__title--bottom">Join now!</h2>
      <img alt="arc surf logo" src={require("../../../assets/images/Arc_Surf.svg")}  className="c-join__logo"/>
      <p className="c-join__text">
        Members recieve free shipping, member discounts, and member only apparel
      </p>
      <input type="email" placeholder="Email*" className="c-join__input"/>
      <Link to="/signup" className="c-join__signup">Sign up</Link>
    </div>
  );
};

export default Join;
