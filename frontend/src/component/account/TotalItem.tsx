import { Currency } from '../../interface';
import { CircleStackIcon } from '@heroicons/react/24/solid';
import formatTransactionAmount from '../../utils/formatTransactionAmount';

interface TotalItemProps {
  currency: Currency;
  amount: number | string;
}

const TotalItem = ({ currency, amount }: TotalItemProps) => {
  return (
    <div className="flex flex-row justify-between h-16 w-full items-center px-4 text-white bg-gray-500 bg-opacity-80 first:rounded-t-lg last:rounded-b-lg">
      <div className="flex flex-row items-center">
        <div className="size-10 bg-gray-500 rounded-full flex items-center justify-center">
          <CircleStackIcon className="text-white size-6"></CircleStackIcon>
        </div>
        <div className="text-lg ml-2">All accounts</div>
      </div>

      <div className="text-lg font-light">
        {formatTransactionAmount(currency, amount)}
      </div>
    </div>
  );
};

export default TotalItem;
