import AccountBalanceDisplay from './AccountBalanceDisplay';
import RoundButtonWithTitle, {
  RoundButtonWithTitleVariant,
} from './RoundButtonWithTitle';

const actionBtnVariants: RoundButtonWithTitleVariant[] = [
  'add-money',
  'exchange',
  'move',
  'more',
];

interface AccountSlideProps {
  currency: string;
  balance: string | number;
  onClick?: (eventType: string) => void;
  className?: string;
}

const AccountSlide: React.FC<AccountSlideProps> = ({
  currency,
  balance,
  onClick,
  className = '',
}) => {
  return (
    <div className={`w-screen ${className}`}>
      <AccountBalanceDisplay
        className="mb-28 mt-28"
        currency={currency}
        balance={balance}
        onClick={() => {
          onClick && onClick('accounts');
        }}
      ></AccountBalanceDisplay>
      <div className="flex flex-row justify-between mx-6">
        {actionBtnVariants.map((variant) => (
          <RoundButtonWithTitle
            key={variant}
            variant={variant}
            onClick={() => {
              onClick && onClick(variant);
            }}
          ></RoundButtonWithTitle>
        ))}
      </div>
    </div>
  );
};

export default AccountSlide;
