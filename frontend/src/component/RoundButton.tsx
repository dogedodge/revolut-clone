import UserIcon from '@heroicons/react/24/solid/UserIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CreditCardIcon from '@heroicons/react/24/solid/CreditCardIcon';
import { useState } from 'react';

export interface ButtonProps {
  variant?: 'user' | 'chart-bar' | 'credit-card';
  onClick?: () => void;
  className?: string;
}

const iconStyle = 'text-gray-100 size-6';

export const RoundButton = ({
  variant = 'chart-bar',
  onClick,
  className = '',
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) {
      onClick();
    }
  };

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
