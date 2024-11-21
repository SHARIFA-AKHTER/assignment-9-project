import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Brands from "../components/Brands";
import Home from "../components/Home";
import MyProfile from "../components/MyProfile";
import AboutDev from "../components/AboutDev";
import BrandsShop from "../components/BrandsShop";
import NotFound from "../components/NotFound";
import AllBrands from "../components/AllBrands";
 import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthLayout from "../Layout/AuthLayout";
import CouponPage from "../components/CouponPage";
import EditProfile from "../components/EditProfile";
// import UpdateProfile from "../components/UpdateProfile";


const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
            path:"/brands",
            element: <Brands></Brands>,
            loader: () => fetch(`/cupons.json`)
        },
        {
            path: "/brand/:id/shop",
            element: <BrandsShop></BrandsShop>,
            loader: ({ params }) => fetch(`/cupons.json`).
            then(res => res.json().then(data => data.find
                (brand => brand._id === params.id)))
        },
        {
            path: "/brand/:id/shop",
            element: <CouponPage></CouponPage>,
            loader: ({ params }) => fetch(`/cupons.json`).
            then(res => res.json().then(data => data.find
                (brand => brand._id === params.id)))
        },
      
        {
            path:"/my-profile",
            element: <MyProfile></MyProfile>,
        },
        // {
        //     path:"/update-profile",
        //     element: <UpdateProfile></UpdateProfile>
        // },
        {
            path:"/edit-profile",
            element:<EditProfile></EditProfile>
        },
        {
            path:"/about-dev",
            element: <AboutDev></AboutDev>,
        },
        {
            path:"/all-brands",
            element:<AllBrands></AllBrands>
        },

        
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
 