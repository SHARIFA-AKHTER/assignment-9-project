import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import TopBrands from '../components/TopBrands';
import BrandOnSale from '../components/BrandOnSale';
import AllBrands from '../components/AllBrands';
import Register from '../Pages/Register';



const HomeLayout = () => {
    return (
        <div className='font'>
          <header>
            <Header></Header>
          </header>
          <main>
          <Banner></Banner>
          <TopBrands></TopBrands> 
          <BrandOnSale></BrandOnSale> 
            <AllBrands></AllBrands>
            {/* <Register></Register> */}
          </main>

          <Outlet></Outlet>
         <div className='w-[80%] mx-auto max-w-[1400px] mt-96'>
         <Footer></Footer>
         </div>
        </div>
    );
};

export default HomeLayout;