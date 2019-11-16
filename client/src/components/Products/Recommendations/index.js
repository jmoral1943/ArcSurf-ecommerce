import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actionTypes from "../../../store/actions";
import ItemCard from "../Grid/ItemCard";

const Recommendations = props => {
  useEffect(() => {
    axios
      .get("/api/products")
      .then(({ data }) => {
        props.loadState(data);
      })
      .catch(error => {
        throw new Error("Couldn't fetch data from the database", error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="c-recommend">
      <p className="c-recommend__title">Recommendations</p>
      <div className="c-recommend__items">
        {props.items &&
          props.items.map((item, index) => {
            if (index > 3) {
              return null;
            }
            return (
              <ItemCard
                key={item.name}
                name={item.name}
                url={item.url}
                price={item.price}
                sizes={item.sizes}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadState: data => dispatch({ type: actionTypes.LOADPRODUCTS, data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
