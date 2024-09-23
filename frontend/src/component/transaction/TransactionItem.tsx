import React from 'react';
import BrandIcon from './BrandIcon';
import { TransactionData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';

export interface TransactionItemProps extends TransactionData {
  onClick: (transactionId: number | string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transactionId,
  transactionDate,
  brand,
  category,
  currency,
  amount,
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
          <span className="text-lg">
            {formatTransactionAmount(currency, amount)}
          </span>
        </div>
        <div className="text-sm text-gray-500">{transactionDate}</div>
      </div>
    </div>
  );
};

export default TransactionItem;
