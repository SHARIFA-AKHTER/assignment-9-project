import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Brands from "../components/Brands";

import MyProfile from "../components/MyProfile";
import AboutDev from "../components/AboutDev";
import NotFound from "../components/NotFound";
 import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthLayout from "../Layout/AuthLayout";
import EditProfile from "../components/EditProfile";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../components/Home";
import PrivateRoute from "./PrivateRoute";
import CouponPage from "../components/CouponPage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/brands",
            element: <Brands></Brands>,
        },
        {
            path: "/brand/:id",
            element: <PrivateRoute><CouponPage></CouponPage></PrivateRoute>,
        },
      
        {
            path:"/my-profile",
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        },
        
        {
            path:"/edit-profile",
            element:<EditProfile></EditProfile>
        },
        {
            path:"/about-dev",
            element: <AboutDev></AboutDev>,
        },
        // {
        //     path:"/all-brands",
        //     element:<AllBrands></AllBrands>
        // },
        
      ]

    },

    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element:<Login></Login>,
             },
              {
                path:"/auth/forgot-password",
                 element:<ForgotPassword></ForgotPassword>,
              },
         {
            path:"/auth/register",
            element:<Register></Register>,
          },
        ]
    },
    {
        path:"*",
        element: <NotFound></NotFound>,
    },
   
  ]);
  export default router
 