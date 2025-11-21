import { createBrowserRouter } from "react-router-dom";
import Layout from "@/router/Layout";
import HomePage from "@/pages/HomePage";
import { ROUTES } from "@/router/constant/routes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
