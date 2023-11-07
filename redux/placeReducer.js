import { ADD_CART } from '../actions/types';
const initialState = [];
const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CART:
      return {
        ...state,
        places: state.cart.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}
export default placeReducer;
