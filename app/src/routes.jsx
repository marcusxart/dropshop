import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/login";
import AuthWrapper from "./components/authWrapper";
import Register from "./auth/Register";

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
    ],
  },
]);

export default routes;
