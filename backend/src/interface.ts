type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
};

type TransferRecord = {
  id: number;
  account_from: number;
  account_to: number;
  amount: string;
  transfer_date: string;
};
