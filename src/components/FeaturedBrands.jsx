import React, { useState, useEffect } from 'react';

const FeaturedBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('/cupons.json')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  if (brands.length === 0) {
    return <div className="text-center text-lg font-semibold mt-10">Loading...</div>;
  }

  return (
    <section className="featured-brands my-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brands.slice(0, 3).map((brand) => (
          <div key={brand.id} className="brand-card p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-full h-32 object-contain mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">{brand.brand_name}</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">{brand.description}</p>
            <div className="flex justify-between items-center mt-4 text-gray-700 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-lg">⭐ {brand.rating}</span>
              <span className="text-gray-500">{brand.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;