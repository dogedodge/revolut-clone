import React from 'react';
import BrandIcon from './BrandIcon';
import { TransactionData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import formatUTCtoLocal from '../../utils/formatUTCtoLocal';

export interface TransactionItemProps {
  data: TransactionData;
  onClick: (transactionId: number | string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(data.transactionId);
      }}
      className="w-full h-16 px-4 bg-gray-100 flex flex-row items-center first:rounded-t-xl last:rounded-b-xl"
    >
      <BrandIcon brand={data.brand} category={data.category}></BrandIcon>
      <div className="ml-4 flex flex-col grow">
        <div className="flex flex-row justify-between items-end">
          <span className="text-xl">{data.brand}</span>
          <span className="text-lg">
            {formatTransactionAmount(data.currency, data.amount)}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          {formatUTCtoLocal(data.transactionDate)}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
