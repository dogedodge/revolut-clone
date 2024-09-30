import { useState } from 'react';
import { AccountData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import CurrencyIcon from '../account/CurrencyIcon';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { CurrencySymbol } from '../../constants';

interface AccountInputItemProps {
  account: AccountData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccountInputItem = ({ account, onChange }: AccountInputItemProps) => {
  const minAmount = formatTransactionAmount(account.currency, 10);
  const [inputValue, setInputValue] = useState(minAmount);
  const currentAmount = Number(inputValue.replace(/\D/g, ''));
  // console.log(`currentAmount: ${currentAmount}`);
  const showMinHint = currentAmount < 10;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const currencySymbol = CurrencySymbol[account.currency];
    const regex = new RegExp(`^${currencySymbol}\\d*$`);
    const nextValue = evt.currentTarget.value;
    if (regex.test(nextValue) || nextValue === '') {
      setInputValue(nextValue);
    } else if (/^\d*$/.test(nextValue)) {
      setInputValue(`${currencySymbol}${nextValue}`);
    }
  };

  return (
    <div className="bg-gray-300 rounded-xl h-20 w-full p-4">
      <div className="flex flex-row justify-between select-none">
        <div className="flex flex-row items-center">
          <CurrencyIcon
            currency={account.currency}
            variant="mini"
          ></CurrencyIcon>
          <span className="ml-2 text-xl">{account.currency}</span>
          <ChevronDownIcon className="text-gray-600 size-4 ml-2"></ChevronDownIcon>
        </div>
        <input
          type="text"
          placeholder={formatTransactionAmount(account.currency, 0)}
          value={inputValue}
          onChange={handleInputChange}
          className="text-xl font-semibold bg-transparent text-right focus:outline-none"
        ></input>
      </div>
      <div className="flex flex-row justify-between text-gray-500 text-base font-light">
        <div>
          Balance: {formatTransactionAmount(account.currency, account.amount)}
        </div>
        {showMinHint && <div>Minimum amount is {minAmount}</div>}
      </div>
    </div>
  );
};

export default AccountInputItem;
