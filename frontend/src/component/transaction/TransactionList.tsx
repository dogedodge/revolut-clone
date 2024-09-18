import SeeAllItem from './SeeAllItem';
import TransactionItem, { TransactionData } from './TransactionItem';

interface TransactionListProps {
  data: TransactionData[];
  onTansactionClick: (transactionId: number | string) => void;
  onSeeAllClick: () => void;
}

const TransactionList = ({
  data,
  onTansactionClick,
  onSeeAllClick,
}: TransactionListProps) => {
  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <TransactionItem
          key={item.transactionId}
          {...item}
          onClick={onTansactionClick}
        ></TransactionItem>
      ))}
      <SeeAllItem onClick={onSeeAllClick}></SeeAllItem>
    </div>
  );
};

export default TransactionList;
