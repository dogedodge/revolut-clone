import BrandIcon from './BrandIcon';
import { TransactionData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import formatUTCtoLocal from '../../utils/formatUTCtoLocal';

export type TimeDisplayType = 'datetime' | 'time';
export interface TransactionItemProps {
  data: TransactionData;
  onClick: (transactionId: number | string) => void;
  timeDisplayType?: TimeDisplayType;
}

const TransactionItem = ({
  data,
  onClick,
  timeDisplayType = 'datetime',
}: TransactionItemProps) => {
  return (
    <div
      onClick={() => {
        onClick(data.id);
      }}
      className="w-full h-16 px-4 bg-gray-50 flex flex-row items-center first:rounded-t-xl last:rounded-b-xl"
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
          {formatUTCtoLocal(data.date, timeDisplayType)}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
