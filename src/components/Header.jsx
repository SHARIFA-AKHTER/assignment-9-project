

import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-4 px-6 md:px-10 flex justify-between items-center fixed top-0 w-full z-50">
            {/* Logo */}
            <div className="flex items-center  gap-4 ">
                <Link to="/" className="text-2xl font-bold flex items-center ">
                <FaShoppingBag className="h-10 w-10 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-10 mr-1
                 lg:w-10 text-green-500 transition-transform duration-300 hover:scale-110" />
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
                                className="bg-blue-500/30 backdrop-blur-md text-white text-sm md:text-base px-5 py-2 w-full md:w-auto text-center rounded-lg border border-blue-300
                                 hover:bg-blue-500/50 hover:border-blue-400 transition-all duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="bg-green-500/30 backdrop-blur-md text-white text-sm md:text-base px-5 py-2 w-full md:w-auto text-center rounded-lg border border-green-300
                                 hover:bg-green-500/50 hover:border-green-400 transition-all duration-300"
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