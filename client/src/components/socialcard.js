import React from 'react';
import PropTypes from 'prop-types';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const SocialIcon = ({ platform }) => {
  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  const Icon = icons[platform.toLowerCase()];

  if (!Icon) {
    return null;
  }

  return (
    <a 
      href={`https://${platform.toLowerCase()}.com`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#002B4D] hover:bg-gray-100 transition-colors"
    >
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
};

SocialIcon.propTypes = {
  platform: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']).isRequired,
};

export default SocialIcon;
