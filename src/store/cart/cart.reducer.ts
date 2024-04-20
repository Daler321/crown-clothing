import { UnknownAction } from 'redux';

import { CartItemT } from './cart.types';
import { cartToggle, setCartItems } from './cart.acton';

export type CartState = {
  readonly cartOpen: boolean;
  readonly cartItems: CartItemT[];
};

const CART_INITIAL_STATE: CartState = {
  cartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: UnknownAction
): CartState => {
  if (cartToggle.match(action)) {
    return { ...state, cartOpen: !state.cartOpen };
  }

  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  return state;

  // switch (type) {
  //   case CART_ACTION_TYPE.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPE.TOGGLE_CART:
  //     return {
  //       ...state,
  //       cartOpen: !state.cartOpen,
  //     };
  //   default:
  //     return state;
  // }
};
