import React from "react";

import leftArrow from "../../../assets/images/circle-left.svg";
import rightArrow from "../../../assets/images/circle-right.svg";
import imageOne from "../../../assets/png/slider1.jpg";
import imageTwo from "../../../assets/png/slider2.jpg";
import imageThree from "../../../assets/png/slider3.jpg";

const Hero = () => {
  let i = 2;

  const handleClick = x => {
    if (x === -1) {
      // 2
      let slide = document.querySelectorAll(".c-carousel");
      slide[i].style.opacity = 0;

      if (i === 0) {
        i = 3;
      }
      i--;

      slide[i].style.opacity = 1;
    } else if (x === 1) {
      let slide = document.querySelectorAll(".c-carousel");
      slide[i].style.opacity = 0;
      console.log(i);
      if (i === 2) {
        i = -1;
      }

      i++;
      console.log(i);

      slide[i].style.opacity = 1;
    }
  };

  return (
    <div className="c-hero">
      <img
        alt="Man Surfing on a wave"
        src={imageOne}
        className="c-hero__image c-carousel"
      />
      <img
        alt="Man Surfing on a wave"
        src={imageTwo}
        className="c-hero__image c-carousel c-hero__image--pushedup"
      />
      <img
        alt="Man Surfing on a wave"
        src={imageThree}
        className="c-hero__image c-carousel c-carousel-starting c-hero__image--smaller "
      />
      <div className="c-hero-content">
        <h1 className="c-hero__header">Premium Boards</h1>
        <p className="c-hero__text">
          At Arc Surf the products are for surfers by surfers. But we also have
          great staff and customer service for beginners. We encourage everyone
          who would love to try shredding to come and be more than glad to help.
        </p>
      </div>

      <img
        alt="Left Arrow"
        src={leftArrow}
        className="c-hero__leftarrow"
        onClick={() => handleClick(-1)}
      />
      <img
        alt="Left Arrow"
        src={rightArrow}
        className="c-hero__rightarrow"
        onClick={() => handleClick(1)}
      />
    </div>
  );
};

export default Hero;
