import { useNavigate } from 'react-router-dom';
import TransactionGroupList from '../component/transaction/TransactionGroupList';
import mockTransactions from '../mock/mockTransactions';
import { TransactionListEvent } from '../component/transaction/TransactionList';
import SubpageLayout from '../component/layout/SubpageLayout';

const TransactionListPage = () => {
  const navigate = useNavigate();

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
      <TransactionGroupList
        transactions={mockTransactions}
        onClick={onTransactionClick}
      ></TransactionGroupList>
    </SubpageLayout>
  );
};

export default TransactionListPage;
