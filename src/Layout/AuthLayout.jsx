
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ForgotPassword from '../Pages/ForgotPassword';
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