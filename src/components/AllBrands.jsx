
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import brandsData from "./brandData";

const AllBrands = ({ isLoggedIn }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredBrands = brandsData.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewCoupons = (brandId) => {
        if (isLoggedIn) {
            navigate(`/brand/${brandId}`);
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-3xl font-bold text-center mb-8">All Brands</h1>

            <div className="mb-8 ">
                <input
                    type="text"
                    placeholder="Search for brands..."
                    className="w-full p-3 border border-gray-300
                     rounded-lg shadow-sm focus:outline-none 
                     focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Brands List */}
            <div className="grid grid-cols-1 sm:grid-cols-2
             lg:grid-cols-3 gap-6 ">
                {filteredBrands.map((brand) => (
                    <div
                        key={brand.id}
                        className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 transition-transform duration-300 hover:scale-105"
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

                   
                        <div className="flex flex-col items-center">
                           
                            {brand.isSaleOn && (
                                <p className="text-red-500 
                                animate-bounce mb-2">Sale is On!</p>
                            )}
                            <button
                                onClick={() => handleViewCoupons(brand.id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
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