
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';

const brands = [
    { id: 1, name: 'Sailor', logo: 'https://i.ibb.co/MsJDXSJ/logo-sailor.png' },
    { id: 2, name: 'Aarong', logo: 'https://i.ibb.co/q1fzwD8/Arong-logo.jpg' },
    { id: 3, name: "Anjan’s", logo: 'https://i.ibb.co/PmXC9Lg/Anjans-logo.jpg' },
    { id: 4, name: 'Kay Kraft', logo: 'https://i.ibb.co/gPD7wSz/keykraft-logo.png' },
    { id: 5, name: 'Yellow', logo: 'https://i.ibb.co/T13dS7R/yellow-logo.png' },
    { id: 6, name: 'Infinity Mega Mall', logo: 'https://i.ibb.co/7khQQZr/infinity-logo.jpg' },
];

const TopBrands = () => {
    const navigate = useNavigate();

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
                        key={brand.id}
                        className="flex-shrink-0 mx-4 cursor-pointer hover:scale-110 transition-transform duration-300"
                        onClick={() => handleClick(brand.id)}
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-16 md:h-20 lg:h-24 w-auto"
                        />
                        <p className="text-center mt-2 text-sm md:text-base lg:text-lg">
                            {brand.name}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TopBrands;