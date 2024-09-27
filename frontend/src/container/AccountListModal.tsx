import AccountListView, {
  AccountListEvent,
} from '../component/account/AccountListView';
import mockAccounts from '../mock/mockAccouts';
import { useModal } from './ModalProvider';

interface AccountListModalProps {
  className?: string;
}

const AccountListModal = ({ className = '' }: AccountListModalProps) => {
  const { dismissModal } = useModal();

  const handleChange = (evt: AccountListEvent) => {
    if (evt.type === 'dismiss') {
      dismissModal();
    }
  };

  return (
    <AccountListView
      accounts={mockAccounts}
      totalCurrency="GBP"
      total={3000}
      onChange={handleChange}
      className={className}
    ></AccountListView>
  );
};

export default AccountListModal;
