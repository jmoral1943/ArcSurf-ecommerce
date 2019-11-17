import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import httpClient from "../../../httpClient";
import * as actionTypes from "../../../store/actions";

const Signin = props => {
  let history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogIn = e => {
    e.preventDefault();
    httpClient.logIn({ email, password }).then(user => {
      const currentUser = httpClient.getCurrentUser()
      props.loadUser(currentUser);
      if (user) history.push("/admin");
    });
  };

  return (
    <div className="c-signin">
      <h2 className="c-signin__title">Sign into your account</h2>
      <input
        type="email"
        placeholder="Email *"
        className="c-signin__input"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password *"
        className="c-signin__input"
        onChange={e => setPassword(e.target.value)}
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
      <button className="c-signin__button" onClick={e => handleLogIn(e)}>
        Sign in
      </button>
      <Link to="/forgotpassword" className="c-sigin__forgot">
        Forgot your password?
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: data => dispatch({ type: actionTypes.LOADUSER, data })
  };
};
export default connect(null, mapDispatchToProps)(Signin);
