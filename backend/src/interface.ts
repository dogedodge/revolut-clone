type Cookies = {
  user_id: string;
  sessionToken: string;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  sessionToken?: string;
};

type Account = {
  id: number;
  currency_code: string;
  balance: string;
  createdAt: string;
  updateAt: string;
};

type TransferRecord = {
  id: number;
  account_from: number;
  account_to: number;
  currency_code: string;
  amount: string;
  transfer_date: string;
};
