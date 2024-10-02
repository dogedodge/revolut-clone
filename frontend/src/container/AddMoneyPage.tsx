import { useNavigate } from 'react-router-dom';
import SubpageLayout from '../component/layout/SubpageLayout';
import ApplePayItem from '../component/transfer/ApplePayItem';
import AccountInputItem from '../component/transfer/AccountInputItem';
import { AccountData } from '../interface';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import ApplePayButton from '../component/transfer/ApplePayButton';

const account: AccountData = {
  id: 201,
  currency: 'GBP',
  amount: 2000,
};

const AddMoneyPage = () => {
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate('/');
  };

  const handleInputChange = (inputAmount: number) => {
    console.log(`inputAmount: ${inputAmount}`);
  };

  const handleSubmit = () => {
    console.log('add money submit');
  };

  return (
    <SubpageLayout title="Add Money" onDismiss={handleDismiss}>
      <div className="mt-4 flex flex-col items-center flex-grow">
        <ApplePayItem></ApplePayItem>
        <div className="-mt-3 -mb-3  z-10 size-8 rounded-full bg-white border border-gray-300 flex items-center justify-center">
          <ArrowDownIcon className="size-4"></ArrowDownIcon>
        </div>
        <AccountInputItem
          account={account}
          onChange={handleInputChange}
        ></AccountInputItem>
      </div>

      <ApplePayButton
        className="fixed bottom-6 left-0"
        onClick={handleSubmit}
      ></ApplePayButton>
    </SubpageLayout>
  );
};

export default AddMoneyPage;
