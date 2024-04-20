import React, { FC } from 'react';

import {
  DirectoryContainer,
  DirectoryBodyConteiner,
  BackgroundImage,
} from './directory-item.style';

import { DirectoryCategory } from '../directory/directory.component';

export type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryContainer to={`/shop/${title}`}>
      <BackgroundImage $imageUrl={imageUrl} />
      <DirectoryBodyConteiner>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyConteiner>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
