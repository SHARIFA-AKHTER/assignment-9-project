
const brandsData = [
    { id: 1, name: 'Sailor', logo: 'https://i.ibb.co.com/MsJDXSJ/logo-sailor.png', totalCoupons: 5, category: 'Fashion', isSaleOn: true },
    { id: 2, name: 'Aarong', logo: 'https://i.ibb.co.com/q1fzwD8/Arong-logo.jpg', totalCoupons: 3, category: 'Electronics', isSaleOn: true},
    { id: 3, name: 'Anjan’s', logo: 'https://i.ibb.co.com/PmXC9Lg/Anjans-logo.jpg', totalCoupons: 10, category: 'Home', isSaleOn: true },
    { id: 4, name: 'Kay Kraft', logo: 'https://i.ibb.co.com/gPD7wSz/keykraft-logo.png', totalCoupons: 10, category: 'Books', isSaleOn: true },
    { id: 5, name: 'Yellow', logo: 'https://i.ibb.co.com/T13dS7R/yellow-logo.png', totalCoupons: 10, category: 'Fitness', isSaleOn: true },
    { id: 6, name: 'Infinity Mega Mall', logo: 'https://i.ibb.co.com/7khQQZr/infinity-logo.jpg', totalCoupons: 10, category: 'Beauty', isSaleOn: true},
];

const BrandsOnSale = () => {
    const brandsOnSale = brandsData.filter((brand) => brand.isSaleOn);

    return (
        <div className="my-8">
            <h2 className="text-2xl font-bold text-center mb-4">Brands on Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandsOnSale.map((brand) => (
                    <div key={brand.id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={brand.logo} alt={brand.name} className="h-20 mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-2">{brand.name}</h3>
                        <p className="text-gray-600">Total Coupons: {brand.totalCoupons}</p>
                        <p className="text-gray-600">Category: {brand.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsOnSale;