import { TransactionDetail } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import BrandIcon from '../transaction/BrandIcon';
import TransactionDetailItem from './TransactionDetailItem';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface TransactionDetailViewProps {
  data: TransactionDetail;
}

const TransactionDetailView = ({ data }: TransactionDetailViewProps) => {
  return (
    <div className="bg-gray-100 w-full h-full rounded-xl p-4">
      <div>
        <XMarkIcon className="size-6"></XMarkIcon>
      </div>

      <div className="mt-6 flex flex-row justify-between">
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
    </div>
  );
};

export default TransactionDetailView;
