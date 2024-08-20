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
      icon = <PlusIcon className="text-gray-100 size-6" />;
      title = 'Add Money';
      break;
    case 'exchange':
      icon = <CurrencyDollarIcon className="text-gray-100 size-6" />;
      title = 'Exchange';
      break;
    case 'move':
      icon = <ArrowsRightLeftIcon className="text-gray-100 size-6" />;
      title = 'Move';
      break;
    case 'more':
      icon = <EllipsisHorizontalIcon className="text-gray-100 size-6" />;
      title = 'More';
      break;
    default:
      icon = <PlusIcon className="text-gray-100 size-6" />;
      title = 'Add Money';
  }

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center cursor-pointer transition-transform duration-200 ${
        isClicked ? 'scale-95' : ''
      } ${className}`}
    >
      <div className="h-8 w-8 bg-indigo-400 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-gray-600 text-xs mt-1">{title}</span>
    </div>
  );
};

export default RoundButtonWithTitle;
