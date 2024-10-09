import { createContext, ReactNode, useContext } from 'react';
import UserStore from '../../store/UserStore';
import TransactionStore from '../../store/TransactionStore';

interface IStoreProvider {
  userStore: UserStore;
  transactionStore: TransactionStore;
}

const StoreContext = createContext<IStoreProvider | undefined>(undefined);

export const useStoreContext = () => {
  const ctx = useContext(StoreContext);
  if (ctx === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return ctx;
};

interface StoreProviderProps {
  children: ReactNode;
}

const userStore = new UserStore();
const transactionStore = new TransactionStore(userStore);

const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider value={{ userStore, transactionStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
