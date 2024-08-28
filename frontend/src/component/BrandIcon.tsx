import React from 'react';
import CategoryIcon from './CategoryIcon';

type BrandCategory =
  | 'Restaurants'
  | 'Groceries'
  | 'Shopping'
  | 'Service'
  | 'Transport'
  | 'Entertainment'
  | 'Cash'
  | 'Travel'
  | 'Health'
  | 'General';

const validBrands: string[] = ['starbucks'];

interface BrandIconProps {
  brand: string;
  category: BrandCategory;
}

const BrandIcon: React.FC<BrandIconProps> = ({ brand, category }) => {
  const lowerCaseBrand = brand.toLocaleLowerCase();

  return (
    <div>
      {validBrands.includes(lowerCaseBrand) ? (
        <img
          className="h-10 w-10"
          src={`${import.meta.env.BASE_URL}brands/${lowerCaseBrand}.png`}
        ></img>
      ) : (
        <CategoryIcon category={category}></CategoryIcon>
      )}
    </div>
  );
};

export default BrandIcon;
