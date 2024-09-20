import AccountHorizontalSlider from '../component/account-slider/AccountHorizontalSlider';
import HomeHeader from '../component/layout/HomeHeader';
import bgImage from '../assets/purple-waves.jpg';
import TransactionList, {
  TransactionListEvent,
} from '../component/transaction/TransactionList';

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
  const onHeaderClick = (btnType: string) => {};

  const onTransactionClick = (evt: TransactionListEvent) => {};

  return (
    <div className="absolute top-0 w-full h-full flex flex-col">
      <img src={bgImage} className="absolute w-full top-0 left-0"></img>
      <HomeHeader
        className="relative mt-4"
        onClick={onHeaderClick}
      ></HomeHeader>
      <div className="relative overflow-scroll flex-grow flex flex-col">
        <AccountHorizontalSlider
          slideData={accountData}
        ></AccountHorizontalSlider>
        <TransactionList
          className="relative mt-8"
          data={transactionData as any}
          onClick={onTransactionClick}
        ></TransactionList>
      </div>
    </div>
  );
};

export default HomePage;
