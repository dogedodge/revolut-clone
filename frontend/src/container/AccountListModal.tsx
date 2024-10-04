import { observer } from 'mobx-react-lite';
import AccountListView, {
  AccountListEvent,
} from '../component/account/AccountListView';
// import mockAccounts from '../mock/mockAccouts';
import { useModal } from './provider/ModalProvider';
import { useStore } from './provider/StoreProvider';

interface AccountListModalProps {
  className?: string;
}

const AccountListModal = observer(
  ({ className = '' }: AccountListModalProps) => {
    const { dismissModal } = useModal();
    const { userStore } = useStore();

    const handleChange = (evt: AccountListEvent) => {
      if (evt.type === 'dismiss') {
        dismissModal();
      }
    };

    return (
      <AccountListView
        accounts={userStore.accounts}
        totalCurrency="USD"
        total={3000}
        onChange={handleChange}
        className={className}
      ></AccountListView>
    );
  },
);

export default AccountListModal;
