import React from 'react';
import bannerOne from '../../../assets/png/banner1.jpeg';
import bannerTwo from '../../../assets/png/banner2.jpeg'

const Banner = () =>  (
    <div className="c-banner">
      <img src={bannerOne} alt="Surfer" className="c-banner__image--larger"/>
      <img src={bannerTwo} alt="Surfboard" className="c-banner__image--smaller"/>
      <h2 className="c-banner__title">Surf Shop</h2>
    </div>
  );

export default Banner;