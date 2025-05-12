import React from 'react';

function PromoCard() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Special Offer!</h3>
      <p className="text-white/90 text-sm sm:text-base mb-4">
        Get 20% off on your next course purchase. Limited time offer.
      </p>
      <button className="bg-white text-blue-800 px-4 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-blue-50 transition-colors">
        Learn More
      </button>
    </div>
  );
}

export default PromoCard;