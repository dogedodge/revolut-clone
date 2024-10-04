import { TransactionData } from '../interface';

const mockTransactions: TransactionData[] = [
  {
    id: 101,
    createAt: '2024-09-25 07:37:50', // UTC time
    recipient: 'Mcdonalds',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -20,
  },
  {
    id: 102,
    createAt: '2024-09-25 07:38:50',
    recipient: 'KFC',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -21,
  },
  {
    id: 103,
    createAt: '2024-09-25 08:37:50',
    recipient: 'Starbucks',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -22,
  },
  {
    id: 104,
    createAt: '2024-09-25 09:37:50',
    recipient: 'Tesco',
    category: 'Groceries',
    currency: 'GBP',
    amount: -30,
  },
  {
    id: 105,
    createAt: '2024-09-25 10:37:50',
    recipient: 'Sainsburys',
    category: 'Groceries',
    currency: 'GBP',
    amount: -35,
  },
  {
    id: 106,
    createAt: '2024-09-25 13:37:50',
    recipient: 'Mcdonalds',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -60,
  },
  {
    id: 107,
    createAt: '2024-09-25 15:37:50',
    recipient: 'KFC',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -70,
  },
  {
    id: 108,
    createAt: '2024-09-25 17:37:50',
    recipient: 'Starbucks',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -80,
  },
];

export default mockTransactions;
