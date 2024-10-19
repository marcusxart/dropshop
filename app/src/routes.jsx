import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import AuthWrapper from "./components/authWrapper";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

import MainLayout from "./layout/MainLayout";
import Home from "./Page/Home";
import Orders from "./Page/Orders";
import Orderhistory from "./Page/Orderhistory";
import Profile from "./Page/Account/Profile";
import AdminAuthWrapper from "./Admin/layout/AdminAuthWrapper";
import Adminlogin from "./Admin/adminauth/adminlogin";
import Adminreg from "./Admin/adminauth/adminreg";
import Adminlayout from "./Admin/layout/Adminlayout";
import OverView from "./Admin/page/overview";
import Riders from "./Admin/page/Riders";

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
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "admin-auth",
    element: <AdminAuthWrapper />,
    children: [
      {
        index: true,
        element: <Adminlogin />,
      },
      {
        path: "admin-login",
        element: <Adminlogin />,
      },
      {
        path: "admin-reg",
        element: <Adminreg />,
      },
    ],
  },
  {
    path: "admin",
    element: <Adminlayout />,
    children: [
      {
        path: "overview",
        element: <OverView />,
      },
      {
        path: "all-riders",
        element: <Riders />,
      },
    ],
  },
]);

export default routes;
