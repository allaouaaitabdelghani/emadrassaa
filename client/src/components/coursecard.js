import React from 'react';
import PropTypes from 'prop-types';

function CourseCard({ title, imageSrc }) {
  return (
    <div className="min-w-[240px] sm:min-w-[280px] flex-shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-36 sm:h-48 relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-4 sm:p-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CourseCard;