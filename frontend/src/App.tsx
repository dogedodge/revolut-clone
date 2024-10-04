import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './container/HomePage';
import RootContainer from './container/RootContainer';
import TransactionListPage from './container/TransactionListPage';
import AddMoneyPage from './container/AddMoneyPage';
import StoreProvider from './container/provider/StoreProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootContainer></RootContainer>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        children: [
          {
            path: 'transaction-list',
            element: <TransactionListPage></TransactionListPage>,
          },
          {
            path: 'add-money',
            element: <AddMoneyPage></AddMoneyPage>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
