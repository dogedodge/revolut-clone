export type TransactionCategory =
  | 'Restaurants'
  | 'Groceries'
  | 'Shopping'
  | 'Service'
  | 'Transport'
  | 'Entertainment'
  | 'Cash'
  | 'Travel'
  | 'Health'
  | 'General';
// Transfer

export type Currency = 'USD' | 'EUR' | 'GBP' | 'CNY' | 'HKD';

export interface TransactionData {
  id: number | string;
  recipient: string;
  category: TransactionCategory;
  currency: Currency;
  amount: number | string;
  createAt: string;
}

export interface TransactionDetail extends TransactionData {
  status: string;
  card: string;
  totalSpentAtBrand: number;
  numberOfTransAtBrand: number;
}

export interface AccountData {
  id: number | string;
  currency: Currency;
  balance: number | string;
}
