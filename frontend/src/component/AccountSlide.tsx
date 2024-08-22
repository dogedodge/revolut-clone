import React, { useState } from 'react';
import AccountBalanceDisplay from './AccountBalanceDisplay';
import RoundButtonWithTitle, {
  RoundButtonWithTitleVariant,
} from './RoundButtonWithTitle';
import DropupMenu from './DropupMenu';

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
  const [isDropupOpen, setIsDropupOpen] = useState(false);

  const handleRoundBtnClick = (variant: string) => {
    if (variant === 'more') {
      setIsDropupOpen((prev) => !prev);
    } else {
      onClick && onClick({ type: variant, accountId });
    }
  };

  const handleDropupMenuClick = (variant: string) => {
    setIsDropupOpen(false);
    onClick && onClick({ type: `dropup-${variant}`, accountId });
  };

  return (
    <div className={`relative w-screen ${className}`}>
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
              handleRoundBtnClick(variant);
            }}
          ></RoundButtonWithTitle>
        ))}
      </div>
      {isDropupOpen && (
        <DropupMenu
          className="absolute bottom-16 right-4"
          onClick={handleDropupMenuClick}
        ></DropupMenu>
      )}
    </div>
  );
};

export default AccountSlide;
