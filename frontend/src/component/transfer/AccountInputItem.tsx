import { useState } from 'react';
import { AccountData } from '../../interface';
import formatAmountWithCurrency from '../../utils/formatAmountWithCurrency';
import CurrencyIcon from '../account/CurrencyIcon';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { CurrencySymbol } from '../../constants';
import parseAmountWithCurrency from '../../utils/parseAmountWithCurrency';

interface AccountInputItemProps {
  account: AccountData;
  minAmount: number;
  onChange: (currentAmount: number) => void;
}

const AccountInputItem = ({
  account,
  minAmount,
  onChange,
}: AccountInputItemProps) => {
  const minAmountText = formatAmountWithCurrency(account.currency, minAmount);
  const [inputValue, setInputValue] = useState(minAmountText);
  const currentAmount = parseAmountWithCurrency(inputValue);
  const showMinHint = currentAmount < minAmount;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const currencySymbol = CurrencySymbol[account.currency];
    const regex = new RegExp(`^${currencySymbol}\\d*(\\.\\d{0,2})?$`);
    let nextValue = evt.currentTarget.value;
    if (regex.test(nextValue) || nextValue === '') {
      setInputValue(nextValue);
      onChange(parseAmountWithCurrency(nextValue));
    } else if (/^\d*(\.\d{0,2})?$/.test(nextValue)) {
      nextValue = `${currencySymbol}${nextValue}`;
      setInputValue(nextValue);
      onChange(parseAmountWithCurrency(nextValue));
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
          placeholder={formatAmountWithCurrency(account.currency, 0)}
          value={inputValue}
          onChange={handleInputChange}
          className="text-xl font-semibold bg-transparent text-right focus:outline-none"
        ></input>
      </div>
      <div className="flex flex-row justify-between text-gray-500 text-base font-light">
        <div>
          Balance: {formatAmountWithCurrency(account.currency, account.balance)}
        </div>
        {showMinHint && <div>Minimum amount is {minAmountText}</div>}
      </div>
    </div>
  );
};

export default AccountInputItem;
