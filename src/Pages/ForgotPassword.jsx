import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || ''); 

    const handleResetPassword = () => {
    
        window.open('https://mail.google.com', '_blank');
        navigate('/auth/login'); 
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card w-full max-w-lg bg-base-100 shadow-xl p-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Reset Your Password</h2>
                <form>
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
                    <button
                        type="button"
                        onClick={handleResetPassword}
                        className="btn btn-primary mt-4 w-full"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;