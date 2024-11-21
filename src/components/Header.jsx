
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        name: 'Samiha',
        email: 'samiha@example.com',
        picture: 'https://i.ibb.co/NnxcbvH/Samiha-11.jpg',
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);  // Optional: Reset user state to null
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <header className="bg-gray-800 text-white
         py-4 px-4 md:px-8 flex justify-between items-center">
            {/* Logo */}
            <div>
                <Link to="/" className="text-2xl font-bold">
                    DISCOUNT PRO
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white"
                onClick={toggleMenu}
            >
                ☰
            </button>
        
            {/* Navigation */}
            <nav
                className={`${isMenuOpen ? "block" : "hidden"} 
                    md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 z-50`}
            >
                <Link to="/" className="flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                    <span>🏠</span>
                    <span>Home</span>
                </Link>
                <Link to="/brands" className="flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                    <span>📱</span>
                    <span>Brands</span>
                </Link>
                {isLoggedIn && (
                    <Link to="/my-profile" className="flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                        <span>👤</span>
                        <span>My Profile</span>
                    </Link>
                )}
                <Link to="/about-dev" className="flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                    <span>ℹ️</span>
                    <span>About Dev</span>
                </Link>
            </nav>
        
            {/* Authentication Section */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">
                {isLoggedIn ? (
                    <div className="flex items-center space-x-3">
                        <span className="hidden md:block">Welcome, {user?.name}!</span>
                        <img src={user?.picture} alt="User" className="w-10 h-10 rounded-full" />
                        <span className="hidden md:block">{user?.email}</span>
                        <button
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <>
                        <Link
                            to="/auth/login"
                            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto text-center"
                        >
                            Login
                        </Link>
                        <Link
                            to="/auth/register"
                            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto text-center"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;