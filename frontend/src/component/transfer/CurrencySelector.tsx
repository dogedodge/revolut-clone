import { useState } from 'react';
import CurrencySearchBar from './CurrencySearchBar';

const CurrencySelector = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClickCancel = () => {
    // dismiss
  };

  return (
    <div className="px-4">
      <div className="text-2xl font-semibold">Choose currency</div>
      <CurrencySearchBar
        className="mt-4"
        value={searchValue}
        onChange={onSearchValueChange}
        onClickCancel={onClickCancel}
      ></CurrencySearchBar>
    </div>
  );
};

export default CurrencySelector;
