import * as actionTypes from "./actions";

// keep track of cookies
// first time visting the site
// if there signed in

const initialState = {
  items: [],
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADPRODUCTS:
      return {
        items: action.data,
        products: action.data
      };
    case actionTypes.FILTERPRICE:

      const items = state.products.filter((item) => {
        if (action.price === 'low') {
          return item.product_price < 100
        } else if (action.price === 'mid') {
          return item.product_price >= 100 && item.product_price < 300
        } else {
          return item.product_price >= 300
        }
      })
      return{
        ...state,
        items: items
      }
    default:
      return state;
  }
};

export default reducer;
