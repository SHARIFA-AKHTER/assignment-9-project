
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrandDetails = () => {
    const { brandId } = useParams();
    const [brand, setBrand] = useState(null);
    const [copied, setCopied] = useState("");

    useEffect(() => {
        fetch("/cupons.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedBrand = data.find((b) => b._id === brandId);
                setBrand(selectedBrand);
            })
            .catch((err) => console.error("Failed to fetch data:", err));
    }, [brandId]);

    if (!brand) {
        return <p className="text-center">🔄 Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">{brand.brand_name}</h2>

            <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-32 h-32 mx-auto mb-4"
            />

            <p className="text-gray-600 text-center">{brand.description}</p>

            <h3 className="text-2xl font-semibold mt-6">🔥 Coupons</h3>
            <div className="grid grid-cols-1 gap-4 mt-4">
                {brand.coupons.map((coupon, index) => (
                    <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                        <h4 className="text-lg font-bold">{coupon["coupon-code"]}</h4>
                        <p className="text-gray-600">{coupon.description}</p>
                        <p className="text-gray-600 text-lg mt-1">⭐ {brand.rating}</p>
                        <p className="text-red-500">🛑 Deadline: {coupon["expiry-date"]}</p>

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
                        <Link to={brand["shop-Link"]} target="_blank" rel="noopener noreferrer">
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

export default BrandDetails;

