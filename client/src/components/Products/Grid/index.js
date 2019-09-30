import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionTypes from "../../../store/actions";
import ItemCard from "./ItemCard";

const Grid = props => {
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
    <div className="c-grid">
      {props.items &&
        props.items.map(item => (
          <ItemCard
            key={item.product_name}
            name={item.product_name}
            url={item.product_url}
            price={item.product_price}
            sizes={item.sizes}
          />
        ))}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
