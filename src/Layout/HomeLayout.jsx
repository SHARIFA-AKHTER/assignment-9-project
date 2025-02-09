import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const HomeLayout = () => {
  return (
    <div className='font-semibold w-full min-h-screen flex flex-col'>
      <header>
        <Header></Header>
      </header>
      <main className='flex-grow'>
      <Outlet></Outlet>
      </main>
      <div className='  mt-10'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;