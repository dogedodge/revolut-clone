import { TransactionData } from '../../interface';
import formatUTCtoLocal from '../../utils/formatUTCtoLocal';
import TransactionList, { TransactionListEvent } from './TransactionList';

interface TransactionGroupByDateProps {
  transactions: TransactionData[];
  onClick: (evt: TransactionListEvent) => void;
}

const TransactionGroupByDate = ({
  transactions,
  onClick,
}: TransactionGroupByDateProps) => {
  const groupDate = formatUTCtoLocal(transactions[0].transactionDate, 'date');

  return (
    <div>
      <div className="text-xl">{groupDate}</div>
      <TransactionList
        className="mt-2"
        variant="group-section"
        transactions={transactions}
        onClick={onClick}
      ></TransactionList>
    </div>
  );
};

export default TransactionGroupByDate;
