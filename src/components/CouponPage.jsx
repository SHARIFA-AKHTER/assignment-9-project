

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyToClipboard from "react-copy-to-clipboard";

const CouponPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [brand, setBrand] = useState(null);
    const [copied, setCopied] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            navigate("/login");
        }

        fetch("/cupons.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedBrand = data.find((b) => b._id === id);
                setBrand(selectedBrand);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id, navigate]);

    if (!brand) {
        return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-10">
            {/* Brand Header */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-6 mb-6">
                <img src={brand.brand_logo} alt={brand.brand_name} className="w-24 h-24 object-contain mb-4 md:mb-0" />
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold">{brand.brand_name} Coupons</h2>
                    <p className="text-gray-600 text-lg mt-1">⭐ {brand.rating}</p>
                </div>
            </div>

            {/* Coupon Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brand.coupons.map((coupon, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-5 border">
                        <h3 className="text-xl font-semibold">{coupon["coupon-code"]}</h3>
                        <p className="text-gray-600 mt-2">{coupon.description}</p>
                        <p className="text-red-500 mt-1">Expires: {coupon["expiry-date"]}</p>

                        {/* Copy Code Button */}
                        <CopyToClipboard
                            text={coupon["coupon-code"]}
                            onCopy={() => {
                                setCopied(coupon["coupon-code"]);
                                toast.success("Coupon Code Copied!", { autoClose: 2000 });
                            }}
                        >
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-3 w-full">
                                {copied === coupon["coupon-code"] ? "Copied!" : "Copy Code"}
                            </button>
                        </CopyToClipboard>

                        {/* Use Now Button */}
                        <Link to={brand["shop-Link"]}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 w-full">
                                Use Now
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-center" />
        </div>
    );
};

export default CouponPage;