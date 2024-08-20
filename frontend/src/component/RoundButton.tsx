import UserIcon from '@heroicons/react/24/solid/UserIcon';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CreditCardIcon from '@heroicons/react/24/solid/CreditCardIcon';

export interface ButtonProps {
  variant?: 'user' | 'chart_bar' | 'credit_card';
}

export const RoundButton = ({ variant = 'chart_bar' }: ButtonProps) => {
  let icon: React.ReactNode;
  switch (variant) {
    case 'user':
      icon = <UserIcon className="text-gray-100 size-6" />;
      break;
    case 'chart_bar':
      icon = <ChartBarIcon className="text-gray-100 size-6" />;
      break;
    case 'credit_card':
      icon = <CreditCardIcon className="text-gray-100 size-6" />;
      break;
    default:
      icon = <ChartBarIcon className="text-gray-100 size-6" />;
  }

  return (
    <div className="h-8 w-8 bg-indigo-400 rounded-full flex items-center justify-center">
      {icon}
    </div>
  );
};
