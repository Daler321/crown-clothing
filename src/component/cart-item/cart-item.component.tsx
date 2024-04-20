import { CartItemT } from '../../store/cart/cart.types.js';
import {
  CartItemContainer,
  ItemDetails,
  NameContainer,
} from './cart-item.style';
import React, { FC, memo } from 'react';

export type CartItemProps = {
  item: CartItemT;
};

const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
