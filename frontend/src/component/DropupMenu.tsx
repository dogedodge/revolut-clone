import React from 'react';
import DropupItem, { DropupItemVariant } from './DropupItem';

interface DropupMenuProps {
  onClick?: (eventType: string) => void;
  className?: string;
}

const itemVariants: DropupItemVariant[] = [
  'details',
  'statement',
  'converter',
  'theme',
  'add-new-account',
];

const DropupMenu: React.FC<DropupMenuProps> = ({ onClick, className = '' }) => {
  return (
    <ul className={`divide-y ${className}`}>
      {itemVariants.map((variant) => (
        <DropupItem
          key={variant}
          variant={variant}
          onClick={() => {
            onClick && onClick(variant);
          }}
        ></DropupItem>
      ))}
    </ul>
  );
};

export default DropupMenu;
