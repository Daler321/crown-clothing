import { CategoryItem } from '../categories/categories.types';

export enum CART_ACTION_TYPE {
  SET_CART_ITEMS = 'SET_CART_ITEMS',
  TOGGLE_CART = 'TOGGLE_CART',
}

export type CartItemT = CategoryItem & {
  quantity: number;
};
