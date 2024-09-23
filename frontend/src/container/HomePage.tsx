import AccountHorizontalSlider from '../component/account-slider/AccountHorizontalSlider';
import HomeHeader from '../component/layout/HomeHeader';
import bgImage from '../assets/purple-waves.jpg';
import TransactionList, {
  TransactionListEvent,
} from '../component/transaction/TransactionList';
import ScrollerComponent from '../component/ScrollerComponent';
import { useState } from 'react';

const accountData = [
  {
    accountId: 5,
    currency: 'HKD',
    balance: 215.18,
  },
  {
    accountId: 6,
    currency: 'GBP',
    balance: 115.18,
  },
];

const transactionData = [
  {
    transactionId: 101,
    transactionDate: 'Today, 4:43PM',
    brand: 'Mcdonalds',
    category: 'Restaurants',
  },
  {
    transactionId: 102,
    transactionDate: 'Today, 5:43PM',
    brand: 'KFC',
    category: 'Restaurants',
  },
  {
    transactionId: 103,
    transactionDate: 'Today, 4:43PM',
    brand: 'Starbucks',
    category: 'Restaurants',
  },
  {
    transactionId: 104,
    transactionDate: 'Today, 5:43PM',
    brand: 'Tesco',
    category: 'Groceries',
  },
  {
    transactionId: 105,
    transactionDate: 'Today, 5:43PM',
    brand: 'Sainsburys',
    category: 'Groceries',
  },
  {
    transactionId: 106,
    transactionDate: 'Today, 4:43PM',
    brand: 'Mcdonalds',
    category: 'Restaurants',
  },
  {
    transactionId: 107,
    transactionDate: 'Today, 5:43PM',
    brand: 'KFC',
    category: 'Restaurants',
  },
  {
    transactionId: 108,
    transactionDate: 'Today, 4:43PM',
    brand: 'Starbucks',
    category: 'Restaurants',
  },
];

const HomePage = () => {
  const [headerOpacity, setHeaderOpacity] = useState(0);

  const onHeaderClick = (btnType: string) => {
    console.log(btnType);
  };

  const onTransactionClick = (evt: TransactionListEvent) => {
    console.log(evt);
  };

  const onScroll = (position: number) => {
    // console.log(position);
    setHeaderOpacity(Math.min(position / 80, 1));
  };

  return (
    <div className="absolute top-0 w-full h-full flex flex-col">
      <img src={bgImage} className="absolute w-full top-0 left-0"></img>
      <HomeHeader
        bgOpacity={headerOpacity}
        className="z-10"
        onClick={onHeaderClick}
      ></HomeHeader>
      {/* <div className="relative overflow-scroll flex-grow flex flex-col"> */}
      <ScrollerComponent
        className="relative flex-grow flex flex-col"
        onScroll={onScroll}
      >
        <AccountHorizontalSlider
          slideData={accountData}
        ></AccountHorizontalSlider>
        <TransactionList
          className="relative mt-8 ml-4 mr-4"
          data={transactionData as any}
          onClick={onTransactionClick}
        ></TransactionList>
      </ScrollerComponent>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
