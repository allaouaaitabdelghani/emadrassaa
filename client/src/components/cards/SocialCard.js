import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

function SocialCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-[#002b4d] shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">Stay connected Follow us for updates and more</h2>
        <p className="mt-2 text-sm text-gray-300">Stay Connected & Follow Us</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a 
            href="https://www.instagram.com/emadrassati" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a 
            href="mailto:contact@emadrassati.com" 
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/company/emadrassati" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="https://www.facebook.com/emadrassati" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;