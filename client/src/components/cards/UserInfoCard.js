import React, { useState, useRef } from 'react';
import { Settings, X, Upload, User } from 'lucide-react';

// UserInfoCard component displays user profile information
const UserInfoCard = () => {
  // State for modal visibility and profile image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setIsModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {/* Card container with dark blue background and rounded corners */}
      <div className="overflow-hidden rounded-lg bg-[#002b4d] shadow-md">
        {/* Card content with padding */}
        <div className="relative p-6">
          {/* Settings icon positioned in the top right corner */}
          <button
            className="absolute right-4 top-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <Settings className="h-5 w-5" />
          </button>

          {/* User profile information with horizontal layout */}
          <div className="flex items-center">
            {/* Circular profile image with white border */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>

            {/* User name and status with left margin for spacing */}
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-white">Khenfer Hicham</h2>
              <p className="text-sm text-gray-300">student at emadrassati school</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          {/* Modal Content */}
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl animate-scaleIn">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-[#002b4d]">Update Profile Picture</h3>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full p-1 hover:bg-gray-200">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-dashed border-gray-300">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Selected profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100">
                    <User className="h-16 w-16 text-gray-400" />
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  onClick={handleUploadClick}
                  className="inline-flex items-center rounded-md bg-[#002b4d] px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                <p className="mt-2 text-xs text-gray-500">Supported formats: JPG, PNG, GIF</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfoCard;