import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';

const TopBrands = () => {
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/cupons.json')
            .then((response) => response.json())
            .then((data) => {
                setBrands(data);
            })
            .catch((error) => {
                console.error('Error fetching brands:', error);
            });
    }, []);

    const handleClick = (brandId) => {
        navigate(`/brand/${brandId}`);
    };

    return (
        <div className="my-8 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Top Brands
            </h2>
            <Marquee
                pauseOnHover
                speed={60}
                className="flex items-center"
            >
                {brands.map((brand) => (
                    <div
                        key={brand._id}
                        className="flex-shrink-0 mx-4 cursor-pointer transform hover:scale-110 hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                        onClick={() => handleClick(brand._id)}
                    >
                        <img
                            src={brand.brand_logo}
                            alt={brand.brand_name}
                            className="h-16 md:h-20 lg:h-24 w-auto"
                        />
                        <p className="text-center mt-2 text-sm md:text-base lg:text-lg">
                            {brand.brand_name}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TopBrands;