import { useNavigate } from 'react-router-dom';
import SubpageHeader from '../component/layout/SubpageHeader';
import { useEffect, useState } from 'react';
import TransactionGroupList from '../component/transaction/TransactionGroupList';
import mockTransactions from '../mock/mockTransactions';
import { TransactionListEvent } from '../component/transaction/TransactionList';
import ScrollerComponent from '../component/ScrollerComponent';

const TransactionListPage = () => {
  const navigate = useNavigate();
  const [animationStyle, setAnimationStyle] = useState('translate-x-full');
  const [hideTitle, setHideTitle] = useState(true);

  const handleDismiss = () => {
    setAnimationStyle('translate-x-full');
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAnimationStyle('');
    }, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  const onTransactionClick = (evt: TransactionListEvent) => {
    console.log(evt);
    if (evt.type === 'item') {
      window.location.hash = `modal/transaction/${evt.transactionId}`;
    }
  };

  const handleScroll = (position: number) => {
    console.log(position);
    if (position > 50 && hideTitle) {
      setHideTitle(false);
    } else if (position <= 50 && !hideTitle) {
      setHideTitle(true);
    }
  };

  return (
    <div
      className={`absolute z-20 w-full h-full flex flex-col bg-gray-100 transition-transform duration-300 ${animationStyle}`}
    >
      <SubpageHeader
        title="Transactions"
        hideTitle={hideTitle}
        onClick={handleDismiss}
      ></SubpageHeader>
      <ScrollerComponent
        onScroll={handleScroll}
        className="w-full flex-grow overflow-scroll pl-4 pr-4"
      >
        <div className="text-4xl font-semibold mt-4">Transactions</div>
        <TransactionGroupList
          transactions={mockTransactions}
          onClick={onTransactionClick}
        ></TransactionGroupList>
      </ScrollerComponent>
    </div>
  );
};

export default TransactionListPage;
