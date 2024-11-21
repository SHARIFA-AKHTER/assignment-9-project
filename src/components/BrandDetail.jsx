// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useState} from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BrandDetails = ({ brand, isLoggedIn }) => {
//   const history = useHistory();

//   // Check if the user is logged in
//   if (!isLoggedIn) {
//     return <div className="text-center text-xl">You must be logged in to view this page</div>;
//   }

//   // Toast notification function
//   const notify = () => {
//     toast.success('Coupon code copied!');
//   };

//   const handleUseNow = (brandLink) => {
//     window.open(brandLink, '_blank');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="text-center mb-12">
//         <img src={brand.logo} alt={brand.name} className="mx-auto w-32 h-32 object-cover" />
//         <h2 className="text-3xl font-bold text-gray-800 mt-4">{brand.name}</h2>
//         <div className="text-yellow-500 mt-2">
//           {Array.from({ length: 5 }, (_, index) => (
//             <span key={index} className={index < brand.rating ? 'text-yellow-500' : 'text-gray-300'}>⭐</span>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {brand.coupons.map((coupon, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
//             <p className="text-lg font-semibold text-gray-800 mb-2">{coupon.title}</p>
//             <p className="text-sm text-gray-600 mb-4">{coupon.description}</p>

//             <div className="space-y-4">
//               {/* Copy Code Button */}
//               <CopyToClipboard text={coupon.code} onCopy={notify}>
//                 <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full focus:outline-none hover:bg-green-600 transition">
//                   Copy Code
//                 </button>
//               </CopyToClipboard>

//               {/* Use Now Button */}
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full focus:outline-none hover:bg-blue-600 transition"
//                 onClick={() => handleUseNow(brand.link)}
//               >
//                 Use Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Toast Container for success messages */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default BrandDetails;
import React from 'react';

const BrandDetail = () => {
    return (
        <div>
            
        </div>
    );
};

export default BrandDetail;