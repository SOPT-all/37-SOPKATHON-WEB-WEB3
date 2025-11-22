import { Outlet } from "react-router-dom";
import Header from "@/shared/components/header/Header";
import { mainStyle } from "./Layout.css";

const Layout = () => {
  return (
    <main className={mainStyle}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
