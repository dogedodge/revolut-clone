import { useNavigate } from 'react-router-dom';
import TransactionGroupList from '../component/transaction/TransactionGroupList';
import { TransactionListEvent } from '../component/transaction/TransactionList';
import SubpageLayout from '../component/layout/SubpageLayout';
import { useStoreContext } from './provider/StoreProvider';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const TransactionListPage = observer(() => {
  const navigate = useNavigate();
  const { userStore, transactionStore } = useStoreContext();

  useEffect(() => {
    if (userStore.authenticated && userStore.accounts.length > 0) {
      transactionStore.fetchTransactions();
    }
  }, [userStore.authenticated, userStore.accounts.length]);

  const handleDismiss = () => {
    navigate('/');
  };

  const onTransactionClick = (evt: TransactionListEvent) => {
    console.log(evt);
    if (evt.type === 'item') {
      window.location.hash = `modal/transaction/${evt.transactionId}`;
    }
  };

  return (
    <SubpageLayout title="Transactions" onDismiss={handleDismiss}>
      {transactionStore.transactions.length > 0 && (
        <TransactionGroupList
          transactions={transactionStore.transactions}
          onClick={onTransactionClick}
        ></TransactionGroupList>
      )}
      <div className="h-[40vh]"></div>
    </SubpageLayout>
  );
});

export default TransactionListPage;
