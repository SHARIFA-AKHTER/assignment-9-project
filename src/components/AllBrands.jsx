

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import brandsData from "./brandData";
const AllBrands = ({ isLoggedIn }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Filter brands based on search input
    const filteredBrands = brandsData.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle View Coupons button click
    const handleViewCoupons = (brandId) => {
        if (isLoggedIn) {
            navigate(`/brand/${brandId}`);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="container mx-auto px-4">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-center my-6">All Brands</h1>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for brands..."
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Brands List */}
            <div className="grid grid-cols-1 sm:grid-cols-2
             lg:grid-cols-3 gap-6">
                {filteredBrands.map((brand) => (
                    <div
                        key={brand.id}
                        className="bg-white shadow-lg 
                      p-4 flex flex-col md:flex-row 
                        items-center gap-4"
                    >
                        {/* Brand Logo */}
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-20 w-20 object-contain"
                        />

                        {/* Brand Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <FaStar className="text-yellow-500" />
                                <h2 className="text-xl font-semibold">{brand.name}</h2>
                            </div>
                            <p className="text-gray-600">{brand.description}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col items-center">
                            {/* Bouncing "Sale is On" Text */}
                            {brand.isSaleOn && (
                                <p className="text-red-500 animate-bounce mb-2">Sale is On!</p>
                            )}
                            <button
                                onClick={() => handleViewCoupons(brand.id)}
                                className="btn btn-primary"
                            >
                                View Coupons
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBrands;