
import { useContext, useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Register = () => {

  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [error, setError] = useState({});

  useEffect(() => {
    AOS.init(); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Must be more than 5 characters long" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    console.log({ name, email, photo, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            Navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl font-semibold text-center" data-aos="fade-down" data-aos-duration="1000">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name */}
          <div className="form-control" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}

          {/* Photo URL */}
          <div className="form-control" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
          </div>

          {/* Email */}
          <div className="form-control" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>

          {/* Password */}
          <div className="form-control" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          {/* Register Button */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center font-semibold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          Already have an account?
          <Link className="text-red-500" to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;