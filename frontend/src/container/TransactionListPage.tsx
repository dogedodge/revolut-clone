import { useNavigate } from 'react-router-dom';
import SubpageHeader from '../component/layout/SubpageHeader';
import { useEffect, useState } from 'react';

const TransactionListPage = () => {
  const navigate = useNavigate();
  const [animationStyle, setAnimationStyle] = useState('translate-x-full');

  const handleDismiss = () => {
    setAnimationStyle('translate-x-full');
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAnimationStyle('');
    }, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`absolute z-20 w-full h-full bg-gray-100 transition-transform duration-300 ${animationStyle}`}
    >
      <SubpageHeader
        title="Transactions"
        onClick={handleDismiss}
      ></SubpageHeader>
    </div>
  );
};

export default TransactionListPage;
