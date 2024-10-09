import { TransactionDetail } from '../../interface';
import formatAmountWithCurrency from '../../utils/formatAmountWithCurrency';
import BrandIcon from '../transaction/BrandIcon';
import TransactionDetailItem from './TransactionDetailItem';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export type TransactionDetailEvent = {
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
    <div className={`bg-gray-100 ${className}`}>
      <div className="flex flex-row justify-between">
        <div>
          <div className="text-3xl font-bold">
            {formatAmountWithCurrency(data.currency, data.amount)}
          </div>
          <div className="text-indigo-700 text-xl mt-1">{data.recipient}</div>
          <div className="text-gray-500 text-lg font-light mt-1">
            {data.createAt}
          </div>
        </div>

        <BrandIcon brand={data.recipient} category={data.category}></BrandIcon>
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
        <TransactionDetailItem title={`Spent at ${data.recipient}`}>
          <div>
            {formatAmountWithCurrency(data.currency, data.totalSpentAtBrand)}
          </div>
        </TransactionDetailItem>
        <TransactionDetailItem title="Number of transactions">
          <div>{data.numberOfTransAtBrand}</div>
        </TransactionDetailItem>
        <TransactionDetailItem
          title="See all"
          solidTitle
          onClick={() => {
            onClick && onClick({ type: 'seeAll', payload: data.recipient });
          }}
        >
          <ChevronRightIcon className="size-6 text-gray-400"></ChevronRightIcon>
        </TransactionDetailItem>
      </div>
    </div>
  );
};

export default TransactionDetailView;
