

import React, { useState } from 'react';

const MyProfile = () => {
    const [user, setUser] = useState({
        name: 'Samiha',
        email: 'samiha@example.com',
        picture: 'https://i.ibb.co/NnxcbvH/Samiha-11.jpg',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({ ...user });
    const [error, setError] = useState('');

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setUpdatedUser({ ...user });
        setError('');
    };

    const handleSave = () => {
        if (!updatedUser.name || !updatedUser.email || !updatedUser.picture) {
            setError('All fields are required!');
            return;
        }
        setUser({ ...updatedUser });
        setIsEditing(false);
        setError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center py-8 px-4 md:px-8">
      
            <div className="w-full bg-blue-600 text-white py-8 rounded-lg text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">Welcome, {user.name}!</h1>
            </div>

          
            <div className="bg-white shadow-lg rounded-lg p-6  w-full">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src={user.picture}
                        alt={user.name}
                        className="w-32 h-32 rounded-full shadow-lg"
                    />
                    {!isEditing ? (
                        <>
                            <h2 className="text-xl font-bold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={handleEdit}
                            >
                                Edit Profile
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="w-full">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={updatedUser.name}
                                    onChange={handleChange}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={updatedUser.email}
                                    onChange={handleChange}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-gray-700">Profile Picture URL</label>
                                <input
                                    type="text"
                                    name="picture"
                                    value={updatedUser.picture}
                                    onChange={handleChange}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;