import React from 'react';
import { BrandCategory } from './CategoryIcon';
import BrandIcon from './BrandIcon';

interface TransferRecordItemProps {
  transferId: number | string;
  brand: string;
  category: BrandCategory;
}

const TransferRecordItem: React.FC<TransferRecordItemProps> = ({
  brand,
  category,
}) => {
  return (
    <div className="w-full h-12 px-4 bg-gray-100 flex flex-row items-center first:rounded-t-xl last:rounded-b-xl">
      <BrandIcon brand={brand} category={category}></BrandIcon>
      <div className="ml-4 flex flex-col grow">
        <div className="flex flex-row justify-between items-end">
          <span className="text-xl">{brand}</span>
          <span className="text-lg">-$100</span>
        </div>
        <div className="text-sm text-gray-500">Today, 4:43PM</div>
      </div>
    </div>
  );
};

export default TransferRecordItem;
