import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#002b4d] py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/Vector.svg" alt="Madrasati" className="h-10" />
        <span className="ml-3 text-2xl font-bold text-white">Madrasati</span>
      </div>
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-white hover:text-gray-300 text-lg font-medium">Home</Link>
        <Link to="/" onClick={() => { window.location.href = '/#contact'; }} className="text-white hover:text-gray-300 text-lg font-medium">Contact us</Link>
        <a href="#teachers" className="text-white hover:text-gray-300 text-lg font-medium">Teachers</a>
        <a href="#courses" className="text-white hover:text-gray-300 text-lg font-medium">Courses</a>
      </div>
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full border-2 border-white"
          src="/profile.svg"
          alt="Profile"
        />
        <a 
          href="#" 
          className="ml-3 px-4 py-2 text-lg font-medium text-white hover:text-gray-300 transition-colors"
        >
          Khenfer Hicham
        </a>
      </div>
    </nav>
  );
}
