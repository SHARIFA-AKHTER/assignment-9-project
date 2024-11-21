
import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CouponPage = () => {
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandDetails = async () => {
      try {
        const response = await fetch('/coupons.json'); // Adjusted path
        const data = await response.json();
        setBrand(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandDetails();
  }, []);

  const handleCopy = () => {
    toast.success('Coupon code copied successfully!');
  };

  if (loading) return <div>Loading...</div>;
  if (!brand) return <div>Error: Failed to load brand details.</div>;

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />

      {/* Brand Details */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-16 h-16 object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{brand.brand_name}</h1>
          <p className="text-yellow-500 font-semibold">
            Rating: {brand.rating} ★
          </p>
          <p>{brand.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.coupons.map((coupon) => (
          <div
            key={coupon.coupon_code}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-xl">{coupon.coupon_type}</h2>
            <p className="text-gray-600">{coupon.description}</p>
            <p className="text-sm text-gray-500">Expires on: {coupon.expiry_date}</p>
            <p className="text-sm text-gray-500">{coupon.condition}</p>

            <div className="mt-4 flex gap-4">
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Copy Code
                </button>
              </CopyToClipboard>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => window.open(brand.shop_link, '_blank')}
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;