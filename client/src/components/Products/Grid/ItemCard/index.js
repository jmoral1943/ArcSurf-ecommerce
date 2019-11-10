import React from 'react';

const ItemCard = (props) => (
    <div className="c-itemcard">
      <img src={require(`../../../../assets/png/${props.url}`)} alt={props.name} className="c-itemcard__image"/>
      <p className="c-itemcard__name"><b>{props.name}</b></p>
      <p className="c-itemcard__price">{Number.parseFloat(props.price).toFixed(2)}</p>
      {
        props.sizes && 
        <p className="c-itemcard__sizes">{props.sizes}</p>
      }
    </div>
);

export default ItemCard;