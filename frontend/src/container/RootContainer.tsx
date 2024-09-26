import { Outlet } from 'react-router-dom';
import ModalProvider from './ModalProvider';

const RootContainer = () => {
  return (
    <div className="bg-black w-screen h-screen flex flex-col overflow-hidden">
      <ModalProvider>
        <Outlet></Outlet>
      </ModalProvider>
    </div>
  );
};

export default RootContainer;
