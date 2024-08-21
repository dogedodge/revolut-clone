import React, { useState } from 'react';
import {
  PlusIcon,
  CurrencyDollarIcon,
  ArrowsRightLeftIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid';

interface RoundButtonWithTitleProps {
  variant?: 'add-money' | 'exchange' | 'move' | 'more';
  onClick?: () => void;
  className?: string;
}

const iconStyle = 'text-gray-100 size-6';

const RoundButtonWithTitle: React.FC<RoundButtonWithTitleProps> = ({
  variant = 'add-money',
  onClick,
  className = '',
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) {
      onClick();
    }
  };

  let icon: React.ReactNode;
  let title: string;
  switch (variant) {
    case 'add-money':
      icon = <PlusIcon className={iconStyle} />;
      title = 'Add Money';
      break;
    case 'exchange':
      icon = <CurrencyDollarIcon className={iconStyle} />;
      title = 'Exchange';
      break;
    case 'move':
      icon = <ArrowsRightLeftIcon className={iconStyle} />;
      title = 'Move';
      break;
    case 'more':
      icon = <EllipsisHorizontalIcon className={iconStyle} />;
      title = 'More';
      break;
    default:
      icon = <PlusIcon className={iconStyle} />;
      title = 'Add Money';
  }

  return (
    <div
      onClick={handleClick}
      className={`h-16 w-16 flex flex-col items-center cursor-pointer transition-transform duration-200 ${
        isClicked ? 'scale-95' : ''
      } ${className}`}
    >
      <div className="h-10 w-10 bg-indigo-400 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-gray-600 text-xs mt-1">{title}</span>
    </div>
  );
};

export default RoundButtonWithTitle;
