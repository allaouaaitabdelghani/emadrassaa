import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function UserInfoCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#002b4d]">
          <img
            src="/profile.svg"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#002b4d]">Khenfer Hicham</h2>
          <p className="text-gray-600 text-sm sm:text-base">Mathematics Teacher</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-[#002b4d]" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-sm sm:text-base text-gray-700">hicham.khenfer@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-[#002b4d]" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-sm sm:text-base text-gray-700">+213 555 123 456</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-[#002b4d]" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm sm:text-base text-gray-700">Eldjelfa, Algeria</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-[#002b4d]" />
          <div>
            <p className="text-sm text-gray-500">Office Hours</p>
            <p className="text-sm sm:text-base text-gray-700">9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;