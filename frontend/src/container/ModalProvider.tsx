import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import TransactionDetailModal from './TransactionDetailModal';

type ModalName = 'none' | 'transaction';

interface ModalContextType {
  currentModalName: ModalName;
  setCurrentModalName: (name: ModalName) => void;
  currentId: string;
  setCurrentId: (id: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (ctx === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return ctx;
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [currentModalName, setCurrentModalName] = useState<ModalName>('none');
  const [currentId, setCurrentId] = useState<string>('');

  const { hash } = useLocation();

  useEffect(() => {
    // hash tag example: #modal/transaction/101
    if (hash && hash.length > 1) {
      const parts = hash.substring(1).split('/');
      if (parts.length === 3 && parts[0] === 'modal') {
        setCurrentModalName(parts[1] as any);
        setCurrentId(parts[2]);
      } else {
        setCurrentModalName('none');
        setCurrentId('');
      }
    } else {
      setCurrentModalName('none');
      setCurrentId('');
    }
  }, [hash]);

  return (
    <div>
      <ModalContext.Provider
        value={{
          currentModalName,
          setCurrentModalName,
          currentId,
          setCurrentId,
        }}
      >
        {children}
        {currentModalName !== 'none' && (
          <div className="bg-gray-600 bg-opacity-50 absolute w-screen h-screen z-20"></div>
        )}
        {currentModalName === 'transaction' && (
          <TransactionDetailModal></TransactionDetailModal>
        )}
      </ModalContext.Provider>
    </div>
  );
};

export default ModalProvider;
