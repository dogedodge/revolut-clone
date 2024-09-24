import TransactionDetailView, {
  TransactionDetailEvent,
} from '../component/transaction-detail/TransactionDetailView';
import { TransactionDetail } from '../interface';

const transactionDetail: TransactionDetail = {
  transactionId: 101,
  transactionDate: 'Today, 4:43PM',
  brand: 'Mcdonalds',
  category: 'Restaurants',
  currency: 'GBP',
  amount: -150,
  status: 'Completed',
  card: 'Visa ..6789',
  totalSpentAtBrand: 2000,
  numberOfTransAtBrand: 16,
};

const TransactionDetailModal = () => {
  const handleClick = (evt: TransactionDetailEvent) => {
    if (evt.type === 'dismiss') {
      window.location.hash = '';
    }
  };

  return (
    <TransactionDetailView
      data={transactionDetail}
      className="absolute mt-8 z-20"
      onClick={handleClick}
    ></TransactionDetailView>
  );
};

export default TransactionDetailModal;
