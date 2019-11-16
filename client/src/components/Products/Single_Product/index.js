import React from 'react';
import VerticalCarousel from './VerticalCarousel';
import ShowCasePhoto from './ShowCasePhoto';
import Stats from './Stats';
import Details from './Details';
import Recommendations from '../Recommendations';
import ProductReview from './ProductReview';

const Single_Product = () => {
  const imglist = ['est2.jpg','est3.jpg','est4.jpg','est5.jpg']

  return (
    <div>
      <div className="c-singleproduct__item">
        <VerticalCarousel img={imglist}/>
        <ShowCasePhoto />
        <Stats />
      </div>
      <Details />
      <Recommendations />
      <ProductReview />
    </div>
  );
};

export default Single_Product;