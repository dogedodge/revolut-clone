import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import TransactionDetailModal from '../TransactionDetailModal';
import AccountListModal from '../AccountListModal';

type ModalName = 'none' | 'transaction' | 'accounts';

interface IModalContext {
  currentModalName: ModalName;
  setCurrentModalName: (name: ModalName) => void;
  currentId: string;
  setCurrentId: (id: string) => void;
  dismissModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

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

  const [shouldScalePage, setShouldScalePage] = useState(false);

  const [modalClassName, setModalClassName] = useState('translate-y-full');

  const isModalDisplay = currentModalName !== 'none';

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

  useEffect(() => {
    let timeout: number;
    if (isModalDisplay) {
      timeout = window.setTimeout(() => {
        setModalClassName('');
        setShouldScalePage(true);
      }, 50);
    }
    return () => {
      window.clearTimeout(timeout);
    };
  }, [isModalDisplay]);

  const dismissModal = useCallback(() => {
    setModalClassName('translate-y-full');
    setShouldScalePage(false);
    setTimeout(() => {
      window.location.hash = '';
    }, 300);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        currentModalName,
        setCurrentModalName,
        currentId,
        setCurrentId,
        dismissModal,
      }}
    >
      <div
        className={`absolute w-screen h-screen overflow-hidden origin-top transition-all duration-300 ${shouldScalePage ? 'mt-1 rounded-xl scale-95' : ''}`}
      >
        {children}
      </div>
      {/* {isModalDisplay && (
        <div className="bg-gray-600 bg-opacity-50 absolute w-screen h-screen z-20"></div>
      )} */}
      {currentModalName === 'transaction' && (
        <TransactionDetailModal
          className={`flex-1 mt-4 z-20 transition-transform duration-300 ${modalClassName}`}
        ></TransactionDetailModal>
      )}

      {currentModalName === 'accounts' && (
        <AccountListModal
          className={`flex-1 mt-4 z-20 transition-transform duration-300 ${modalClassName}`}
        ></AccountListModal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
