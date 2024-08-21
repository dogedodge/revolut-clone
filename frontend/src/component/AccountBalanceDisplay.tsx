import useClickEffect from '../hooks/useClickEffect';

interface AccountBalanceDisplayProps {
  currency: string;
  balance: string | number;
  onClick?: () => void;
  className?: string;
}

const AccountBalanceDisplay: React.FC<AccountBalanceDisplayProps> = ({
  currency,
  balance,
  onClick,
  className,
}) => {
  const { isClicked, handleClick } = useClickEffect(onClick);

  const { integer, fractional } = decomponseDecimal(balance);
  const currencySymbol = '£'; // todo
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div className="text-white font-extralight text-lg mb-1">
        Main · {currency}
      </div>
      <div className="text-white font-semibold mb-4">
        <span className="text-5xl">{`${currencySymbol}${integer}`}</span>
        <span className="text-lg">{fractional}</span>
      </div>
      <div
        onClick={handleClick}
        className={`select-none bg-indigo-400 text-white text-base px-4 py-2 rounded-full ${
          isClicked ? 'scale-95' : ''
        }`}
      >
        Accounts
      </div>
    </div>
  );
};

export default AccountBalanceDisplay;

function decomponseDecimal(decimal: string | number) {
  const nString = typeof decimal === 'number' ? `${decimal}` : decimal;
  const parts = nString.split('.');
  return {
    integer: parts[0],
    fractional: parts.length === 2 ? `.${parts[1]}` : '',
  };
}
