import React from 'react';

const Hamburger = (props) => (
  <button onClick={props.handleNav} className="hamburger hamburger--spin" type="button" aria-label="Hamburger-icon">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
);

export default Hamburger;