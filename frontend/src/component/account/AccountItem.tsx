import { CurrencyFullName } from '../../constants';
import { AccountData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import CurrencyIcon from './CurrencyIcon';
import { CircleStackIcon } from '@heroicons/react/24/solid';

interface AccountItemProps {
  data: AccountData;
  isTotal?: boolean;
  total?: number;
}

const AccountItem = ({ data, isTotal = false, total }: AccountItemProps) => {
  return (
    <div className="flex flex-row justify-between h-16 w-full items-center px-4 text-white bg-gray-500 bg-opacity-80 first:rounded-t-lg last:rounded-b-lg">
      <div className="flex flex-row items-center">
        {!isTotal && (
          <>
            <CurrencyIcon currency={data.currency}></CurrencyIcon>
            <div className="text-lg ml-2">
              {CurrencyFullName[data.currency]}
            </div>
          </>
        )}
        {isTotal && (
          <>
            <div className="size-10 bg-gray-500 rounded-full flex items-center justify-center">
              <CircleStackIcon className="text-white size-6"></CircleStackIcon>
            </div>
            <div className="text-lg ml-2">All accounts</div>
          </>
        )}
      </div>

      <div className="text-lg font-light">
        {formatTransactionAmount(data.currency, isTotal ? total! : data.amount)}
      </div>
    </div>
  );
};

export default AccountItem;
