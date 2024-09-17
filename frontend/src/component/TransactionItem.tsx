import React from 'react';
import { BrandCategory } from './CategoryIcon';
import BrandIcon from './BrandIcon';

export interface TransactionData {
  transactionId: number | string;
  transactionDate: string;
  brand: string;
  category: BrandCategory;
}

export interface TransactionItemProps extends TransactionData {
  onClick: (transactionId: number | string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transactionId,
  transactionDate,
  brand,
  category,
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        onClick(transactionId);
      }}
      className="w-full h-16 px-4 bg-gray-100 flex flex-row items-center first:rounded-t-xl last:rounded-b-xl"
    >
      <BrandIcon brand={brand} category={category}></BrandIcon>
      <div className="ml-4 flex flex-col grow">
        <div className="flex flex-row justify-between items-end">
          <span className="text-xl">{brand}</span>
          <span className="text-lg">-$100</span>
        </div>
        <div className="text-sm text-gray-500">{transactionDate}</div>
      </div>
    </div>
  );
};

export default TransactionItem;
