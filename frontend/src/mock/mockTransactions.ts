import { TransactionData } from '../interface';

const mockTransactions: TransactionData[] = [
  {
    transactionId: 101,
    transactionDate: '2024-09-25 07:37:50', // UTC time
    brand: 'Mcdonalds',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 102,
    transactionDate: '2024-09-25 07:38:50',
    brand: 'KFC',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 103,
    transactionDate: '2024-09-25 08:37:50',
    brand: 'Starbucks',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 104,
    transactionDate: '2024-09-25 09:37:50',
    brand: 'Tesco',
    category: 'Groceries',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 105,
    transactionDate: '2024-09-25 10:37:50',
    brand: 'Sainsburys',
    category: 'Groceries',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 106,
    transactionDate: '2024-09-25 13:37:50',
    brand: 'Mcdonalds',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 107,
    transactionDate: '2024-09-25 15:37:50',
    brand: 'KFC',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -200,
  },
  {
    transactionId: 108,
    transactionDate: '2024-09-25 17:37:50',
    brand: 'Starbucks',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -200,
  },
];

export default mockTransactions;
