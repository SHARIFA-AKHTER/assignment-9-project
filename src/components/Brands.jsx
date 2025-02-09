import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Brands = ({ limit }) => {   // limit props add korlam
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/cupons.json") 
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  const brandsToShow = limit ? filteredBrands.slice(0, limit) : filteredBrands; 

  const isLoggedIn = localStorage.getItem("user");

  const handleCouponClick = (brandId) => {
    if (isLoggedIn) {
      navigate(`/brand/${brandId}`); 
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">All Brands</h2>

      <input
        type="text"
        placeholder="Search Brands..."
        className="w-full p-2 mb-6 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandsToShow.map((brand) => (
          <div
            key={brand._id}
            className="bg-white shadow-md rounded-xl p-5 border flex flex-col items-center text-center"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-20 h-20 mb-3 object-contain"
            />
            <h3 className="text-xl font-semibold">{brand.brand_name}</h3>
            <p className="text-gray-600 text-sm">{brand.description}</p>
            <div className="flex items-center mt-2 text-yellow-500">⭐ {brand.rating}</div>

            {brand.isSaleOn && (
              <p className="text-red-500 animate-bounce text-sm font-semibold mt-2">
                Sale is on!
              </p>
            )}

            <button
              onClick={() => handleCouponClick(brand._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3"
            >
              View Coupons
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Brands = () => {
//     const [brands, setBrands] = useState([]);
//     const [search, setSearch] = useState("");
//     const navigate = useNavigate();

//     // Fake API Data Load
//     useEffect(() => {
//         fetch("/cupons.json")
//             .then((res) => res.json())
//             .then((data) => setBrands(data));
//     }, []);

//     // Search Functionality
//     const filteredBrands = brands.filter((brand) =>
//         brand.brand_name.toLowerCase().includes(search.toLowerCase())
//     );

//     // Limit to show only 6 brands
//     const brandsToShow = filteredBrands.slice(0, 6);

//     // Check if user is logged in
//     const isLoggedIn = localStorage.getItem("user");

//     const handleCouponClick = (brandId) => {
//         if (isLoggedIn) {
//             navigate(`/brand/${brandId}`);
//         } else {
//             navigate("/login");
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-4">
//             {/* Page Title */}
//             <h2 className="text-3xl font-bold text-center mb-6">All Brands</h2>

//             {/* Search Bar */}
//             <input
//                 type="text"
//                 placeholder="Search Brands..."
//                 className="w-full p-2 mb-6 border rounded-lg"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />

//             {/* Brands List - Responsive Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {brandsToShow.map((brand) => (
//                     <div
//                         key={brand._id}
//                         className="bg-white shadow-md rounded-xl p-5 border flex flex-col items-center text-center"
//                     >
//                         {/* Brand Logo */}
//                         <img
//                             src={brand.brand_logo}
//                             alt={brand.brand_name}
//                             className="w-20 h-20 mb-3 object-contain"
//                         />

//                         {/* Brand Info */}
//                         <h3 className="text-xl font-semibold">{brand.brand_name}</h3>
//                         <p className="text-gray-600 text-sm">{brand.description}</p>

//                         {/* Rating with Star */}
//                         <div className="flex items-center mt-2 text-yellow-500">
//                             ⭐ {brand.rating}
//                         </div>

//                         {/* Sale Text */}
//                         {brand.isSaleOn && (
//                             <p className="text-red-500 animate-bounce text-sm font-semibold mt-2">
//                                 Sale is on!
//                             </p>
//                         )}
//                         <Link to={`/brand/${brand._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3">
//                             View Coupons
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Brands;