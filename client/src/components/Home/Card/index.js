import React from 'react';
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="c-home-banner__card">
      <img alt={props.name} src={require(`../../../assets/png/${props.url}`)} className="c-home-card__image"/>
      <h2 className="c-home-card__title">{props.collection}</h2>
      <Link to="/products" className="c-home-card__link">
        Shop Now >
      </Link>
    </div>
  );
};

export default Card;