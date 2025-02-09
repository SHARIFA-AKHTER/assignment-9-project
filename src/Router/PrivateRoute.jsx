
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("user"); 
  const location = useLocation();

  if (!isLoggedIn) {
    return isLoggedIn? <Outlet></Outlet> : <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

