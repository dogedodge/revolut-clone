import { Outlet } from 'react-router-dom';
import ModalProvider from './provider/ModalProvider';
import { useStore } from './provider/StoreProvider';
import { useEffect } from 'react';

const RootContainer = () => {
  const { userStore } = useStore();

  useEffect(() => {
    userStore.login('john.doe@example.com', 'John').then(() => {
      userStore.fetchAccounts();
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
