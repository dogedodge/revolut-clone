import { useNavigate } from 'react-router-dom';
import TransactionGroupList from '../component/transaction/TransactionGroupList';
import { TransactionListEvent } from '../component/transaction/TransactionList';
import { useStoreContext } from './provider/StoreProvider';
import { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import SubpageLayout from '../component/layout/SubpageLayout';
import splitTransactionGroup from '../utils/splitTransactionGroup';
import { useVirtualScroll } from '../component/scroller/VirtualScroller';

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

  const loadMore = useCallback(() => {
    if (userStore.authenticated && userStore.accounts.length > 0) {
      transactionStore.fetchTransactions();
    }
  }, [userStore.authenticated, userStore.accounts.length]);

  const transactionGroups = useMemo(() => {
    return splitTransactionGroup(transactionStore.transactions);
  }, [transactionStore.transactions.length]);

  const itemHeightList = useMemo(() => {
    const heightGroups = transactionGroups.map((group) =>
      group.map((t, index) => (index === 0 ? 92 : 64)),
    );
    console.log('heightGroups:', heightGroups);
    return heightGroups.flat();
  }, [transactionGroups]);

  // const {} = useVirtualScroll()

  return (
    <SubpageLayout
      title="Transactions"
      onDismiss={handleDismiss}
      hasMore={transactionStore.hasMore}
      isLoading={transactionStore.isLoadingList}
      loadMore={loadMore}
    >
      {transactionStore.transactions.length > 0 && (
        <TransactionGroupList
          // transactions={transactionStore.transactions}
          transactionGroups={transactionGroups}
          onClick={onTransactionClick}
        ></TransactionGroupList>
      )}
      <div className="h-[40vh]"></div>
    </SubpageLayout>
  );
});

export default TransactionListPage;
