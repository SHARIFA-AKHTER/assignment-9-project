

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const UpdateProfile = () => {
//   const [name, setName] = useState('');
//   const [photo, setPhoto] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Pre-fill form with current user info if available
//     if (location.state && location.state.user) {
//       setName(location.state.user.name);
//       setPhoto(location.state.user.photo);
//     }
//   }, [location.state]);

//   const handleUpdate = () => {
//     // Update user data (this can be done via localStorage, Context API, or an API call)
//     const updatedUser = { name, photo };
//     localStorage.setItem('user', JSON.stringify(updatedUser));
//     // Redirect back to profile page after update
//     navigate('/my-profile');
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update Profile</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <label htmlFor="photo" className="block text-gray-700 font-medium">Photo URL</label>
//             <input
//               id="photo"
//               type="text"
//               value={photo}
//               onChange={(e) => setPhoto(e.target.value)}
//               placeholder="Enter your photo URL"
//               className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               onClick={handleUpdate}
//               className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Update Information
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;
import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
            
        </div>
    );
};

export default UpdateProfile;