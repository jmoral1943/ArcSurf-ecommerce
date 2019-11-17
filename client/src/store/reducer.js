import * as actionTypes from "./actions";
import httpClient from "../httpClient";

const initialState = {
  items: [],
  products: [],
  currentUser: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADUSER:
      return {
        ...state,
        currentUser: action.data
      };
    case actionTypes.LOGOUT:
      httpClient.logOut();
      return {
        ...state,
        currentUser: null
      };
    case actionTypes.LOADPRODUCTS:
      return {
        ...state,
        items: action.data,
        products: action.data
      };
    case actionTypes.FILTERPRICE:
      const items = state.products.filter(item => {
        if (action.price === "low") {
          return item.price < 100;
        } else if (action.price === "mid") {
          return item.price >= 100 && item.price < 300;
        } else {
          return item.price >= 300;
        }
      });
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};

export default reducer;
