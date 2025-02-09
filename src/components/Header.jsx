

import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-4 px-6 md:px-10 flex justify-between items-center fixed top-0 w-full z-50">
            {/* Logo */}
            <div>
                <Link to="/" className="text-2xl font-bold">
                    DISCOUNT PRO
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white text-2xl focus:outline-none mr-4"
                onClick={toggleMenu}
            >
                {isMenuOpen ? "✖" : "☰"}
            </button>

            {/* Navigation */}
            <nav
                className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 z-50 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
                    } md:flex md:items-center md:space-x-6`}
            >
                <Link to="/" className="block md:flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                    <span>🏠</span>
                    <span>Home</span>
                </Link>
                <Link to="/brands" className="block md:flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                    <span>📱</span>
                    <span>Brands</span>
                </Link>
                <Link to="/my-profile" className="block md:flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                    <span>👤</span>
                    <span>My Profile</span>
                </Link>
                {user && (
                    <Link to="/about-dev" className="block md:flex items-center space-x-2 py-2 md:py-0 hover:text-blue-400">
                        <span>ℹ️</span>
                        <span>About Dev</span>
                    </Link>
                )}
            </nav>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
                {user ? (
                    <div className="flex items-center space-x-3">
                        <span className="hidden md:block">Welcome, {user.displayName}!</span>
                        <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
                        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700" onClick={logOut}>
                            Log Out
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                            <Link
                                to="/auth/login"
                                className="bg-blue-600 text-sm md:text-base px-4 py-2 w-full md:w-auto text-center rounded hover:bg-blue-700 transition duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="bg-green-600 text-sm md:text-base px-4 py-2 w-full md:w-auto text-center rounded hover:bg-green-700 transition duration-300"
                            >
                                Register
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;