import { Outlet } from 'react-router-dom';
import ModalProvider from './ModalProvider';

const RootContainer = () => {
  return (
    <ModalProvider>
      <Outlet></Outlet>
    </ModalProvider>
  );
};

export default RootContainer;
