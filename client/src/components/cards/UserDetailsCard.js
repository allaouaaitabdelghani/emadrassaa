import React from "react";

// UserDetailsCard component displays user information in input-like fields
function UserDetailsCard() {
  return (
    // Card container with dark blue background and rounded corners
    // Takes full width on mobile (col-span-1)
    <div className="col-span-1 overflow-hidden rounded-lg bg-[#002b4d] shadow-md">
      {/* Card content with padding */}
      <div className="p-6">
        {/* Grid layout for form fields - 2 columns on medium screens and up */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* First name field */}
          <div className="space-y-2">
            <label className="block text-white">First name</label>
            {/* Pill-shaped input display with white background */}
            <div className="rounded-full bg-white px-4 py-2 text-center text-[#002b4d]">Hicham</div>
          </div>
          {/* Family name field */}
          <div className="space-y-2">
            <label className="block text-white">Family name</label>
            {/* Pill-shaped input display with white background */}
            <div className="rounded-full bg-white px-4 py-2 text-center text-[#002b4d]">Khenfer</div>
          </div>
          {/* Email field - spans both columns on medium screens and up */}
          <div className="space-y-2 md:col-span-2">
            <label className="block text-white">Email</label>
            {/* Pill-shaped input display with white background */}
            <div className="rounded-full bg-white px-4 py-2 text-center text-[#002b4d]">khenferhicham@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCard;