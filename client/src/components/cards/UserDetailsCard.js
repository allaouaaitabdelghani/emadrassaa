import React from 'react';
import { BookOpen, Award, Clock, Users } from 'lucide-react';

// UserDetailsCard component displays user information in input-like fields
function UserDetailsCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-[#002b4d] mb-4">Teaching Statistics</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-[#002b4d]" />
            <span className="text-sm sm:text-base font-medium text-[#002b4d]">Courses</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-[#002b4d]">12</p>
        </div>

        <div className="bg-green-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-[#002b4d]" />
            <span className="text-sm sm:text-base font-medium text-[#002b4d]">Experience</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-[#002b4d]">5 Years</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-[#002b4d]" />
            <span className="text-sm sm:text-base font-medium text-[#002b4d]">Hours</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-[#002b4d]">1,200+</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-[#002b4d]" />
            <span className="text-sm sm:text-base font-medium text-[#002b4d]">Students</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-[#002b4d]">500+</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-base sm:text-lg font-semibold text-[#002b4d] mb-3">Specializations</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mathematics</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Calculus</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Algebra</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Statistics</span>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCard;