import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// ContinueBanner component for returning to last watched video
function ContinueBanner() {
  return (
    // Banner container with dark blue background and rounded corners
    <div className="overflow-hidden rounded-lg bg-[#002b4d] shadow-md">
      {/* Banner content with flexible layout - column on mobile, row on larger screens */}
      <div className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
        {/* Banner text that takes available space */}
        <div className="flex-1">
          <p className="text-lg font-medium text-white">
            Continue where you left off! Click here to return to your last watched video
          </p>
        </div>
        {/* Call-to-action button with pill shape */}
        <Link to="/video/last-watched" className="inline-flex items-center rounded-full bg-white px-4 py-2 font-medium text-[#002b4d]">
          {/* Right arrow icon with spacing */}
          <ArrowRight className="mr-2 h-4 w-4" /> WATCH NOW
        </Link>
      </div>
    </div>
  );
}

export default ContinueBanner;