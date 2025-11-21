import { RouterProvider } from "react-router-dom";
import router from "@/router/router";
import "@/styles/reset.css";
import "@/styles/global.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
