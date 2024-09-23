import { TransactionData } from '../../interface';
import SeeAllItem from './SeeAllItem';
import TransactionItem from './TransactionItem';

export type TransactionListEvent = {
  type: 'item' | 'seeAll';
  transactionId?: number | string;
};

interface TransactionListProps {
  data: TransactionData[];
  className?: string;
  onClick: (evt: TransactionListEvent) => void;
}

const TransactionList = ({
  data,
  className = '',
  onClick,
}: TransactionListProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {data.map((item) => (
        <TransactionItem
          key={item.transactionId}
          {...item}
          onClick={(transactionId) => {
            onClick({ type: 'item', transactionId });
          }}
        ></TransactionItem>
      ))}
      <SeeAllItem
        onClick={() => {
          onClick({ type: 'seeAll' });
        }}
      ></SeeAllItem>
    </div>
  );
};

export default TransactionList;
