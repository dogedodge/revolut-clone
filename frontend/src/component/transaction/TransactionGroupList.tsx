import { useMemo } from 'react';
import { TransactionData } from '../../interface';
import { TransactionListEvent } from './TransactionList';
import formatUTCtoLocal from '../../utils/formatUTCtoLocal';
import TransactionGroupByDate from './TransactionGroupByDate';

interface TransactionGroupListProps {
  transactions: TransactionData[];
  onClick: (evt: TransactionListEvent) => void;
}

const TransactionGroupList = ({
  transactions,
  onClick,
}: TransactionGroupListProps) => {
  const transactionGroups: TransactionData[][] = useMemo(() => {
    const groups: TransactionData[][] = [];
    let lastDate = formatUTCtoLocal(transactions[0].date, 'date');
    let currentGroup: TransactionData[] = [];
    transactions.forEach((item) => {
      if (formatUTCtoLocal(item.date, 'date') === lastDate) {
        currentGroup.push(item);
      } else {
        groups.push(currentGroup);
        currentGroup = [item];
      }
    });
    groups.push(currentGroup);

    return groups;
  }, [transactions.length, transactions[0].id]);

  return (
    <div>
      {transactionGroups.map((group) => (
        <TransactionGroupByDate
          key={group[0].id}
          transactions={group}
          onClick={onClick}
          className="mt-6"
        ></TransactionGroupByDate>
      ))}
    </div>
  );
};

export default TransactionGroupList;
