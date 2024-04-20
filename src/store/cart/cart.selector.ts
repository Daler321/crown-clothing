import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((acc, item) => (acc += item.quantity), 0)
);

export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const selectCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.cartOpen
);
