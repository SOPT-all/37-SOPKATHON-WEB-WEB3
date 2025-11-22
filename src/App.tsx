import { RouterProvider } from 'react-router-dom';
import router from '@/router/router';
import '@/styles/reset.css';
import '@/styles/global.css';
import ThemeProvider from '@/styles/theme-provider';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
