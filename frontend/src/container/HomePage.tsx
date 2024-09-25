import AccountHorizontalSlider from '../component/account-slider/AccountHorizontalSlider';
import HomeHeader from '../component/layout/HomeHeader';
import bgImage from '../assets/purple-waves.jpg';
import TransactionList, {
  TransactionListEvent,
} from '../component/transaction/TransactionList';
import ScrollerComponent from '../component/ScrollerComponent';
import { useState } from 'react';
import mockTransactions from '../mock/mockTransactions';

const accountData = [
  {
    accountId: 5,
    currency: 'GBP',
    balance: 215.18,
  },
  {
    accountId: 6,
    currency: 'GBP',
    balance: 115.18,
  },
];

const HomePage = () => {
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [bgMarginTop, setBgMarginTop] = useState(0);

  const onHeaderClick = (btnType: string) => {
    console.log(btnType);
  };

  const onTransactionClick = (evt: TransactionListEvent) => {
    console.log(evt);
    if (evt.type === 'item') {
      window.location.hash = `modal/transaction/${evt.transactionId}`;
    }
  };

  const onScroll = (position: number) => {
    // console.log(position);
    setHeaderOpacity(Math.min(position / 80, 1));
    setBgMarginTop(Math.min(position / 2, 200));
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
      ></HomeHeader>

      <ScrollerComponent
        className="relative flex-grow flex flex-col"
        onScroll={onScroll}
      >
        <AccountHorizontalSlider
          slideData={accountData}
        ></AccountHorizontalSlider>

        <div className="relative mt-8 w-full">
          <div className="w-full h-full absolute top-4 bg-gray-200"></div>
          <TransactionList
            className="relative ml-4 mr-4"
            transactions={mockTransactions as any}
            onClick={onTransactionClick}
          ></TransactionList>
        </div>
      </ScrollerComponent>
    </div>
  );
};

export default HomePage;
