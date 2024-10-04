import { createContext, ReactNode, useContext } from 'react';
import UserStore from '../../store/UserStore';

interface IStoreProvider {
  userStore: UserStore;
}

const StoreContext = createContext<IStoreProvider | undefined>(undefined);

export const useStore = () => {
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

const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider value={{ userStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
