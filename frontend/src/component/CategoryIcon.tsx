import React from 'react';
import { CircleStackIcon, CakeIcon } from '@heroicons/react/24/solid';

export type BrandCategory =
  | 'Restaurants'
  | 'Groceries'
  | 'Shopping'
  | 'Service'
  | 'Transport'
  | 'Entertainment'
  | 'Cash'
  | 'Travel'
  | 'Health'
  | 'General';

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
