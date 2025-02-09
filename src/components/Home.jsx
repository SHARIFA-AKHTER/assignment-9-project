
import Banner from '../components/Banner';
import TopBrands from '../components/TopBrands';
import BrandOnSale from './BrandOnSale';
import Brands from './Brands';
import FeaturedBrands from './FeaturedBrands';
import NewArrivals from './NewArrivals';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopBrands></TopBrands>
            <BrandOnSale></BrandOnSale>
            <FeaturedBrands></FeaturedBrands>
            <NewArrivals></NewArrivals>

            <Brands limit={6} /> 
        </div>
    );
};

export default Home;