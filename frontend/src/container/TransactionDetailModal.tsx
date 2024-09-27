import TransactionDetailView, {
  TransactionDetailEvent,
} from '../component/transaction-detail/TransactionDetailView';
import { TransactionDetail } from '../interface';
import { useModal } from './ModalProvider';

const transactionDetail: TransactionDetail = {
  id: 101,
  date: 'Today, 4:43PM',
  brand: 'Mcdonalds',
  category: 'Restaurants',
  currency: 'GBP',
  amount: -150,
  status: 'Completed',
  card: 'Visa ..6789',
  totalSpentAtBrand: 2000,
  numberOfTransAtBrand: 16,
};

interface TransactionDetailModalProps {
  className?: string;
}

const TransactionDetailModal = ({
  className = '',
}: TransactionDetailModalProps) => {
  const { dismissModal } = useModal();

  const handleClick = (evt: TransactionDetailEvent) => {
    if (evt.type === 'dismiss') {
      // window.location.hash = '';
      dismissModal();
    }
  };

  return (
    <TransactionDetailView
      data={transactionDetail}
      className={`${className}`}
      onClick={handleClick}
    ></TransactionDetailView>
  );
};

export default TransactionDetailModal;
