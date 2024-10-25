import AccountHorizontalSlider from '../component/account-slider/AccountHorizontalSlider';
import HomeHeader from '../component/layout/HomeHeader';
import bgImage from '../assets/purple-waves.jpg';
import TransactionList, {
  TransactionListEvent,
} from '../component/transaction/TransactionList';
import ScrollerComponent from '../component/scroller/ScrollerComponent';
import { useEffect, useState } from 'react';
// import mockTransactions from '../mock/mockTransactions';
import { Outlet, useNavigate } from 'react-router-dom';
import { AccountSlideEvent } from '../component/account-slider/AccountSlide';
import { observer } from 'mobx-react-lite';
import { useStoreContext } from './provider/StoreProvider';

// const accountData = [
//   {
//     accountId: 5,
//     currency: 'GBP',
//     balance: 215.18,
//   },
//   {
//     accountId: 6,
//     currency: 'GBP',
//     balance: 115.18,
//   },
// ];

const HomePage = observer(() => {
  const { userStore, transactionStore } = useStoreContext();
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [headerWhiteBg, setHeaderWhiteBg] = useState(false);
  const [bgMarginTop, setBgMarginTop] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.authenticated) {
      userStore.fetchAccounts().then(() => {
        userStore.fetchRecentTransactions();
      });
      transactionStore.resetTransactionList();
    }
  }, [userStore.authenticated, userStore.currentAccountIndex]);

  const onHeaderClick = (btnType: string) => {
    console.log(btnType);
  };

  const onTransactionClick = (evt: TransactionListEvent) => {
    console.log(evt);
    if (evt.type === 'item') {
      window.location.hash = `modal/transaction/${evt.transactionId}`;
    } else if (evt.type === 'seeAll') {
      navigate('/transaction-list');
    }
  };

  const onAccountSlideClick = (evt: AccountSlideEvent) => {
    console.log(evt);
    if (evt.type === 'accounts') {
      window.location.hash = `modal/accounts/${evt.accountId}`;
    }
    switch (evt.type) {
      case 'accounts':
        window.location.hash = `modal/accounts/${evt.accountId}`;
        break;
      case 'add-money':
        navigate('/add-money');
        break;
    }
  };

  const onAccountSlideChange = (slideIndex: number) => {
    userStore.setCurrentAccountIndex(slideIndex);
  };

  const onScroll = (position: number) => {
    console.log(position);
    setHeaderOpacity(Math.min(position / 80, 1));
    setBgMarginTop(Math.min(position / 2, 200));
    if (position >= 448 && !headerWhiteBg) {
      setHeaderWhiteBg(true);
    } else if (position < 448 && headerWhiteBg) {
      setHeaderWhiteBg(false);
    }
  };

  return (
    <div className="absolute top-0 w-full h-full flex flex-col">
      <img
        src={bgImage}
        className="absolute w-full"
        style={{ marginTop: `-${bgMarginTop}px` }}
      ></img>
      <HomeHeader
        bgOpacity={headerOpacity}
        className="z-10"
        onClick={onHeaderClick}
        whiteBg={headerWhiteBg}
      ></HomeHeader>

      <ScrollerComponent
        className="relative flex-grow flex flex-col"
        onScroll={onScroll}
      >
        <AccountHorizontalSlider
          accounts={userStore.accounts}
          onClick={onAccountSlideClick}
          currentSlide={userStore.currentAccountIndex}
          onSlideChange={onAccountSlideChange}
        ></AccountHorizontalSlider>

        <div className="relative mt-8 w-full">
          <div className="w-full h-full absolute top-4 bg-gray-200"></div>
          <TransactionList
            className="relative ml-4 mr-4"
            transactions={userStore.recentTransactions}
            onClick={onTransactionClick}
          ></TransactionList>
          <div className="h-[40vh]"></div>
        </div>
      </ScrollerComponent>

      <Outlet></Outlet>
    </div>
  );
});

export default HomePage;
