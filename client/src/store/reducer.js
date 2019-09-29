import * as actionTypes from "./actions";

// keep track of cookies 
// first time visting the site 
// if there signed in

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.SURFBOARDS: 

      return {
        ...state
      }
    case actionTypes.SHOES: 

      return {
        ...state
      }
    case actionTypes.SHIRTS: 

      return {
        ...state
      }
    case actionTypes.WETSUITS: 

      return {
        ...state
      }
    case actionTypes.JACKETS: 

      return {
        ...state
      }    
    default:
      return state;
  }
};

export default reducer;
