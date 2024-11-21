
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

// import { Navigate, useLocation } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebaseConfig";

// const PrivateRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth); // Get user and loading state
//   const location = useLocation();

//   // Show a loading spinner or message while Firebase is checking the user's auth state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Redirect to login if the user is not authenticated
//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // Render the protected component if authenticated
//   return children;
// };

// export default PrivateRoute;