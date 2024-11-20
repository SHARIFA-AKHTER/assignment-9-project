import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

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