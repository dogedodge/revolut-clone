import TransactionItem, { TransactionItemProps } from './TransactionItem';

interface TransactionListProps {
  data: TransactionItemProps[];
}

const TransactionList = ({ data }: TransactionListProps) => {
  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <TransactionItem key={item.transactionId} {...item}></TransactionItem>
      ))}
    </div>
  );
};

export default TransactionList;
