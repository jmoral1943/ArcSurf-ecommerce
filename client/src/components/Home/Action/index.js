import React from "react";
import { Link } from 'react-router-dom'

import background from "../../../assets/png/home3.png";
import people from "../../../assets/png/home4.jpeg";

const Action = () => (
  <div className="c-home-action">
    <img
      alt="Under the ocean"
      src={background}
      className="c-home-action__background-image"
    />

    <img
      alt="people at the beach around a campfire"
      src={people}
      className="c-home-action__image"
    />
    <div className="c-home-action__card">
      <h3 className="c-home-action__title">Come out & Have some Fun</h3>
      <p className="c-home-action__text">
        Take a vacation love the beach. Come to Arc surf and rest your mind that
        we have everything yo would need to make a memorable trip.
      </p>
      <Link to="/products" className="c-home-action__link">
        Suit Up
      </Link>
    </div>
  </div>
);

export default Action;
