import { AccountData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import CurrencyIcon from '../account/CurrencyIcon';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccountInputItemProps {
  // currency: Currency;
  account: AccountData;
}

const AccountInputItem = ({ account }: AccountInputItemProps) => {
  return (
    <div className="bg-gray-300 rounded-xl h-20 w-full p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <CurrencyIcon
            currency={account.currency}
            variant="mini"
          ></CurrencyIcon>
          <span className="ml-2 text-xl">{account.currency}</span>
          <ChevronDownIcon className="text-gray-600 size-4 ml-2"></ChevronDownIcon>
        </div>
      </div>
      <div className="text-gray-500 text-base font-light">
        Balance: {formatTransactionAmount(account.currency, account.amount)}
      </div>
    </div>
  );
};

export default AccountInputItem;
