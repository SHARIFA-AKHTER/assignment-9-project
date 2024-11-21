
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
      
        if (email === 'user@example.com' && password === 'Password123') {
            navigate('/');
        } else {
            setError('Invalid email or password.');
        }
    };

    const handleGoogleLogin = () => {
       
        navigate('/'); 
    };

    return (
        <div className="mt-20 flex justify-center items-center">
            <div className="card w-full max-w-lg bg-base-100 shadow-xl p-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Login to Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control mb-4">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Link to="#" className="text-blue-500 text-sm mt-1">Forgot password?</Link>
                    </div>
                    {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                    <button type="submit" className="btn btn-primary mt-4 w-full">Login</button>
                    <button
                        type="button"
                        className="btn btn-outline mt-2 w-full"
                        onClick={handleGoogleLogin}
                    >
                        Login with Google
                    </button>
                    <p className="text-center mt-4">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-blue-500">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

