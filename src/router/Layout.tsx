import { Outlet } from "react-router-dom";
import { mainStyle } from "./Layout.css";

const Layout = () => {
  return (
    <main className={mainStyle}>
      <Outlet />
    </main>
  );
};

export default Layout;
