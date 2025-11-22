import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import Layout from '@/router/Layout';
import { ROUTES } from '@/router/constant/routes';
import GlobalLoadingScreen from '@/shared/components/global-loading-screen/global-loading-screen'; // 👈 로딩 컴포넌트 임포트

import MainPage from '@/pages/main/MainPage';
import ArchivePage from '@/pages/archive/ArchivePage';
import PostPage from '@/pages/post/PostPage';

const LazyResultPage = React.lazy(() => import('@/pages/results/ResultPage'));

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
        element: (
          <Suspense fallback={<GlobalLoadingScreen />}>
            <LazyResultPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.POST,
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
