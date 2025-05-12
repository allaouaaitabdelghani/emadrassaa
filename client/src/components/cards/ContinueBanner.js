import React from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

// ContinueBanner component for returning to last watched video
function ContinueBanner() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-[#002b4d] mb-2">Continue Learning</h3>
          <p className="text-gray-600 text-sm sm:text-base">Pick up where you left off in your last course</p>
        </div>
        <button className="flex items-center justify-center bg-[#002b4d] text-white px-4 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-[#001f3d] transition-colors">
          <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
          Continue
        </button>
      </div>
    </div>
  );
}

export default ContinueBanner;