
import { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Update user state after saving changes
  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Cover Section */}
      <div className="relative bg-blue-600 text-white py-10 rounded-xl text-center shadow-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Welcome, {user.name || "User"}! 🎉</h1>
      </div>

      {/* User Info Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-6 flex flex-col items-center w-full max-w-lg mx-auto">
        <img
          src={user.photoURL || "https://via.placeholder.com/100"}
          alt="User"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500"
        />
        <h2 className="text-lg sm:text-xl font-semibold mt-3">{user.name || "N/A"}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{user.email || "sr0589071@gmail.com"}</p>

        {/* Update Profile Button */}
        <button 
          onClick={() => setIsEditing(true)} 
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg mt-4"
        >
          Update Profile
        </button>
      </div>

      {/* Update Profile Modal */}
      {isEditing && <UpdateProfile onClose={() => setIsEditing(false)} onUpdate={handleUpdate} />}
    </div>
  );
};

export default MyProfile;