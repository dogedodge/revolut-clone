import { useNavigate } from 'react-router-dom';
import TransactionGroupList from '../component/transaction/TransactionGroupList';
import { TransactionListEvent } from '../component/transaction/TransactionList';
import { useStoreContext } from './provider/StoreProvider';
import { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useSubpageLayout } from '../component/layout/SubpageLayout';
import splitTransactionGroup from '../utils/splitTransactionGroup';
import InfiniteScroller from '../component/scroller/InfiniteScroller';

const title = 'Transactions';

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

  const { renderSubpage, handleScroll } = useSubpageLayout(
    title,
    handleDismiss,
  );

  return renderSubpage(
    <InfiniteScroller
      hasMore={transactionStore.hasMore}
      isLoading={transactionStore.isLoadingList}
      loadMore={loadMore}
      onScroll={handleScroll}
      className="relative w-full flex-grow overflow-scroll pl-4 pr-4"
    >
      <div className="text-4xl font-semibold mt-4">{title}</div>
      {transactionStore.transactions.length > 0 && (
        <TransactionGroupList
          transactionGroups={transactionGroups}
          onClick={onTransactionClick}
        ></TransactionGroupList>
      )}
    </InfiniteScroller>,
  );
});

export default TransactionListPage;
