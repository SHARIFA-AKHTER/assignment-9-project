
 import { Navigate, useLocation } from "react-router-dom";
 import { useAuthState } from "react-firebase-hooks/auth";
 import { auth } from "../firebaseConfig"
 const PrivateRoute = ({isLoggedIn, children }) => {
   const [user] = useAuthState(auth);
   const location = useLocation()
   if (!isLoggedIn || !user) {
     return <Navigate to="/login" state={{ from: location }} replace />;
   
   }return children;
 };

 export default PrivateRoute;

