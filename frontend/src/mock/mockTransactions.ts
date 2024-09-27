import { TransactionData } from '../interface';

const mockTransactions: TransactionData[] = [
  {
    id: 101,
    date: '2024-09-25 07:37:50', // UTC time
    brand: 'Mcdonalds',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -20,
  },
  {
    id: 102,
    date: '2024-09-25 07:38:50',
    brand: 'KFC',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -21,
  },
  {
    id: 103,
    date: '2024-09-25 08:37:50',
    brand: 'Starbucks',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -22,
  },
  {
    id: 104,
    date: '2024-09-25 09:37:50',
    brand: 'Tesco',
    category: 'Groceries',
    currency: 'GBP',
    amount: -30,
  },
  {
    id: 105,
    date: '2024-09-25 10:37:50',
    brand: 'Sainsburys',
    category: 'Groceries',
    currency: 'GBP',
    amount: -35,
  },
  {
    id: 106,
    date: '2024-09-25 13:37:50',
    brand: 'Mcdonalds',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -60,
  },
  {
    id: 107,
    date: '2024-09-25 15:37:50',
    brand: 'KFC',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -70,
  },
  {
    id: 108,
    date: '2024-09-25 17:37:50',
    brand: 'Starbucks',
    category: 'Restaurants',
    currency: 'GBP',
    amount: -80,
  },
];

export default mockTransactions;
