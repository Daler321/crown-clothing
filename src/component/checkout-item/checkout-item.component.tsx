import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItem, reduceItem, removeItem } from '../../store/cart/cart.acton';
import { CartItemT } from '../../store/cart/cart.types';

import {
  CheckoutItemContainer,
  ImageContainer,
  Info,
  Quantity,
  Arrow,
  Value,
  RemoveBtn,
} from './checkout-item.style';

export type CheckoutItemProps = {
  item: CartItemT;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProduct = () => dispatch(addItem(item, cartItems));
  const reduceProduct = () => dispatch(reduceItem(item, cartItems));
  const removeProduct = () => dispatch(removeItem(item, cartItems));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Info>{name}</Info>
      <Quantity>
        <Arrow onClick={reduceProduct}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addProduct}>&#10095;</Arrow>
      </Quantity>
      <Info>{price * quantity}</Info>
      <RemoveBtn onClick={removeProduct}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
