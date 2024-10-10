import { action, makeAutoObservable } from 'mobx';
import { TransactionData, TransactionDetail } from '../interface';
import axios from 'axios';
import UserStore from './UserStore';

class TransactionStore {
  public transactions: TransactionData[] = [];
  public transactionDetail: TransactionDetail | undefined;

  constructor(private userStore: UserStore) {
    makeAutoObservable(this);
  }

  private updateTransactions = action((transactions: TransactionData[]) => {
    this.transactions = transactions;
  });

  public async fetchTransactions() {
    try {
      const resp = await axios.get(
        `/api/accounts/${this.userStore.currentAccount!.id}/transactions?page=1&limit=20`,
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

  private updateTransactionDetail = action((detail: TransactionDetail) => {
    this.transactionDetail = detail;
  });

  public async fetchDetail(transactionId: string) {
    try {
      const resp = await axios.get(`/api/transactions/${transactionId}`);
      console.log('fetchDetail', resp);
      const { code, transaction } = resp.data as {
        code: number;
        transaction: TransactionDetail;
      };
      if (code === 0) {
        this.updateTransactionDetail(transaction);
      }
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
