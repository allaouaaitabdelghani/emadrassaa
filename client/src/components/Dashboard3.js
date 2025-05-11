import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar3 from "./Sidebar3";
import MyCourse from "./mycaurse";
// Main Dashboard3 component that combines Sidebar3 and MyCourse
function Dashboard3() {
  // State to track if sidebar is open (for mobile responsiveness)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    // Main container with light gray background and flex layout
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar3 component with props for controlling its visibility */}
      <Sidebar3 open={sidebarOpen} setOpen={setSidebarOpen} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header - only visible on small screens */}
        <div className="flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <img src="/Vector.svg" alt="Logo" width={32} height={32} className="mr-1" />
            <h1 className="text-lg font-bold text-[#002b4d]">Madrasati</h1>
          </div>
          <div className="w-6"></div>
        </div>
        
        {/* Scrollable content area displaying mycourse component */}
        <div className="flex-1 overflow-y-auto">
          <MyCourse />
        </div>
      </div>
    </div>
  );
}

export default Dashboard3;