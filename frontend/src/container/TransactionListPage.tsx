import { useNavigate } from 'react-router-dom';
import SubpageHeader from '../component/layout/SubpageHeader';

const TransactionListPage = () => {
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate(-1);
  };

  return (
    <div className="absolute z-20 w-full h-full bg-gray-100">
      <SubpageHeader
        title="Transactions"
        onClick={handleDismiss}
      ></SubpageHeader>
    </div>
  );
};

export default TransactionListPage;
