import { observer } from 'mobx-react-lite';
import AccountListView, {
  AccountListEvent,
} from '../component/account/AccountListView';
// import mockAccounts from '../mock/mockAccouts';
import { useModal } from './provider/ModalProvider';
import { useStoreContext } from './provider/StoreProvider';

interface AccountListModalProps {
  className?: string;
}

const AccountListModal = observer(
  ({ className = '' }: AccountListModalProps) => {
    const { dismissModal } = useModal();
    const { userStore } = useStoreContext();

    const handleChange = (evt: AccountListEvent) => {
      if (evt.type === 'dismiss') {
        dismissModal();
      } else if (evt.type === 'item-selected-change') {
        userStore.setCurrentAccountIndex(evt.payload as number);
      }
    };

    return (
      <AccountListView
        accounts={userStore.accounts}
        totalCurrency="USD"
        total={3000}
        onChange={handleChange}
        className={className}
        selectedIndex={userStore.currentAccountIndex}
      ></AccountListView>
    );
  },
);

export default AccountListModal;
