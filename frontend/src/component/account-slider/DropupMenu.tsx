import { forwardRef, Ref } from 'react';
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

const DropupMenu = forwardRef<HTMLUListElement, DropupMenuProps>(
  ({ onClick, className = '' }, ref: Ref<HTMLUListElement>) => {
    return (
      <ul ref={ref} className={`divide-y ${className}`}>
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
  },
);

export default DropupMenu;
