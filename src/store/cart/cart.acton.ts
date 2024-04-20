import { CategoryItem } from '../categories/categories.types';
import { CART_ACTION_TYPE, CartItemT } from './cart.types';
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

const addCartItem = (
  cartItems: CartItemT[],
  productToAdd: CategoryItem
): CartItemT[] => {
  const itemInCart = cartItems.find((item) => item.id === productToAdd.id);

  if (itemInCart) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (
  cartItems: CartItemT[],
  productToRemove: CategoryItem
): CartItemT[] => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const reduceCartItem = (
  cartItems: CartItemT[],
  productToReduce: CategoryItem
): CartItemT[] => {
  const newCart = cartItems.filter((item) => {
    if (item.id === productToReduce.id) {
      if (item.quantity - 1 <= 0) {
        return false;
      } else {
        return { ...item, quantity: (item.quantity -= 1) };
      }
    } else {
      return item;
    }
  });

  return newCart;
};

export type CartToggle = Action<CART_ACTION_TYPE.TOGGLE_CART>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPE.SET_CART_ITEMS,
  CartItemT[]
>;

export const cartToggle = withMatcher(
  (): CartToggle => createAction(CART_ACTION_TYPE.TOGGLE_CART)
);

export const setCartItems = withMatcher((cartItems: CartItemT[]) =>
  createAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems)
);

export const addItem = (productToAdd: CategoryItem, cartItems: CartItemT[]) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItem = (
  productToRemove: CategoryItem,
  cartItems: CartItemT[]
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const reduceItem = (
  productToReduce: CategoryItem,
  cartItems: CartItemT[]
) => {
  const newCartItems = reduceCartItem(cartItems, productToReduce);
  return setCartItems(newCartItems);
};
