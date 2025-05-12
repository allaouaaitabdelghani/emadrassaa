import React from "react";

// WelcomeCard component displays a welcome message to the user
function WelcomeCard() {
  return (
    // Card container with dark blue background and rounded corners
    <div className="overflow-hidden rounded-lg bg-[#002b4d] shadow-md">
      {/* Card content with padding */}
      <div className="p-6">
        {/* Welcome heading with large bold text */}
        <h2 className="text-2xl font-bold text-white">Welcome to Your Learning Hub</h2>
        {/* Descriptive text with lighter color and top margin */}
        <p className="mt-2 text-gray-300">Access your courses and explore new learning opportunities all in one place</p>
      </div>
    </div>
  );
}

export default WelcomeCard;