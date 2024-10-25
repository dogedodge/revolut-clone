import { TransactionData } from '../../interface';
import { TransactionListEvent } from './TransactionList';
import TransactionGroupByDate from './TransactionGroupByDate';

interface TransactionGroupListProps {
  // transactions: TransactionData[];
  transactionGroups: TransactionData[][];
  onClick: (evt: TransactionListEvent) => void;
}

const TransactionGroupList = ({
  transactionGroups,
  onClick,
}: TransactionGroupListProps) => {
  // const transactionGroups: TransactionData[][] = useMemo(() => {
  //   const groups: TransactionData[][] = [];
  //   let lastDate = formatUTCtoLocal(transactions[0].createAt, 'date');
  //   let currentGroup: TransactionData[] = [];
  //   transactions.forEach((item) => {
  //     const currentDate = formatUTCtoLocal(item.createAt, 'date');
  //     if (currentDate === lastDate) {
  //       currentGroup.push(item);
  //     } else {
  //       groups.push(currentGroup);
  //       currentGroup = [item];
  //       lastDate = currentDate;
  //     }
  //   });
  //   groups.push(currentGroup);

  //   return groups;
  // }, [transactions.length, transactions[0].id]);

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
