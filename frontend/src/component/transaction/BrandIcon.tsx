import React from 'react';
import CategoryIcon from './CategoryIcon';
import { TransactionCategory } from '../../interface';

const validBrands: string[] = [
  'mcdonalds',
  'kfc',
  'starbucks',
  'tesco',
  'sainsburys',
  'waitrose',
];

interface BrandIconProps {
  brand: string;
  category: TransactionCategory;
}

const BrandIcon: React.FC<BrandIconProps> = ({ brand, category }) => {
  const lowerCaseBrand = brand.toLocaleLowerCase();

  return (
    <div>
      {validBrands.includes(lowerCaseBrand) ? (
        <img
          className="h-10 w-10 object-contain"
          src={`${import.meta.env.BASE_URL}brands/${lowerCaseBrand}.png`}
        ></img>
      ) : (
        <CategoryIcon category={category}></CategoryIcon>
      )}
    </div>
  );
};

export default BrandIcon;
