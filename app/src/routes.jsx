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
import Allorders from "./Admin/page/allOrders";
import AdminHistory from "./Admin/page/adminhistory";
import Customers from "./Admin/page/customers";
import RiderAuthWrapper from "./Rider/layouts/RiderAuthWrpper";
import RiderLogin from "./Rider/Auth/riderlogin";
import RiderRegister from "./Rider/Auth/ridergister";
import Riderlayout from "./Rider/layouts/RiderLayout";
import RiderOrders from "./Rider/page/orders";
import Ongoing from "./Rider/page/ongoingorders";
import RiderHistory from "./Rider/page/riderhistory";

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
      {
        path: "all-orders",
        element: <Allorders />,
      },
      {
        path: "all-history",
        element: <AdminHistory />,
      },
      {
        path: "all-customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "rider-auth",
    element: <RiderAuthWrapper />,
    children: [
      {
        index: true,
        element: <RiderLogin />,
      },
      {
        path: "rider-login",
        element: <RiderLogin />,
      },
      {
        path: "rider-reg",
        element: <RiderRegister />,
      },
    ],
  },
  {
    path: "rider",
    element: <Riderlayout />,
    children: [
      {
        path: "orders",
        element: <RiderOrders />,
      },
      {
        path: "ongoing-orders",
        element: <Ongoing />,
      },
      {
        path: "order-history",
        element: <RiderHistory />,
      },
    ],
  },
]);

export default routes;
