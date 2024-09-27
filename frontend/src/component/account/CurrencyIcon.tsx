import { Currency } from '../../interface';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface CurrencyIconProps {
  currency: Currency;
  variant?: 'normal' | 'selected' | 'mini';
  // size?: 'normal' | 'small';
  // tick?: boolean;
  className?: string;
}

const sizeMap = {
  normal: 'size-10',
  selected: 'size-11',
  mini: 'size-6',
};

const CurrencyIcon = ({
  currency,
  variant = 'normal',
  // tick = false,
  // size = 'normal',
  className = '',
}: CurrencyIconProps) => {
  return (
    <div className={`relative ${sizeMap[variant]} ${className}`}>
      <img
        className="size-full object-contain"
        src={`${import.meta.env.BASE_URL}currencies/${currency}.png`}
      ></img>
      {variant === 'selected' && (
        <div className="bg-white size-5 absolute -right-1 -bottom-1 rounded-full">
          <CheckCircleIcon className="size-full text-black"></CheckCircleIcon>
        </div>
      )}
    </div>
  );
};

export default CurrencyIcon;
