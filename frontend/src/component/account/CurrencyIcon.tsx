import { Currency } from '../../interface';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface CurrencyIconProps {
  currency: Currency;
  size?: 'normal' | 'small';
  tick?: boolean;
  className?: string;
}

const CurrencyIcon = ({
  currency,
  tick = false,
  size = 'normal',
  className = '',
}: CurrencyIconProps) => {
  return (
    <div
      className={`relative ${size === 'small' ? 'size-6' : 'size-10'} ${className}`}
    >
      <img
        className="size-full object-contain"
        src={`${import.meta.env.BASE_URL}currencies/${currency}.png`}
      ></img>
      {tick && (
        <div className="bg-white size-5 absolute -right-1 -bottom-1 rounded-full">
          <CheckCircleIcon className="size-full"></CheckCircleIcon>
        </div>
      )}
    </div>
  );
};

export default CurrencyIcon;
