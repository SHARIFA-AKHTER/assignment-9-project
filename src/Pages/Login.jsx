
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider"; 
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, signInWithGoogle, setUser, loading } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
        const result =  userLogin(email, password);
        setUser(result.user);
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
    
        navigate(location?.state?.from || "/");
      } catch (err) {
        setError((prev) => ({ ...prev, login: err.message }));
        Swal.fire({
          title: "Login Failed!",
          text: err.message,
          icon: "error",
        });
      }
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Login Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            {error.login && <label className="label text-sm text-red-600">{error.login}</label>}
          </div>
          <div className="form-control mt-6">
            <button disabled={loading} className="btn btn-neutral rounded-none">
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center font-semibold">
          Don't Have An Account? <Link className="text-red-500" to="/auth/register">Register</Link>
        </div>
        <div className="text-center mt-4">
          <button onClick={handleGoogleLogin} className="btn btn-primary w-full">Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;