import * as actionTypes from "./actions";

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
          return item.price < 100
        } else if (action.price === 'mid') {
          return item.price >= 100 && item.price < 300
        } else {
          return item.price >= 300
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
