import { TransactionData } from '../../interface';
import formatTransactionAmount from '../../utils/formatTransactionAmount';
import formatUTCtoLocal from '../../utils/formatUTCtoLocal';
import TransactionList, { TransactionListEvent } from './TransactionList';

interface TransactionGroupByDateProps {
  transactions: TransactionData[];
  onClick: (evt: TransactionListEvent) => void;
  className?: string;
}

const TransactionGroupByDate = ({
  transactions,
  onClick,
  className = '',
}: TransactionGroupByDateProps) => {
  const { date: transactionDate, currency } = transactions[0];
  const groupDate = formatUTCtoLocal(transactionDate, 'date');
  const totalSpent = transactions
    .map((data) => Number(data.amount))
    .reduce((total, current) => {
      return total + current;
    }, 0);

  return (
    <div>
      <div className={`flex flex-row justify-between items-end ${className}`}>
        <div className="text-xl">{groupDate}</div>
        <div className="text-gray-600">
          {formatTransactionAmount(currency, totalSpent)}
        </div>
      </div>
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
