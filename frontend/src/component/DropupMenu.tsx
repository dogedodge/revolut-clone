import React from 'react';
import DropupItem, { DropupItemVariant } from './DropupItem';

interface DropupMenuProps {
  onClick?: () => void;
  className?: string;
}

const itemVariants: DropupItemVariant[] = [
  'details',
  'statement',
  'converter',
  'theme',
  'add-new-account',
];

const DropupMenu: React.FC<DropupMenuProps> = ({ className = '' }) => {
  return (
    <ul className={`divide-y ${className}`}>
      {itemVariants.map((variant) => (
        <DropupItem key={variant} variant={variant}></DropupItem>
      ))}
    </ul>
  );
};

export default DropupMenu;
