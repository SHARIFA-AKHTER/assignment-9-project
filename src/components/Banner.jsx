
import React, { useState, useEffect } from 'react';
import BannerImages from '../assets/Sailor _ Sailing Life.png';
import BannerImagesTwo from '../assets/banner-2.jpg';
import BannerImagesThree from '../assets/picture22.png';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [BannerImages, BannerImagesTwo, BannerImagesThree];

 
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="w-full h-auto relative">
            <div className="carousel w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item w-full ${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <img
                            src={slide}
                            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;