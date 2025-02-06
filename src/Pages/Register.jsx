
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: 'Joba',
//         email: 'joba@joya.com',
//         photoURL: 'https://thumb.photo-ac.com/f7/f79aafe39f7161ec4c0fad424e2e3d63_t.jpeg',
//         password: 'Ab12@!',
//     });
//     const [passwordError, setPasswordError] = useState('');
//     const [toastMessage, setToastMessage] = useState('');
//     const [showPassword, setShowPassword] = useState(false); 
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));

//         if (name === 'password') {
//             validatePassword(value);
//         }
//     };

//     const validatePassword = (password) => {
//         const errors = [];
//         if (!/[A-Z]/.test(password)) errors.push('Must include an uppercase letter.');
//         if (!/[a-z]/.test(password)) errors.push('Must include a lowercase letter.');
//         if (password.length < 6) errors.push('Must be at least 6 characters long.');

//         setPasswordError(errors.join(' '));
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (passwordError) {
//             setToastMessage('Please fix the password issues before submitting.');
//             return;
//         }

//         if (formData.name && formData.email && formData.password) {
//             setToastMessage('Registration successful!');
//             setTimeout(() => navigate('/'), 1500);
//         } else {
//             setToastMessage('Please fill in all required fields.');
//         }
//     };

//     return (
//         <div className="mt-20 flex justify-center items-center">
//             <div className="card w-full max-w-lg bg-base-100 shadow-xl p-10">
//                 <h2 className="text-2xl font-semibold text-center mb-4">
//                     Register Your Account
//                 </h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-control mb-4">
//                         <label className="label">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Full Name"
//                             className="input input-bordered"
//                             required
//                         />
//                     </div>
//                     <div className="form-control mb-4">
//                         <label className="label">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Email"
//                             className="input input-bordered"
//                             required
//                         />
//                     </div>
//                     <div className="form-control mb-4">
//                         <label className="label">Photo URL</label>
//                         <input
//                             type="url"
//                             name="photoURL"
//                             value={formData.photoURL}
//                             onChange={handleChange}
//                             placeholder="Photo URL"
//                             className="input input-bordered"
//                         />
//                     </div>
//                     <div className="form-control mb-4">
//                         <label className="label">Password</label>
//                         <div className="relative">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 placeholder="Password"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
//                             >
//                                 {showPassword ? '👁️' : '👁'}
//                             </button>
//                         </div>
//                         {passwordError && (
//                             <p className="text-sm text-red-500 mt-1">{passwordError}</p>
//                         )}
//                     </div>
//                     <button type="submit" className="btn btn-primary w-full">
//                         Register
//                     </button>
//                     <button type="button" className="btn btn-outline w-full mt-2">
//                         Register with Google
//                     </button>
//                     <p className="text-center mt-4">
//                         Already have an account?{' '}
//                         <Link to="/auth/login" className="text-blue-500">
//                             Login
//                         </Link>
//                     </p>
//                 </form>
//                 {toastMessage && (
//                     <div className="toast toast-top toast-center">
//                         <div className="alert alert-info">{toastMessage}</div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Register;



import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const { createNewUser, setUser, updateUserProfile} =
   useContext(AuthContext);
   const Navigate = useNavigate()
  const[error, setError] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name")
    if (name.length < 5){
      setError({...error, name: "must be more the 5 character long"})
      return;
    }
    const email = form.get("email")
    const photo = form.get("photo")
    const password = form.get("password")
   
    console.log({name,email,photo,password});

    createNewUser(email,password)
    .then((result) => {
      const user = result.user;
      // setUser(user)
      updateUserProfile({displayName:name, photoURL:photo})
       .then(() => {
         Navigate("/");
      })
       .catch((err)=>{
         console.log(err)
       });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  
  }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 
            rounded-none p-10">
            <h2 className="text-2xl font-semibold text-center">Register your account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        {/* your name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="name" 
          className="input input-bordered" required />
        </div>
        {error.name &&(
           <label className="label text-xs text-red-500">
              {error.name}
         
            </label>
        )}
        <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
        {/* Photo Url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="photo-url" 
          className="input input-bordered" required />
        </div>
           {/* email input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" 
          className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" 
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Allready Have An Account ?
        <Link className="text-red-500" to ="/auth/login"> Login</Link>
    </p>
    </div>
        </div>
    );
};

export default Register;