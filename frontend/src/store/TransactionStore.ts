import { action, makeAutoObservable } from 'mobx';
import { TransactionData } from '../interface';
import axios from 'axios';
import UserStore from './UserStore';

class TransactionStore {
  public transactions: TransactionData[] = [];

  constructor(private userStore: UserStore) {
    makeAutoObservable(this);
  }

  private updateTransactions = action((transactions: TransactionData[]) => {
    this.transactions = transactions;
  });

  public async fetchTransactions() {
    try {
      const resp = await axios.get(
        `/api/accounts/${this.userStore.accounts[0].id}/transactions?page=1&limit=20`,
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

export default TransactionStore;
