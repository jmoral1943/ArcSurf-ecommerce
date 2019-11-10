import React from "react";

const VerticalCarousel = props => {
  let count = 0;

  const handleDown = () => {
    const up = document.querySelectorAll(".c-vertcarousel__image")
    count--;
    up[count].style.height = 0
  }

  const handleUp = () => {
    const up = document.querySelectorAll(".c-vertcarousel__image")
    
    count++;
    up[count].style.height = 0
  }

  return (
    <div className="c-vertcarousel">
    {
      count > 0 && <img onClick={handleDown} alt="arrow up" className="c-vertcarousel__upArrow" src={require("../../../../assets/images/arrow-down.svg")} />
    }
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
      {
        count < 1 && <img alt="arrow down" onClick={handleUp} className="c-vertcarousel__downArrow" src={require("../../../../assets/images/arrow-down.svg")} />
      }
    </div>
  );
};

export default VerticalCarousel;
