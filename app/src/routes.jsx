import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import AuthWrapper from "./components/authWrapper";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import PickUp from "./layout/PickUp";

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
    path: "pick-up",
    element: <PickUp />,
    children: [],
  },
]);

export default routes;
