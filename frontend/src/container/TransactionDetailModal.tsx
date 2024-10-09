import { useEffect } from 'react';
import TransactionDetailView, {
  TransactionDetailEvent,
} from '../component/transaction-detail/TransactionDetailView';
import { TransactionDetail } from '../interface';
import { useModal } from './provider/ModalProvider';
import { useStoreContext } from './provider/StoreProvider';

const transactionDetail: TransactionDetail = {
  id: 101,
  createAt: 'Today, 4:43PM',
  recipient: 'Mcdonalds',
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
  const { dismissModal, currentId } = useModal();
  const { transactionStore } = useStoreContext();

  useEffect(() => {
    if (currentId) {
      transactionStore.fetchDetail(currentId);
    }
  }, [currentId]);

  const handleClick = (evt: TransactionDetailEvent) => {
    if (evt.type === 'dismiss') {
      dismissModal();
    }
  };

  return (
    <TransactionDetailView
      data={transactionStore.transactionDetail ?? transactionDetail}
      className={`${className}`}
      onClick={handleClick}
    ></TransactionDetailView>
  );
};

export default TransactionDetailModal;
