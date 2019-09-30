import React from 'react';
import Grid from './Grid';
import Filter from "./Grid/Filter";
import Banner from './Banner';


const Products = () => {
  return (
    <div className="c-products">
      <Banner />    
      <div className="c-productsandfilter">
      <Filter />
      <Grid />
    </div>
    </div>
  );
};

export default Products;