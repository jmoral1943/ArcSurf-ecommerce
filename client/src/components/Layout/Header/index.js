import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Arc_Surf.svg";
import search from "../../../assets/images/search.svg";
import cart from "../../../assets/images/cart.svg";

const Header = () => (
  <div className="c-header">
    <Link to="/signin" className="c-header__signin">Sign in or Join</Link>
    <nav className="c-nav">
      <ul className="c-nav__list">
        <li className="c-nav__item">
          <Link to="/" className="c-nav__link">
            <img alt="logo" src={logo} />
          </Link>
        </li>
        <li className="c-nav__item">
          <Link to="/products" className="c-nav__link">New Arrivals</Link>
        </li>
        <li className="c-nav__item">
          <Link to="/products" className="c-nav__link">Surfboards</Link>
        </li>
        <li className="c-nav__item">
          <Link to="/products" className="c-nav__link">Accessories</Link>
        </li>
      </ul>
      <div className="c-nav__icons">
        <img alt="Seach bar" src={search} className="c-nav__searchicon"/>
        <Link to="/cart">
          <img alt="Cart" src={cart} className="c-nav__carticon"/>
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
