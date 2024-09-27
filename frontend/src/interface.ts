export type BrandCategory =
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

export type Currency = 'USD' | 'EUR' | 'GBP' | 'CNY' | 'HKD';

export interface TransactionData {
  id: number | string;
  date: string;
  brand: string;
  category: BrandCategory;
  currency: Currency;
  amount: number | string;
}

export interface TransactionDetail extends TransactionData {
  status: string;
  card: string;
  totalSpentAtBrand: number;
  numberOfTransAtBrand: number;
}
