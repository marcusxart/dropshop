import { createBrowserRouter } from "react-router-dom";
import PageWrapper from "./components/pageWrapper";
import Landing from "./pages/landing";
import Services from "./pages/services";
import About from "./pages/about";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      { index: true, element: <Landing /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default routes;
