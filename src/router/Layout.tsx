import { Outlet } from 'react-router-dom';
import Header from '@/shared/components/header/Header';
import { mainStyle } from './Layout.css';
import { Suspense } from 'react';
import GlobalLoadingScreen from '@/shared/components/global-loading-screen/global-loading-screen';

const Layout = () => {
  return (
    <main className={mainStyle}>
      <Header />
      <Suspense fallback={<GlobalLoadingScreen />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Layout;
