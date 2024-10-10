import { useEffect } from 'react';
import TransactionDetailView, {
  TransactionDetailEvent,
} from '../component/transaction-detail/TransactionDetailView';
// import { TransactionDetail } from '../interface';
import { useModal } from './provider/ModalProvider';
import { useStoreContext } from './provider/StoreProvider';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { observer } from 'mobx-react-lite';

// const transactionDetail: TransactionDetail = {
//   id: 101,
//   createAt: 'Today, 4:43PM',
//   recipient: 'Mcdonalds',
//   category: 'Restaurants',
//   currency: 'GBP',
//   amount: -150,
//   status: 'Completed',
//   card: 'Visa ..6789',
//   totalSpentAtBrand: 2000,
//   numberOfTransAtBrand: 16,
// };

interface TransactionDetailModalProps {
  className?: string;
}

const TransactionDetailModal = observer(
  ({ className = '' }: TransactionDetailModalProps) => {
    const { dismissModal, currentId } = useModal();
    const { transactionStore } = useStoreContext();

    useEffect(() => {
      if (currentId) {
        transactionStore.fetchDetail(currentId);
      }
    }, [currentId]);

    const handleClick = (evt: TransactionDetailEvent) => {
      if (evt.type === 'seeAll') {
      }
    };

    return (
      <div
        className={`bg-gray-100 w-full h-screen rounded-xl p-4 ${className}`}
      >
        <div>
          <div
            className="size-12"
            onClick={() => {
              dismissModal();
            }}
          >
            <XMarkIcon className="size-6"></XMarkIcon>
          </div>
        </div>
        {!!transactionStore.transactionDetail && (
          <TransactionDetailView
            data={transactionStore.transactionDetail}
            // className={`${className}`}
            onClick={handleClick}
          ></TransactionDetailView>
        )}
      </div>
    );
  },
);

export default TransactionDetailModal;
