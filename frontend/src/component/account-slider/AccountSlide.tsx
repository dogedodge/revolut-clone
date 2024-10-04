import { useCallback, useEffect, useRef, useState } from 'react';
import AccountBalanceView from './AccountBalanceView';
import RoundButtonWithTitle, {
  RoundButtonWithTitleVariant,
} from './RoundButtonWithTitle';
import DropupMenu from './DropupMenu';
import { AccountData } from '../../interface';

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
  // accountId: number | string;
  // currency: string;
  // balance: string | number;
  account: AccountData;
  onClick?: (event: AccountSlideEvent) => void;
  className?: string;
}

const AccountSlide = ({
  account,
  onClick,
  className = '',
}: AccountSlideProps) => {
  const [isDropupOpen, setIsDropupOpen] = useState(false);
  const [isDropupScaled, setIsDropupScaled] = useState(true);
  const menuRef = useRef<HTMLUListElement>(null);
  const moreBtn = useRef<HTMLDivElement>(null);

  const dismissDropup = useCallback(() => {
    setIsDropupScaled(true);
    window.setTimeout(() => {
      setIsDropupOpen(false);
    }, 300);
  }, []);

  const handleRoundBtnClick = (variant: string) => {
    if (variant === 'more') {
      // setIsDropupOpen((prev) => !prev);
      if (isDropupOpen) {
        dismissDropup();
      } else {
        setIsDropupOpen(true);
      }
    } else {
      onClick && onClick({ type: variant, accountId: account.id });
    }
  };

  const handleDropupMenuClick = (variant: string) => {
    // setIsDropupOpen(false);
    dismissDropup();
    onClick && onClick({ type: `dropup-${variant}`, accountId: account.id });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      moreBtn.current &&
      !menuRef.current.contains(event.target as Node) &&
      !moreBtn.current.contains(event.target as Node)
    ) {
      // setIsDropupOpen(false);
      dismissDropup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    let timeout: number;
    if (isDropupOpen) {
      timeout = window.setTimeout(() => {
        setIsDropupScaled(false);
      }, 50);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isDropupOpen]);

  return (
    <div className={`relative w-full ${className}`}>
      <AccountBalanceView
        className="mb-28 mt-28"
        currency={account.currency}
        balance={account.balance}
        onClick={() => {
          onClick && onClick({ type: 'accounts', accountId: account.id });
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
          className={`absolute bottom-16 right-4 transition-transform duration-300 origin-bottom-right ${isDropupScaled ? 'scale-0' : ''}`}
          onClick={handleDropupMenuClick}
        ></DropupMenu>
      )}
    </div>
  );
};

export default AccountSlide;
