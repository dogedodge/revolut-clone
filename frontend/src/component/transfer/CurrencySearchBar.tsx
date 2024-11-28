import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export interface CurrencySearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCancel: () => void;
  className?: string;
}

const CurrencySearchBar = ({
  value,
  onChange,
  onClickCancel,
  className = '',
}: CurrencySearchBarProps) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <div className="flex flex-row rounded-full h-10 items-center bg-gray-300 flex-1">
        <MagnifyingGlassIcon className="text-gray-700 size-5 ml-2"></MagnifyingGlassIcon>
        <input
          className="ml-2 flex-1 bg-gray-300 focus:outline-none mr-4 text-lg"
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
        ></input>
      </div>

      <div
        className="text-blue-600 text-xl font-light ml-2 select-none"
        onClick={onClickCancel}
      >
        Cancel
      </div>
    </div>
  );
};

export default CurrencySearchBar;
