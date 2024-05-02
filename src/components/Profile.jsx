import React, { useState } from 'react';
import { useAuth } from '../contexts/authContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser.displayName || '');
  const [email, setEmail] = useState(currentUser.email || '');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // Update user profile
    try {
      await currentUser.updateProfile({
        displayName,
      });
      // Reload user to get updated info
      await currentUser.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="flex flex-col items-center pt-14">
      <h1 className="text-2xl font-bold">Profile</h1>
      <form className="mt-4 w-96" onSubmit={handleUpdateProfile}>
        <label className="block mb-2">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
