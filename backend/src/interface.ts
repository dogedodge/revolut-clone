type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  session_token?: string;
};

type Account = {
  id: number;
  currency_code: string;
  balance: string;
  created_at: string;
  updated_at: string;
};

type TransferRecord = {
  id: number;
  account_from: number;
  account_to: number;
  currency_code: string;
  amount: string;
  transfer_date: string;
};
