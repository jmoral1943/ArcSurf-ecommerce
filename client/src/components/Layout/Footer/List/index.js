import React from "react";
import { Link } from "react-router-dom";

const List = props => (
  <ul className="c-list">
    <li>
      <b>{props.title}</b>
    </li>
    {props.items.map(item => (
      <li key={item.name}>
        <Link key={item.name}to={item.url} className="c-list__link">{item.name}</Link>
      </li>
    ))}
  </ul>
);

export default List;
