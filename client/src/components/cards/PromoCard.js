import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function PromoCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-[#002b4d] shadow-md h-full">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Find Your Perfect Course & Instructor!</h2>
        <p className="mt-4 text-xl text-gray-300">Discover courses and expert instructors on our updated platform</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-medium text-[#002b4d] hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="mr-3 h-6 w-6" /> landing page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PromoCard;