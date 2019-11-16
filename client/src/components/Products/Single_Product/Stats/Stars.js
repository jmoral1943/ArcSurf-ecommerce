import React from "react";

const Stars = () => {
  return (
    <div className="c-stats__stars">
      <img
        className="c-stats__star"
        src={require("../../../../assets/images/star-o.svg")}
        alt="Star rating"
      />
      <img
        className="c-stats__star"
        src={require("../../../../assets/images/star-o.svg")}
        alt="Star rating"
      />
      <img
        className="c-stats__star"
        src={require("../../../../assets/images/star-o.svg")}
        alt="Star rating"
      />
      <img
        className="c-stats__star"
        src={require("../../../../assets/images/star-o.svg")}
        alt="Star rating"
      />
      <img
        className="c-stats__star"
        src={require("../../../../assets/images/star-o.svg")}
        alt="Star rating"
      />
    </div>
  );
};

export default Stars;
