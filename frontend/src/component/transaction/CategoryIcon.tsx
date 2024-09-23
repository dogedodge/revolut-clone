import React from 'react';
import {
  CircleStackIcon,
  CakeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  TruckIcon,
  TicketIcon,
  WalletIcon,
  GlobeAsiaAustraliaIcon,
  HeartIcon,
} from '@heroicons/react/24/solid';
import { BrandCategory } from '../../interface';

const categoryStyle = 'text-gray-100 size-6';

interface CategoryIconProps {
  category: BrandCategory;
}
const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  let icon: React.ReactNode;
  let iconBgColor: string;
  switch (category) {
    case 'General':
      icon = <CircleStackIcon className={categoryStyle} />;
      iconBgColor = 'bg-green-600';
      break;
    case 'Restaurants':
      icon = <CakeIcon className={categoryStyle} />;
      iconBgColor = 'bg-orange-500';
      break;
    case 'Groceries':
      icon = <ShoppingCartIcon className={categoryStyle} />;
      iconBgColor = 'bg-green-600';
      break;
    case 'Shopping':
      icon = <ShoppingBagIcon className={categoryStyle} />;
      iconBgColor = 'bg-pink-500';
      break;
    case 'Service':
      icon = <BriefcaseIcon className={categoryStyle} />;
      iconBgColor = 'bg-blue-600';
      break;
    case 'Transport':
      icon = <TruckIcon className={categoryStyle} />;
      iconBgColor = 'bg-violet-500';
      break;
    case 'Entertainment':
      icon = <TicketIcon className={categoryStyle} />;
      iconBgColor = 'bg-orange-500';
      break;
    case 'Cash':
      icon = <WalletIcon className={categoryStyle} />;
      iconBgColor = 'bg-cyan-500';
      break;
    case 'Travel':
      icon = <GlobeAsiaAustraliaIcon className={categoryStyle} />;
      iconBgColor = 'bg-sky-500';
      break;
    case 'Health':
      icon = <HeartIcon className={categoryStyle} />;
      iconBgColor = 'bg-sky-300';
      break;
    default:
      icon = <CircleStackIcon className={categoryStyle} />;
      iconBgColor = 'bg-green-600';
  }
  return (
    <div
      className={`h-10 w-10 ${iconBgColor} rounded-full flex items-center justify-center`}
    >
      {icon}
    </div>
  );
};

export default CategoryIcon;
