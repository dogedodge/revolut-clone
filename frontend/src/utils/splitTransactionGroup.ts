import { TransactionData } from '../interface';
import formatUTCtoLocal from './formatUTCtoLocal';

const splitTransactionGroup = (
  transactions: TransactionData[],
): TransactionData[][] => {
  if (transactions.length === 0) {
    return [];
  }
  const groups: TransactionData[][] = [];
  let lastDate = formatUTCtoLocal(transactions[0].createAt, 'date');
  let currentGroup: TransactionData[] = [];
  transactions.forEach((item) => {
    const currentDate = formatUTCtoLocal(item.createAt, 'date');
    if (currentDate === lastDate) {
      currentGroup.push(item);
    } else {
      groups.push(currentGroup);
      currentGroup = [item];
      lastDate = currentDate;
    }
  });
  groups.push(currentGroup);

  return groups;
};

export default splitTransactionGroup;
