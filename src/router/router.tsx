import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/router/Layout';
import { ROUTES } from '@/router/constant/routes';
import MainPage from '@/pages/main/MainPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
