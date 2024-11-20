
const brandsData = [
    { id: 1, name: 'Sailor', logo: 'https://i.ibb.co/MsJDXSJ/logo-sailor.png', totalCoupons: 5, category: 'Fashion', isSaleOn: true },
    { id: 2, name: 'Aarong', logo: 'https://i.ibb.co/q1fzwD8/Arong-logo.jpg', totalCoupons: 3, category: 'Electronics', isSaleOn: true },
    { id: 3, name: "Anjan’s", logo: 'https://i.ibb.co/PmXC9Lg/Anjans-logo.jpg', totalCoupons: 10, category: 'Home', isSaleOn: true },
    { id: 4, name: 'Kay Kraft', logo: 'https://i.ibb.co/gPD7wSz/keykraft-logo.png', totalCoupons: 10, category: 'Books', isSaleOn: true },
    { id: 5, name: 'Yellow', logo: 'https://i.ibb.co/T13dS7R/yellow-logo.png', totalCoupons: 10, category: 'Fitness', isSaleOn: true },
    { id: 6, name: 'Infinity Mega Mall', logo: 'https://i.ibb.co/7khQQZr/infinity-logo.jpg', totalCoupons: 10, category: 'Beauty', isSaleOn: true },
];

const BrandsOnSale = () => {
    const brandsOnSale = brandsData.filter((brand) => brand.isSaleOn);

    return (
        <div className="my-8 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Brands on Sale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandsOnSale.map((brand) => (
                    <div
                        key={brand.id}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-20 w-auto mb-4"
                        />
                        <h3 className="text-lg font-bold mb-2">{brand.name}</h3>
                        <p className="text-gray-600 mb-1">Total Coupons: {brand.totalCoupons}</p>
                        <p className="text-gray-600">Category: {brand.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsOnSale;