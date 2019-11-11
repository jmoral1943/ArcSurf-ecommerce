import React, { useState } from "react";

const VerticalCarousel = props => {
  const [count, setCount] = useState(0);

  const handleDown = async () => {
    const up = document.querySelectorAll(".c-vertcarousel__image");
    const topToShow = count - 1;

    setCount(topToShow);
    up[topToShow].style.height = "210px";
  };

  const handleUp = () => {
    const up = document.querySelectorAll(".c-vertcarousel__image");

    if (count + 4 > up.length) {
      return;
    }

    up[count].style.height = 0;
    const i = count + 1;
    setCount(i);
  };

  return (
    <div className="c-vertcarousel">
      {count > 0 && (
        <img
          onClick={handleDown}
          alt="arrow up"
          className="c-vertcarousel__upArrow"
          src={require("../../../../assets/images/arrow-down.svg")}
        />
      )}
      <div className="c-vertcarousel__carousel">
        {props.img.map(img => (
          <img
            className="c-vertcarousel__image"
            src={require(`../../../../assets/png/${img}`)}
            key={img}
            alt={img}
          />
        ))}
      </div>
      {count + 3 < props.img.length && (
        <img
          alt="arrow down"
          onClick={handleUp}
          className="c-vertcarousel__downArrow"
          src={require("../../../../assets/images/arrow-down.svg")}
        />
      )}
    </div>
  );
};

export default VerticalCarousel;
