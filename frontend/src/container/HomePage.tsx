import AccountHorizontalSlider from '../component/account-slider/AccountHorizontalSlider';
import HomeHeader from '../component/layout/HomeHeader';
import bgImage from '../assets/purple-waves.jpg';

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

const HomePage = () => {
  const onHeaderClick = (btnType: string) => {};

  return (
    <div className="absolute top-0 w-full">
      <img src={bgImage} className="absolute w-full top-0 left-0"></img>
      <HomeHeader
        className="relative mt-4"
        onClick={onHeaderClick}
      ></HomeHeader>
      <AccountHorizontalSlider
        slideData={accountData}
      ></AccountHorizontalSlider>
    </div>
  );
};

export default HomePage;
