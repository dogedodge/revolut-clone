import { useNavigate } from 'react-router-dom';
import SubpageLayout from '../component/layout/SubpageLayout';
import ApplePayItem from '../component/transfer/ApplePayItem';
import AccountInputItem from '../component/transfer/AccountInputItem';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import ApplePayButton from '../component/transfer/ApplePayButton';
import { observer } from 'mobx-react-lite';
import { useStoreContext } from './provider/StoreProvider';

const AddMoneyPage = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useStoreContext();

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
        {userStore.currentAccount && (
          <AccountInputItem
            account={userStore.currentAccount}
            onChange={handleInputChange}
          ></AccountInputItem>
        )}
      </div>

      <ApplePayButton
        className="fixed bottom-6 left-0"
        onClick={handleSubmit}
      ></ApplePayButton>
    </SubpageLayout>
  );
});

export default AddMoneyPage;
