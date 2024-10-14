import { action, makeAutoObservable } from 'mobx';
import { TransactionData, TransactionDetail } from '../interface';
import axios from 'axios';
import UserStore from './UserStore';

const LIMIT_PER_PAGE: number = 20;

class TransactionStore {
  public transactions: TransactionData[] = [];
  public isLoadingList: boolean = false;
  public currentPage: number = 0;
  public totalCount: number = 0;

  public transactionDetail: TransactionDetail | undefined;

  constructor(private userStore: UserStore) {
    makeAutoObservable(this);
  }

  private startLoadList = action(() => {
    this.isLoadingList = true;
  });

  private appendTransactions = action(
    (transactions: TransactionData[], totalCount: number) => {
      this.transactions = this.transactions.concat(transactions);
      this.totalCount = totalCount;
      this.isLoadingList = false;
      this.currentPage++;
    },
  );

  public async fetchTransactions() {
    try {
      this.startLoadList();
      const resp = await axios.get(
        `/api/accounts/${this.userStore.currentAccount!.id}/transactions?page=${this.currentPage + 1}&limit=${LIMIT_PER_PAGE}`,
      );
      console.log(resp.data);
      const { transactions, totalCount } = resp.data as {
        transactions: TransactionData[];
        totalCount: number;
      };
      this.appendTransactions(transactions, totalCount);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error message:', err);
      } else {
        console.error('Unexpected error:', err);
      }
      throw err;
    }
  }

  public get hasMore(): boolean {
    return this.currentPage * LIMIT_PER_PAGE < this.totalCount;
  }

  public resetTransactionList = action(() => {
    this.transactions = [];
    this.totalCount = 0;
    this.isLoadingList = false;
    this.currentPage = 0;
  });

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
