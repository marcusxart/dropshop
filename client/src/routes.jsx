import { createBrowserRouter } from "react-router-dom";
import PageWrapper from "./components/pageWrapper";
import Landing from "./pages/landing";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [{ index: true, element: <Landing /> }],
  },
]);

export default routes;
