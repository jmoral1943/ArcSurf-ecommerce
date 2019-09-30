import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionTypes from "../../../../store/actions";

const Filter = props => {
  const handleFilters = (type, size) => {
    axios.get(`/api/products/?type=${type}&size=${size}`).then(({data}) => {
      props.loadState(data)
    }).catch(error => {
      throw new Error("Couldn't fetch data from the database", error);
    });
  };

  const handleAllProducts = () => {
    axios.get('/api/products').then(({data}) => {
      props.loadState(data)
    }).catch(error => {
      throw new Error("Couldn't fetch data from the database", error);
    });
  }

  return (
    <div className="c-grid-filter">
      <h2 className="c-grid__allproducts" onClick={handleAllProducts}>All products</h2>
      <div>
        <h2 className="c-grid-filters">Price:</h2>
        <p className="c-grid__filter" onClick={() => props.filterPrice('low')}>$ >100</p>
        <p className="c-grid__filter" onClick={() => props.filterPrice('mid')}>$$ 100 &lt; 300 </p>
        <p className="c-grid__filter" onClick={() => props.filterPrice('high')}>$$$ 300 &lt;</p>
      </div>
      <div>
        <h2 className="c-grid-filters">Surfboards</h2>
        <p className="c-grid__filter" onClick={() => handleFilters('surfboard', "6'5")}>Size 6'5</p>
        <p className="c-grid__filter" onClick={() => handleFilters('surfboard', "6'9")}>Size 6'9</p>
        <p className="c-grid__filter" onClick={() => handleFilters('surfboard', "7'1")}>Size 7'1</p>
        <p className="c-grid__filter" onClick={() =>handleFilters('surfboard', "7'4")}>Size 7'4</p>
      </div>
      <div>
        <h2 className="c-grid-filters">Shirts</h2>
        <p className="c-grid__filter" onClick={() => handleFilters('shirt', "S")}>S</p>
        <p className="c-grid__filter" onClick={() => handleFilters('shirt', "M")}>M</p>
        <p className="c-grid__filter" onClick={() => handleFilters('shirt', "L")}>L</p>
        <p className="c-grid__filter" onClick={() => handleFilters('shirt', "XL")}>XL</p>
      </div>
      <div>
        <h2 className="c-grid-filters">Shoes</h2>
        <p className="c-grid__filter" onClick={() => handleFilters('shoe', "9")}>Size 9</p>
        <p className="c-grid__filter" onClick={() => handleFilters('shoe', "10")}>Size 10</p>
        <p className="c-grid__filter" onClick={() => handleFilters('shoe', "11")}>Size 11</p>
        <p className="c-grid__filter" onClick={() => handleFilters('shoe', "12")}>Size 12</p>
      </div>
      <div>
        <h2 className="c-grid-filters">Wetsuits</h2>
        <p className="c-grid__filter" onClick={() => handleFilters('wetsuit', "S")}>S</p>
        <p className="c-grid__filter" onClick={() => handleFilters('wetsuit', "M")}>M</p>
        <p className="c-grid__filter" onClick={() => handleFilters('wetsuit', "L")}>L</p>
        <p className="c-grid__filter" onClick={() => handleFilters('wetsuit', "XL")}>XL</p>
      </div>
      <div>
        <h2 className="c-grid-filters">Jackets</h2>
        <p className="c-grid__filter" onClick={() => handleFilters('jacket', "S")}>S</p>
        <p className="c-grid__filter" onClick={() => handleFilters('jacket', "M")}>M</p>
        <p className="c-grid__filter" onClick={() => handleFilters('jacket', "L")}>L</p>
        <p className="c-grid__filter" onClick={() => handleFilters('jacket', "XL")}>XL</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadState: data => dispatch({type: actionTypes.LOADPRODUCTS, data}),
    filterPrice: price => dispatch({type: actionTypes.FILTERPRICE, price})
  };
};

export default connect( null,mapDispatchToProps)(Filter);
