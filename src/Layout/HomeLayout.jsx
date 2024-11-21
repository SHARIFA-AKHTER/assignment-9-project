import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import TopBrands from '../components/TopBrands';
import BrandOnSale from '../components/BrandOnSale';
import AllBrands from '../components/AllBrands';
import CouponPage from '../components/CouponPage';
import MyProfile from '../components/MyProfile';
import EditProfile from '../components/EditProfile';



const HomeLayout = () => {
    return (
        <div className='font-semibold w-11/12 mx-auto'>
          <header>
            <Header></Header>
          </header>
          <main>
          <Banner></Banner>
          <TopBrands></TopBrands> 
          <BrandOnSale></BrandOnSale> 

            <AllBrands></AllBrands>
         <CouponPage></CouponPage>
            <MyProfile></MyProfile>
            <EditProfile></EditProfile>
        
          </main>

          <Outlet></Outlet>
         <div className=' mx-auto  mt-10'>
         <Footer></Footer>
         </div>
        </div>
    );
};

export default HomeLayout;