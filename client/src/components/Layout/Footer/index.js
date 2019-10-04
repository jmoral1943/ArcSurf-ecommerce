import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/Arc_Surf.svg";
import List from "./List";
import youtube from "../../../assets/images/youtube.svg";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/instagram.svg";
import twitter from "../../../assets/images/twitter.svg";

const Footer = () => (
  <footer className="footer">
    <div className="c-footer">
      <img alt="ArcSurf logo" src={logo} className="c-footer__logo" />
      <div className="c-footer__links">
        <div className="c-social-media">
          <p className="c-social-media__text">
            <b>Follow our surfing community</b>
          </p>
          <div className="c-social-media__icons">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Youtube link"
                src={youtube}
                className="c-social-media__icon"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook link"
                src={facebook}
                className="c-social-media__icon"
              />
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Instagram link"
                src={instagram}
                className="c-social-media__icon"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Twitter link"
                src={twitter}
                className="c-social-media__icon"
              />
            </a>
          </div>
        </div>
        <div className="c-footer__lists">
          <List
            title="Support"
            items={[
              { name: "Order status", url: "/order" },
              { name: "Shipping", url: "/shipping" },
              { name: "Contact Us", url: "/contact" }
            ]}
          />
          <List
            title="Shop Mens"
            items={[
              { name: "Surfboards", url: "/products?type=surfboards" },
              { name: "Shoes", url: "/products?type=shoes" },
              { name: "Shirts", url: "/products?type=shirts" },
            ]}
          />
          <List
            title="Shop Womens"
            items={[
              { name: "Surfboards", url: "/products?type=surfboards" },
              { name: "Jackets", url: "/products?type=jackets" }
            ]}
          />
        </div>
      </div>
    </div>
    <div className="c-footer-policies">
      <div className="c-footer-policy__links">
        <Link to="/privacypolicy" className="c-footer-policy__link">
          Privacy Policy
        </Link>
        <Link to="/termsofuse" className="c-footer-policy__link">
          Terms of Use
        </Link>
        <Link to="/contact" className="c-footer-policy__link">
          Location
        </Link>
      </div>
      <p className="c-footer-policy__text">&copy; 2019 ArcSurf</p>
    </div>
  </footer>
);

export default Footer;
