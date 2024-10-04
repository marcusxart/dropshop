import { Outlet } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  return <div>{<Outlet /> ?? children}</div>;
};

export default AuthWrapper;
