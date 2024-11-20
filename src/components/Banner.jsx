
// import React, { useState, useEffect } from 'react';
// import BannerImages from '../assets/Sailor _ Sailing Life.png';
// import BannerImagesTwo from '../assets/banner-2.jpg';
// import BannerImagesThree from '../assets/picture22.png';

// const Banner = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const slides = [BannerImages, BannerImagesTwo, BannerImagesThree];

//     // Auto slide effect
//     useEffect(() => {
//         const slideInterval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//         }, 5000); // Change slide every 5 seconds
//         return () => clearInterval(slideInterval);
//     }, [slides.length]);

//     // Function to handle manual slide navigation
//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     return (
//         <div className="w-full h-auto relative">

//             {/* Carousel Section */}
//             <div className="carousel w-full">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`carousel-item relative w-full
//                              ${index === currentSlide ? 'block' : 'hidden'}`}
//                     >
//                         <img
//                             src={slide}
//                             className="w-full h-[300px] md:h-[500px] 
//                             lg:h-[600px] object-cover"
//                             alt={`Slide ${index + 1}`}
//                         />
//                         <div className="absolute left-5 
//                         right-5 top-1/2 flex -translate-y-1/2
//                          transform justify-between">
//                             <button
//                                 className="btn btn-circle"
//                                 onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
//                             >
//                                 ❮
//                             </button>
//                             <button
//                                 className="btn btn-circle"
//                                 onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//                             >
//                                 ❯
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Cards Section Inside Banner */}
//             {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-16">
                
//                 <div className="bg-white shadow-lg rounded-lg p-4">
//                     <h2 className="text-lg font-bold mb-2">Home</h2>
//                     <p className="text-gray-600 mb-2">This is the Home card content.</p>
//                     <button className="btn btn-primary w-full">Explore Home</button>
//                 </div>

            
//                 <div className="bg-white shadow-lg rounded-lg p-4">
//                     <h2 className="text-lg font-bold mb-2">Coupon Code /005</h2>
//                     <p className="text-gray-600 mb-2">Get a special coupon now!</p>
//                     <button className="btn btn-primary w-full">Get Coupon</button>
//                 </div>

               
//                 <div className="bg-white shadow-lg rounded-lg p-4">
//                     <h2 className="text-lg font-bold mb-2">Discount 50%</h2>
//                     <p className="text-gray-600 mb-2">Check out the latest discounts!</p>
//                     <button className="btn btn-primary w-full">View Discounts</button>
//                 </div>
//             </div>

      
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-center gap-4">
//                 <button className="btn w-full md:w-[165px] bg-gray-600 text-white rounded-full">Learn More</button>
//                 <button className="btn w-full md:w-[165px] bg-blue-600 text-white rounded-full">Shop Now</button>
//             </div> */}
//         </div>
//     );
// };

// export default Banner;

import React, { useState, useEffect } from 'react';
import BannerImages from '../assets/Sailor _ Sailing Life.png';
import BannerImagesTwo from '../assets/banner-2.jpg';
import BannerImagesThree from '../assets/picture22.png';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [BannerImages, BannerImagesTwo, BannerImagesThree];

    // Auto slide effect
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