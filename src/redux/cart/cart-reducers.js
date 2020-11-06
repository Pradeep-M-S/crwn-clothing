import { cartActionTypes } from "./cart-types";

const INITIAL_STATE = {
  cartDropdownHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartDropdownHidden: !state.cartDropdownHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;