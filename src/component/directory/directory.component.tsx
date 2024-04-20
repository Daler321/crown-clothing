import { DirectoryContainer } from './directory.style';
import React, { FC } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
};

export type DirectoryProps = {
  categories: DirectoryCategory[];
};

const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
