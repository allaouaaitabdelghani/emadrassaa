import React from 'react';

// WelcomeCard component displays a welcome message to the user
function WelcomeCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[#002b4d] mb-2 sm:mb-4">Welcome Back!</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        We're glad to see you again. Continue your learning journey with us.
      </p>
    </div>
  );
}

export default WelcomeCard;