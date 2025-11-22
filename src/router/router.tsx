import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/router/Layout';
import { ROUTES } from '@/router/constant/routes';
import MainPage from '@/pages/main/MainPage';
import ArchivePage from '@/pages/archive/ArchivePage';
import PostPage from '@/pages/post/PostPage';
import ResultPage from '@/pages/results/ResultPage';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.ARCHIVE,
        element: <ArchivePage />,
      },
      {
        path: ROUTES.RESULTS,
        element: <ResultPage />,
      },
      {
        path: `${ROUTES.RESULTS}/:id`,
        element: <ResultPage />,
      },
      {
        path: ROUTES.POST,
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
