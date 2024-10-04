import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login";
import AuthWrapper from "./components/authWrapper";

const routes = createBrowserRouter([
  {
    path: "auth",
    element: <AuthWrapper />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default routes;
