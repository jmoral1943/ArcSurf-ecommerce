import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="c-signin">
      <h2 className="c-signin__title">Sign into your account</h2>
      <input type="email" placeholder="Email *" className="c-signin__input" />
      <input
        type="password"
        placeholder="Password *"
        className="c-signin__input"
      />
      <div className="c-signin__rememberMe">
        <label htmlFor="rememberMe">
          <input
            type="checkbox"
            className="c-signin__checkbox"
            id="rememberMe"
          />
          Remember Me
          <span className="checkmark"></span>
        </label>
      </div>
      <button className="c-signin__button">Sign in</button>
      <Link to="/forgotpassword" className="c-sigin__forgot">
        Forgot your password?
      </Link>
    </div>
  );
};

export default Signin;
