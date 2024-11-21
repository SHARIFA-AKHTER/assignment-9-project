import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import CouponPage from '../components/CouponPage';
import MyProfile from '../components/MyProfile';
import EditProfile from '../components/EditProfile';

const AuthLayout = () => {
    return (
        <div className='bg-gray-200'>
           <Header>

           </Header>
            <Outlet></Outlet>
          
        
        </div>
    );
};

export default AuthLayout;