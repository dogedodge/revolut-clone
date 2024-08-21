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

type AccountSlideEvent = {
  type: string;
  accountId: number | string;
};

interface AccountSlideProps {
  accountId: number | string;
  currency: string;
  balance: string | number;
  onClick?: (event: AccountSlideEvent) => void;
  className?: string;
}

const AccountSlide: React.FC<AccountSlideProps> = ({
  accountId,
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
          onClick && onClick({ type: 'accounts', accountId });
        }}
      ></AccountBalanceDisplay>
      <div className="flex flex-row justify-between mx-6">
        {actionBtnVariants.map((variant) => (
          <RoundButtonWithTitle
            key={variant}
            variant={variant}
            onClick={() => {
              onClick && onClick({ type: variant, accountId });
            }}
          ></RoundButtonWithTitle>
        ))}
      </div>
    </div>
  );
};

export default AccountSlide;
