// import React, { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";

// const Brands = () => {
//     const brands = useLoaderData(); // Load brand data
//     const [searchTerm, setSearchTerm] = useState("");
//     const navigate = useNavigate();

//     // Filter brands based on the search input
//     const filteredBrands = brands.filter((brand) =>
//         brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Handle 'View Coupons' button click
//     const handleViewCoupons = (id) => {
//         const userLoggedIn = localStorage.getItem("user");
//         if (userLoggedIn) {
//             navigate(`/brand/${id}/details`);
//         } else {
//             navigate("/login");
//         }
//     };

//     return (
//         <div className="p-4">
//             {/* Page Title */}
//             <h1 className="text-3xl font-bold mb-4">All Brands</h1>

//             {/* Search Bar */}
//             <input
//                 type="text"
//                 placeholder="Search Brands..."
//                 className="p-2 mb-4 border border-gray-300 rounded w-full"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />

//             {/* Responsive Card Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-1 
//              md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filteredBrands.map((brand) => (
//                     <div
//                         key={brand._id}
//                         className="flex items-center p-4 border card bg-base-100  shadow-xl
//                          border-gray-200 rounded-lg w-96"
//                     >
//                         {/* Brand Logo */}
//                         <img
//                             src={brand.brand_logo}
//                             alt={brand.brand_name}
//                             className="w-16 h-16 object-contain mr-4"
//                         />

//                         {/* Brand Information */}
//                         <div className="flex-1">
//                             <h2 className="text-xl font-semibold flex items-center">
//                                 {brand.brand_name}
//                                 <span className="ml-2 text-yellow-500">⭐ {brand.rating}</span>
//                             </h2>
//                             <p className="text-gray-600">{brand.description}</p>
//                         </div>

//                         {/* View Coupons Button */}
//                         <button
//                             className="ml-auto p-2 bg-blue-500 text-white
//                              rounded hover:bg-blue-600"
//                             onClick={() => handleViewCoupons(brand._id)}
//                         >
//                             View Coupons
//                         </button>

//                         {/* Bouncing Sale Text */}
//                         {brand.isSaleOn && (
//                             <p className="text-red-500 font-bold animate-bounce ml-4">
//                                 Sale is on!
//                             </p>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Brands;
import React from 'react';

const Brands = () => {
    return (
        <div>
            
        </div>
    );
};

export default Brands;


