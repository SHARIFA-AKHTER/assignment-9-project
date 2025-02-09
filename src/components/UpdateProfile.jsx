import { useState, useEffect } from "react";

const UpdateProfile = ({ onClose, onUpdate }) => {
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState("");

  useEffect(() => {
    // Load current user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setNewName(storedUser.name || "");
      setNewPhoto(storedUser.photoURL || "");
    }
  }, []);

  // Handle Save Button Click
  const handleSave = () => {
    if (!newName || !newPhoto) {
      alert("Please enter both Name and Photo URL!");
      return;
    }

    const updatedUser = { name: newName, photoURL: newPhoto };
    localStorage.setItem("user", JSON.stringify(updatedUser)); 
    onUpdate(updatedUser); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Update Profile</h2>

        {/* Name Input */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        {/* Photo URL Input */}
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter New Photo URL"
          value={newPhoto}
          onChange={(e) => setNewPhoto(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
          <button 
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition text-white px-5 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
          <button 
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;