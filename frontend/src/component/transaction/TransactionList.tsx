import { TransactionData } from '../../interface';
import SeeAllItem from './SeeAllItem';
import TransactionItem, { TimeDisplayType } from './TransactionItem';

export type TransactionListEvent = {
  type: 'item' | 'seeAll';
  transactionId?: number | string;
};

interface TransactionListProps {
  transactions: TransactionData[];
  className?: string;
  onClick: (evt: TransactionListEvent) => void;
  variant?: 'primary' | 'group-section';
}

const TransactionList = ({
  transactions,
  className = '',
  onClick,
  variant = 'primary',
}: TransactionListProps) => {
  let timeDisplayType: TimeDisplayType;
  switch (variant) {
    case 'group-section':
      timeDisplayType = 'time';
      break;
    default:
      timeDisplayType = 'datetime';
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {transactions.map((item) => (
        <TransactionItem
          key={item.transactionId}
          data={item}
          onClick={(transactionId) => {
            onClick({ type: 'item', transactionId });
          }}
          timeDisplayType={timeDisplayType}
        ></TransactionItem>
      ))}
      {variant === 'primary' && (
        <SeeAllItem
          onClick={() => {
            onClick({ type: 'seeAll' });
          }}
        ></SeeAllItem>
      )}
    </div>
  );
};

export default TransactionList;
