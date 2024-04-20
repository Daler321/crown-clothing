import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CategoryItem } from '../../store/categories/categories.types';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItem } from '../../store/cart/cart.acton';

import { ProductContainer, Footer, Name, Price } from './product-card.style';

export type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(product, cartItems));

  return (
    <ProductContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductContainer>
  );
};

export default ProductCard;
