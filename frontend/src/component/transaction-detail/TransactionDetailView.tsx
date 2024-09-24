import { TransactionDetail } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import BrandIcon from '../transaction/BrandIcon';
import TransactionDetailItem from './TransactionDetailItem';
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type TransactionDetailEvent = {
  type: 'dismiss' | 'seeAll';
  payload?: string;
};

interface TransactionDetailViewProps {
  data: TransactionDetail;
  className?: string;
  onClick?: (evt: TransactionDetailEvent) => void;
}

const TransactionDetailView = ({
  data,
  className = '',
  onClick,
}: TransactionDetailViewProps) => {
  return (
    <div className={`bg-gray-100 w-full h-screen rounded-xl p-4 ${className}`}>
      <div>
        <div
          className="size-12"
          onClick={() => {
            onClick && onClick({ type: 'dismiss' });
          }}
        >
          <XMarkIcon className="size-6"></XMarkIcon>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <div className="text-3xl font-bold">
            {formatTransactionAmount(data.currency, data.amount)}
          </div>
          <div className="text-indigo-700 text-xl mt-1">{data.brand}</div>
          <div className="text-gray-500 text-lg font-light mt-1">
            {data.transactionDate}
          </div>
        </div>

        <BrandIcon brand={data.brand} category={data.category}></BrandIcon>
      </div>

      <div className="mt-6">
        <TransactionDetailItem title="Status">
          <div>{data.status}</div>
        </TransactionDetailItem>
        <TransactionDetailItem title="Card" highlight>
          <div>{data.card}</div>
        </TransactionDetailItem>
        <TransactionDetailItem title="Category" highlight>
          <div>{data.category}</div>
        </TransactionDetailItem>
      </div>

      <div className="mt-4">
        <TransactionDetailItem title={`Spent at ${data.brand}`}>
          <div>
            {formatTransactionAmount(data.currency, data.totalSpentAtBrand)}
          </div>
        </TransactionDetailItem>
        <TransactionDetailItem title="Number of transactions">
          <div>{data.numberOfTransAtBrand}</div>
        </TransactionDetailItem>
        <TransactionDetailItem
          title="See all"
          solidTitle
          onClick={() => {
            onClick && onClick({ type: 'seeAll', payload: data.brand });
          }}
        >
          <ChevronRightIcon className="size-6 text-gray-400"></ChevronRightIcon>
        </TransactionDetailItem>
      </div>
    </div>
  );
};

export default TransactionDetailView;
