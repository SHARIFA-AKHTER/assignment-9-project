
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();
    const [updatedUser, setUpdatedUser] = useState({
        name: '',
        picture: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        console.log('Updated User:', updatedUser);

 
        localStorage.setItem('user', JSON.stringify(updatedUser));
       
        navigate('/my-profile');
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center py-8 px-4 md:px-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-xl font-bold text-center mb-4">Edit Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedUser.name}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Profile Picture URL
                        </label>
                        <input
                            type="text"
                            name="picture"
                            value={updatedUser.picture}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    {updatedUser.picture && (
                        <div className="mt-4 flex justify-center">
                            <img
                                src={updatedUser.picture}
                                alt="Profile Preview"
                                className="h-24 w-24 rounded-full object-cover"
                            />
                        </div>
                    )}
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full mt-4"
                        onClick={handleUpdate}
                    >
                        Update Information
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
