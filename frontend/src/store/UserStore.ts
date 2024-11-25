import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';
import sha256Encode from '../utils/sha256Encode';
import { AccountData, TransactionData } from '../interface';

class UserStore {
  public authenticated: boolean = false;
  public accounts: AccountData[] = [];
  public currentAccountIndex: number = 0;
  public recentTransactions: TransactionData[] = [];
  public userUpdateIndex: number = 0; // increase 1 everytime a update occur

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

  public setCurrentAccountIndex = action((index: number) => {
    this.currentAccountIndex = index;
  });

  public get currentAccount() {
    if (this.accounts.length > this.currentAccountIndex) {
      return this.accounts[this.currentAccountIndex];
    } else {
      return null;
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

  private updateRecentTransactions = action(
    (transactions: TransactionData[]) => {
      this.recentTransactions = transactions;
    },
  );

  public async fetchRecentTransactions() {
    try {
      const resp = await axios.get(
        `/api/accounts/${this.currentAccount!.id}/transactions?page=1&limit=3`,
      );
      console.log(resp);
      this.updateRecentTransactions(resp.data.transactions);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error message:', err);
      } else {
        console.error('Unexpected error:', err);
      }
      throw err;
    }
  }

  private updateAccount = action((account: AccountData) => {
    const index = this.accounts.findIndex((acc) => acc.id === account.id);
    if (index >= 0) {
      this.accounts[index] = account;
    }
    this.fetchRecentTransactions();
    this.userUpdateIndex++;
  });

  public async accountAddMoney(action: string, amount: number | string) {
    try {
      const resp = await axios.post(
        `/api/accounts/${this.currentAccount!.id}/credit`,
        { action, amount },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(resp);
      this.updateAccount(resp.data.account);
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
