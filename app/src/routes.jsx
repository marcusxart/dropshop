import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import AuthWrapper from "./components/authWrapper";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

import MainLayout from "./layout/MainLayout";
import Home from "./Page/Home";
import Orders from "./Page/Orders";
import Orderhistory from "./Page/Orderhistory";

const routes = createBrowserRouter([
  {
    path: "auth",
    element: <AuthWrapper />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgotten-pass",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "user",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "history",
        element: <Orderhistory />,
      },
    ],
  },
]);

export default routes;
