export interface CurrencySearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CurrencySearchBar = ({ value, onChange }: CurrencySearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default CurrencySearchBar;
