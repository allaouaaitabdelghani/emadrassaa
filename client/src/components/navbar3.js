import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#002b4d] py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/Vector.svg" alt="Madrasati" className="h-8 sm:h-10" />
              <span className="ml-2 text-xl sm:text-2xl font-bold text-white">Madrasati</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 text-base lg:text-lg font-medium transition-colors">
              Home
            </Link>
            <Link 
              to="/" 
              onClick={() => { window.location.href = '/#contact'; }} 
              className="text-white hover:text-gray-300 text-base lg:text-lg font-medium transition-colors"
            >
              Contact us
            </Link>
            <Link to="/teacher" className="text-white hover:text-gray-300 text-base lg:text-lg font-medium transition-colors">
              Teachers
            </Link>
            <Link to="/course" className="text-white hover:text-gray-300 text-base lg:text-lg font-medium transition-colors">
              Courses
            </Link>
          </div>

          {/* Profile Section */}
          <div className="hidden md:flex items-center">
            <img
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white"
              src="/profile.svg"
              alt="Profile"
            />
            <Link 
              to="/dashboard" 
              className="ml-3 px-4 py-2 text-base lg:text-lg font-medium text-white hover:text-gray-300 transition-colors"
            >
              Khenfer Hicham
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 pb-4 space-y-4`}
        >
          <Link 
            to="/" 
            className="block text-white hover:text-gray-300 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/" 
            onClick={() => { 
              window.location.href = '/#contact';
              setIsMenuOpen(false);
            }} 
            className="block text-white hover:text-gray-300 text-base font-medium transition-colors"
          >
            Contact us
          </Link>
          <Link 
            to="/teacher" 
            className="block text-white hover:text-gray-300 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Teachers
          </Link>
          <Link 
            to="/course" 
            className="block text-white hover:text-gray-300 text-base font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <div className="flex items-center pt-4 border-t border-gray-700">
            <img
              className="h-8 w-8 rounded-full border-2 border-white"
              src="/profile.svg"
              alt="Profile"
            />
            <Link 
              to="/dashboard" 
              className="ml-3 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Khenfer Hicham
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
