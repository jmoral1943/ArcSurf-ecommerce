import React from "react";

import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="c-createAccount">
      <h2 className="c-createAccount__title">Create Account</h2>
      <form>
        <input
          className="c-createAccount__input"
          type="text"
          placeholder="First Name*"
          required
        />
        <input
          className="c-createAccount__input"
          type="text"
          placeholder="Last Name*"
          required
        />
        <input
          className="c-createAccount__input"
          type="email"
          placeholder="Email*"
          required
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
        />
        <label htmlFor="birthday">Date of Birth*</label>
        <input
          className="c-createAccount__input c-createAccount__input--date"
          type="date"
          id="birthday"
          min="1920-01-01"
          max="2001-12-31"
          required
        />
        <button className="c-createAccount__button">Create Account</button>
      </form>
      <p>
        By creating an account, you agree to ArchSurfer’s
        <Link to="/termsofuse" className="c-createAccount__terms"> Terms of Use </Link>and 
        <Link to="/privacypolicy" className="c-createAccount__terms"> Privacy Policy </Link>
      </p>
    </div>
  );
};

export default CreateAccount;
