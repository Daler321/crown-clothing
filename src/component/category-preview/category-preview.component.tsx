import {
  CategoryPriviewContainer,
  Title,
  Preview,
} from './category-preview.style';
import React, { FC } from 'react';

import ProductCard from '../product-card/product-card.component';
import { CategoryItem } from '../../store/categories/categories.types';

export type CategoryPriviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPriview: FC<CategoryPriviewProps> = ({ title, products }) => {
  return (
    <CategoryPriviewContainer>
      <h2>
        <Title to={`/shop/${title}`}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPriviewContainer>
  );
};

export default CategoryPriview;
