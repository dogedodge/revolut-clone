import { AccountData, Currency } from '../../interface';
import { XMarkIcon } from '@heroicons/react/24/solid';
import AccountItem from './AccountItem';
import { useState } from 'react';
import TotalItem from './TotalItem';

export type AccountListEvent = {
  type: 'dismiss' | 'item-selected-change';
  payload?: number | string;
};

interface AccountListViewProps {
  accounts: AccountData[];
  totalCurrency: Currency;
  total: number | string;
  className?: string;
  selectedIndex?: number;
  onChange: (evt: AccountListEvent) => void;
}

const AccountListView = ({
  accounts,
  totalCurrency,
  total,
  className = '',
  selectedIndex: _selectedIndex = 0,
  onChange,
}: AccountListViewProps) => {
  const [selectedIndex, setSelectedIndex] = useState(_selectedIndex);

  const handleItemClick = (itemIndex: number) => {
    if (itemIndex !== selectedIndex) {
      setSelectedIndex(itemIndex);
      onChange({ type: 'item-selected-change', payload: itemIndex });
    }
  };

  return (
    <div
      className={`bg-gray-600 bg-opacity-95 w-full h-screen rounded-xl p-4 ${className}`}
    >
      <div
        className="size-12"
        onClick={() => {
          onChange({ type: 'dismiss' });
        }}
      >
        <XMarkIcon className="size-6 text-white"></XMarkIcon>
      </div>

      <div className="text-xl text-white">Accounts</div>

      <div className="select-none mt-4">
        {accounts.map((data, index) => (
          <AccountItem
            key={data.id}
            data={data}
            selected={index === selectedIndex}
            onClick={() => {
              handleItemClick(index);
            }}
          ></AccountItem>
        ))}
        <TotalItem currency={totalCurrency} amount={total}></TotalItem>
      </div>
    </div>
  );
};

export default AccountListView;
