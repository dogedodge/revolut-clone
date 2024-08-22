import React from 'react';
import {
  Bars3BottomRightIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  PaintBrushIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import useClickEffect from '../hooks/useClickEffect';

export type DropupItemVariant =
  | 'details'
  | 'statement'
  | 'converter'
  | 'theme'
  | 'add-new-account';

interface DropupItemProps {
  variant: DropupItemVariant;
  onClick?: () => void;
  className?: string;
}

const iconStyle = 'text-gray-100 size-6';

const DropupItem: React.FC<DropupItemProps> = ({
  variant = 'details',
  onClick,
  className = '',
}) => {
  const { isClicked, handleClick } = useClickEffect(onClick);
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
  const bgColor = isClicked ? 'bg-indigo-700' : 'bg-indigo-900';
  return (
    <li
      onClick={handleClick}
      className={`w-60 h-12 flex justify-between items-center ${bgColor} first:rounded-t-xl last:rounded-b-xl ${className}`}
    >
      <span className="ml-4 text-gray-100 text-lg select-none">{title}</span>
      <span className="mr-4">{icon}</span>
    </li>
  );
};

export default DropupItem;
