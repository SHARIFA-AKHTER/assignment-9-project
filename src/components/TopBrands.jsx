// import React from 'react';
// import Marquee from 'react-fast-marquee';
// import { Link } from 'react-router-dom';
// import TopBrands from './TopBrands';

// const TopBrands = () => {
//     const brands = [
//         { id: 1, name: 'Sailor', logo: 'https://i.ibb.co.com/MsJDXSJ/logo-sailor.png' },
//         { id: 2, name: 'Aarong', logo: 'https://i.ibb.co.com/q1fzwD8/Arong-logo.jpg' },
//         { id: 3, name: ' Anjan’s', logo: 'https://i.ibb.co.com/PmXC9Lg/Anjans-logo.jpg' },
//         { id: 4, name: ' Kay Kraft', logo: 'https://i.ibb.co.com/gPD7wSz/keykraft-logo.png' },
//         { id: 5, name: ' Yellow', logo: 'https://i.ibb.co.com/T13dS7R/yellow-logo.png' },
//         { id: 6, name: 'Infinity Mega Mall', logo: 'https://i.ibb.co.com/7khQQZr/infinity-logo.jpg' },
//     ];

//     return (
//         <div className="my-10">
//             <h2 className="text-2xl font-bold text-center mb-6">Top Brands</h2>
//             <Marquee pauseOnHover={true} speed={50} gradient={false}>
//                 {brands.map((brand) => (
//                     <Link to={brand.route} key={brand.id} className="mx-6">
//                         <img 
//                             src={brand.logo}
//                             alt={brand.name}
//                             className="h-20 w-20 object-contain ml-8
//                             hover:scale-110 transition-transform"
//                         />
//                     </Link>
//                 ))}
//             </Marquee>
//         </div>
//     );
// };

// export default TopBrands;

import React from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';

const brands = [
       { id: 1, name: 'Sailor', logo: 'https://i.ibb.co.com/MsJDXSJ/logo-sailor.png' },
       { id: 2, name: 'Aarong', logo: 'https://i.ibb.co.com/q1fzwD8/Arong-logo.jpg' },
       { id: 3, name: ' Anjan’s', logo: 'https://i.ibb.co.com/PmXC9Lg/Anjans-logo.jpg' },
       { id: 4, name: ' Kay Kraft', logo: 'https://i.ibb.co.com/gPD7wSz/keykraft-logo.png' },
       { id: 5, name: ' Yellow', logo: 'https://i.ibb.co.com/T13dS7R/yellow-logo.png' },
       { id: 6, name: 'Infinity Mega Mall', logo: 'https://i.ibb.co.com/7khQQZr/infinity-logo.jpg' },
   
];

const TopBrands = () => {
    const navigate = useNavigate();

    const handleClick = (brandId) => {
        navigate(`/brand/${brandId}`);
    };

    return (
        <div className="my-8">
            <h2 className="text-2xl font-bold text-center mb-4">Top Brands</h2>
            <Marquee pauseOnHover speed={60}>
                {brands.map((brand) => (
                    <img
                        key={brand.id}
                        src={brand.logo}
                        alt={brand.name}
                        className="h-20 mx-4 cursor-pointer"
                        onClick={() => handleClick(brand.id)}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default TopBrands;

