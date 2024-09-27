import { CurrencyFullName } from '../../constants';
import { AccountData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import CurrencyIcon from './CurrencyIcon';

interface AccountItemProps {
  data: AccountData;
  selected?: boolean;
  onClick: () => void;
}

const AccountItem = ({ data, selected = false, onClick }: AccountItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row justify-between h-16 w-full items-center px-4 text-white bg-gray-500 bg-opacity-80 first:rounded-t-lg last:rounded-b-lg"
    >
      <div className="flex flex-row items-center">
        <CurrencyIcon currency={data.currency} tick={selected}></CurrencyIcon>
        <div className="text-lg ml-2">{CurrencyFullName[data.currency]}</div>
      </div>

      <div className="text-lg font-light">
        {formatTransactionAmount(data.currency, data.amount)}
      </div>
    </div>
  );
};

export default AccountItem;
