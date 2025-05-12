import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#002b4d] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/Vector.svg" alt="Madrasati" className="h-8 sm:h-10" />
              <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold">Madrasati</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Providing quality education and fostering personal growth through innovative learning methods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/teacher" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-gray-300">
                Address: Eldjelfa, Algeria
              </li>
              <li className="text-sm sm:text-base text-gray-300">
                Phone: +213 555 123 456
              </li>
              <li className="text-sm sm:text-base text-gray-300">
                Email: e.madrassati@gmail.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-sm sm:text-base text-gray-300">
            © {new Date().getFullYear()} Madrasati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
