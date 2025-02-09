
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AllBrands = () => {
//   const [brands, setBrands] = useState([]);
//   const navigate = useNavigate();

//   // Fake API Data Load
//   useEffect(() => {
//     fetch('/cupons.json') 
//       .then((res) => res.json())
//       .then((data) => setBrands(data));
//   }, []);

//   // Check if user is logged in
//   const isLoggedIn = localStorage.getItem('user');

//   // Handle coupon button click
//   const handleCouponClick = (brandId) => {
//     if (isLoggedIn) {
//       navigate(`/brands/${brandId}`); 
//     } else {
//       navigate("/login"); 
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-6">All Brands</h2>

//       {/* Brands List - Responsive Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {brands.map((brand) => (
//           <div
//             key={brand._id}
//             className="bg-white shadow-md rounded-xl p-5 border flex flex-col items-center text-center"
//           >
//             {/* Brand Logo */}
//             <img
//               src={brand.brand_logo}
//               alt={brand.brand_name}
//               className="w-20 h-20 mb-3 object-contain"
//             />
//             <h3 className="text-xl font-semibold">{brand.brand_name}</h3>
//             <p className="text-gray-600 text-sm">{brand.description}</p>

//             {/* Rating with Star */}
//             <div className="flex items-center mt-2 text-yellow-500">
//               ⭐ {brand.rating}
//             </div>

//             {/* View Coupons Button */}
//             <button
//               onClick={() => handleCouponClick(brand._id)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3"
//             >
//               View Coupons
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllBrands;
import React from 'react';

const AllBrands = () => {
    return (
        <div>
            
        </div>
    );
};

export default AllBrands;

