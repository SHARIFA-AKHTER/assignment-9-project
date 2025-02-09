
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BrandOnSale = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  // Fake API Data Load
  useEffect(() => {
    fetch('/cupons.json') 
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  // Filter brands where isSaleOn is true
  const brandsOnSale = brands.filter(brand => brand.isSaleOn);

  // Handle coupon button click
  const handleCouponClick = (brandId) => {
    const isLoggedIn = localStorage.getItem("user");
    if (isLoggedIn) {
      navigate(`/brands/${brandId}`); 
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Brands on Sale</h2>

      {/* Brands List - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandsOnSale.length > 0 ? (
          brandsOnSale.map((brand) => (
            <div
              key={brand._id}
              className="bg-white shadow-md rounded-xl p-5 border flex flex-col items-center text-center"
            >
              {/* Brand Logo */}
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-20 h-20 mb-3 object-contain"
              />
              <h3 className="text-xl font-semibold">{brand.brand_name}</h3>
              <p className="text-gray-600 text-sm">{brand.description}</p>

              {/* Rating with Star */}
              <div className="flex items-center mt-2 text-yellow-500">
                ⭐ {brand.rating}
              </div>

              {/* Sale Text */}
              <p className="text-red-500 animate-bounce text-sm font-semibold mt-2">
                Sale is on!
              </p>

            </div>
          ))
        ) : (
          <p>No brands on sale currently!</p>
        )}
      </div>
    </div>
  );
};

export default BrandOnSale;
