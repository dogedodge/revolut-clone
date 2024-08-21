import {
  ChartBarIcon,
  CreditCardIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
// import { useState } from 'react';
import useClickEffect from '../hooks/useClickEffect';

interface RoundButtonProps {
  variant?: 'user' | 'chart-bar' | 'credit-card';
  onClick?: () => void;
  className?: string;
}

const iconStyle = 'text-gray-100 size-6';

const RoundButton: React.FC<RoundButtonProps> = ({
  variant = 'chart-bar',
  onClick,
  className = '',
}) => {
  const { isClicked, handleClick } = useClickEffect(onClick);

  let icon: React.ReactNode;
  switch (variant) {
    case 'user':
      icon = <UserIcon className={iconStyle} />;
      break;
    case 'chart-bar':
      icon = <ChartBarIcon className={iconStyle} />;
      break;
    case 'credit-card':
      icon = <CreditCardIcon className={iconStyle} />;
      break;
    default:
      icon = <ChartBarIcon className={iconStyle} />;
  }

  return (
    <div
      onClick={handleClick}
      className={`h-8 w-8 bg-indigo-400 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 ${
        isClicked ? 'scale-95' : ''
      } ${className}`}
    >
      {icon}
    </div>
  );
};

export default RoundButton;
