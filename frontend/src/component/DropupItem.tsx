import React from 'react';
import {
  Bars3BottomRightIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  PaintBrushIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';

interface DropupItemProps {
  variant: 'details' | 'statement' | 'converter' | 'theme' | 'add-new-account';
  onClick?: () => void;
  className?: string;
}

const iconStyle = 'text-gray-100 size-6';

const DropupItem: React.FC<DropupItemProps> = ({
  variant = 'details',
  className = '',
}) => {
  let title: string;
  let icon: React.ReactNode;
  switch (variant) {
    case 'details':
      title = 'Details';
      icon = <Bars3BottomRightIcon className={iconStyle} />;
      break;
    case 'statement':
      title = 'Statement';
      icon = <DocumentTextIcon className={iconStyle} />;
      break;
    case 'converter':
      title = 'Converter';
      icon = <ArrowPathIcon className={iconStyle} />;
      break;
    case 'theme':
      title = 'Theme';
      icon = <PaintBrushIcon className={iconStyle} />;
      break;
    case 'add-new-account':
      title = 'Add new account';
      icon = <UserPlusIcon className={iconStyle} />;
      break;
    default:
      title = 'Details';
      icon = <Bars3BottomRightIcon className={iconStyle} />;
  }
  return (
    <li
      className={`w-60 h-12 flex justify-between items-center bg-indigo-900 rounded-t-xl ${className}`}
    >
      <span className="ml-4 text-gray-100 text-lg select-none">{title}</span>
      <span className="mr-4">{icon}</span>
    </li>
  );
};

export default DropupItem;
