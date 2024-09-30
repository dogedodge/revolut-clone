import applePayLogo from '../../assets/apple-pay.png';

const ApplePayItem = () => {
  return (
    <div className="bg-white h-20 w-full flex flex-row rounded-xl items-center px-4">
      <img src={applePayLogo} className="w-auto h-12"></img>
      <div className="ml-4 text-xl">Apple Pay</div>
    </div>
  );
};

export default ApplePayItem;
