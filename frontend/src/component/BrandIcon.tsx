import React from 'react';

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
  return (
    <div>
      {validBrands.includes(brand) && (
        <img
          className="h-10 w-10"
          src={`${import.meta.env.BASE_URL}brands/${brand.toLocaleLowerCase()}.png`}
        ></img>
      )}
    </div>
  );
};

export default BrandIcon;
