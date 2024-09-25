import React, { useRef, useState } from 'react';
import AccountBalanceView from './AccountBalanceView';
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

export type AccountSlideEvent = {
  type: string;
  accountId: number | string;
};

export interface AccountSlideProps {
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
  const menuRef = useRef<HTMLUListElement>(null);
  const moreBtn = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      moreBtn.current &&
      !menuRef.current.contains(event.target as Node) &&
      !moreBtn.current.contains(event.target as Node)
    ) {
      setIsDropupOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={`relative w-full ${className}`}>
      <AccountBalanceView
        className="mb-28 mt-28"
        currency={currency}
        balance={balance}
        onClick={() => {
          onClick && onClick({ type: 'accounts', accountId });
        }}
      ></AccountBalanceView>
      <div className="flex flex-row justify-between mx-6">
        {actionBtnVariants.slice(0, 3).map((variant) => (
          <RoundButtonWithTitle
            key={variant}
            variant={variant}
            onClick={() => {
              handleRoundBtnClick(variant);
            }}
          ></RoundButtonWithTitle>
        ))}
        <div ref={moreBtn}>
          <RoundButtonWithTitle
            key={'more'}
            variant={'more'}
            onClick={() => {
              handleRoundBtnClick('more');
            }}
          ></RoundButtonWithTitle>
        </div>
      </div>
      {isDropupOpen && (
        <DropupMenu
          ref={menuRef}
          className="absolute bottom-16 right-4"
          onClick={handleDropupMenuClick}
        ></DropupMenu>
      )}
    </div>
  );
};

export default AccountSlide;
