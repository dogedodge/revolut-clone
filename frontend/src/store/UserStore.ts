import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';
import sha256Encode from '../utils/sha256Encode';
import { AccountData, TransactionData } from '../interface';

class UserStore {
  public authenticated: boolean = false;
  public accounts: AccountData[] = [];
  public transactions: TransactionData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  private updateAuthenticated = action((authenticated: boolean) => {
    this.authenticated = authenticated;
  });

  public async login(email: string, password: string) {
    const hashPwd = sha256Encode(password);
    try {
      const resp = await axios.post(
        '/api/login',
        { email, password: hashPwd },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const { code } = resp.data as { code: number };
      console.log(resp.data);
      if (code === 0) {
        // this.authenticated = true;
        this.updateAuthenticated(true);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.status === 401) {
          console.log(err.response?.data.message);
        } else {
          console.error('Error message:', err);
        }
      } else {
        console.error('Unexpected error:', err);
      }
      throw err;
    }
  }

  private updateAccounts = action((accounts: AccountData[]) => {
    this.accounts = accounts;
  });

  public async fetchAccounts() {
    try {
      const resp = await axios.get('/api/accounts', { withCredentials: true });
      console.log(resp.data);
      // this.accounts = resp.data.accounts;
      this.updateAccounts(resp.data.accounts);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error message:', err);
      } else {
        console.error('Unexpected error:', err);
      }
      throw err;
    }
  }

  private updateTransactions = action((transactions: TransactionData[]) => {
    this.transactions = transactions;
  });

  public async fetchTransactions() {
    try {
      const resp = await axios.get(
        `/api/accounts/${this.accounts[0].id}/transactions?page=1&limit=20`,
      );
      console.log(resp);
      this.updateTransactions(resp.data.transactions);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error message:', err);
      } else {
        console.error('Unexpected error:', err);
      }
      throw err;
    }
  }
}

export default UserStore;
