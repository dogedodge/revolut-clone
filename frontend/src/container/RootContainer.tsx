import { Outlet } from 'react-router-dom';
import ModalProvider from './provider/ModalProvider';
import { useStore } from './provider/StoreProvider';
import { useEffect } from 'react';

const RootContainer = () => {
  const { userStore } = useStore();

  useEffect(() => {
    userStore
      .login('john.doe@example.com', 'John')
      .then(() => {
        return userStore.fetchAccounts();
      })
      .then(() => {
        return userStore.fetchTransactions();
      });
  }, []);

  return (
    <div className="bg-black w-screen h-screen flex flex-col overflow-hidden">
      <ModalProvider>
        <Outlet></Outlet>
      </ModalProvider>
    </div>
  );
};

export default RootContainer;
