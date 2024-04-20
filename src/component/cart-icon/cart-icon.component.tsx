import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount } from '../../store/cart/cart.selector';
import { cartToggle } from '../../store/cart/cart.acton';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggle = () => dispatch(cartToggle());

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
