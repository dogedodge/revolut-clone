type Cookies = {
  userId: string;
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
  currency: string;
  balance: string;
  createdAt: string;
  updateAt: string;
};

type TransferRecord = {
  id: number;
  accountFrom: number;
  accountTo: number;
  currency: string;
  amount: string;
  createAt: string;
};

interface TransactionRecord {
  id: number | string;
  userId: number | string;
  accountId: number | string;
  recipient: string;
  category: string;
  currency: string;
  amount: number | string;
  createAt: string;
}

interface TransactionDetail extends TransactionRecord {
  status: string;
  card: string;
  totalSpentAtBrand: number | string;
  numberOfTransAtBrand: number;
}
