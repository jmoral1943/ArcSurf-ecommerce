import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/Arc_Surf.svg";
import surferOne from "../../assets/png/surf1.png";
import surferTwo from "../../assets/png/surf2.png";
import Footer from "../Layout/Footer";

const Landing = () => (
  <React.Fragment>
    <header className="c-header--landing">
      <div className="c-header__nav--landing">
        <Link to="/" className="c-nav__link--landing">
          Mens
        </Link>
        <Link to="/" className="c-nav__link--landing">
          Womens
        </Link>
      </div>
      <Link to="/">
        <img alt="Arc surf Logo" src={logo} className="c-landing__logo" />
      </Link>
    </header>
    <main className="c-main--landing">
      <div className="c-landing__hero">
        <img alt="Man surfing" src={surferOne} className="c-landing__image" />
        <div className="c-hero__action">
          <h2 className="c-action__header">Mens</h2>
          <Link to="/" className="c-action__button">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="c-landing__hero">
        <img alt="Woman surfing" src={surferTwo} />
        <div className="c-hero__action">
          <h2 className="c-action__header">Womens</h2>
          <Link to="/" className="c-action__button">
            Shop Now
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </React.Fragment>
);

export default Landing;
