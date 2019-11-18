import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import httpClient from "../../../httpClient";
import * as actionTypes from "../../../store/actions";

const CreateAccount = props => {
  let history = useHistory();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitUser = e => {
    e.preventDefault();
    httpClient.signUp({ firstName, lastName, email, password }).then(user => {
      const currentUser = httpClient.getCurrentUser()
      props.loadUser(currentUser);
      if (user) history.push("/admin");
    });
  };

  return (
    <div className="c-createAccount">
      <h2 className="c-createAccount__title">Create Account</h2>
      <form>
        <input
          className="c-createAccount__input"
          type="text"
          placeholder="First Name*"
          required
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          className="c-createAccount__input"
          type="text"
          placeholder="Last Name*"
          required
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className="c-createAccount__input"
          type="email"
          placeholder="Email*"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <div className="c-createAccount-emailListing">
          <input
            type="checkbox"
            id="emailListing"
            className="c-createAccount__input c-createAccount__input--checkbox"
          />
          <label htmlFor="emailListing">
            <p className="c-createAccount__emailListing">
              Be first to recieve news, giveways, loyalty discounts, and other
              great things
            </p>
          </label>
        </div>

        <input
          className="c-createAccount__input"
          type="password"
          placeholder="Password*"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="birthday">Date of Birth*</label>
        <input
          className="c-createAccount__input c-createAccount__input--date"
          type="date"
          id="birthday"
          min="1920-01-01"
          max="2001-12-31"
          // required
        />
        <button
          className="c-createAccount__button"
          onClick={e => submitUser(e)}
        >
          Create Account
        </button>
      </form>
      <p>
        By creating an account, you agree to ArchSurfer’s
        <Link to="/termsofuse" className="c-createAccount__terms">
          Terms of Use
        </Link>
        and
        <Link to="/privacypolicy" className="c-createAccount__terms">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: data => dispatch({ type: actionTypes.LOADUSER, data })
  };
};

export default connect(null, mapDispatchToProps)(CreateAccount);
