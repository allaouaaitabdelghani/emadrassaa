import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import ContactSection from "./ContactSection";
import { useLocation } from "react-router-dom";

// Main Dashboard component that combines Sidebar and MainContent
function Dashboard() {
  // State to track if sidebar is open (for mobile responsiveness)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  return (
    // Main container with dark gray background and flex layout
    <div className="flex min-h-screen bg-gray-800">
      {/* Sidebar component with props for controlling its visibility */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 overflow-y-auto">
        {/* Show ContactSection when on /contact route, otherwise show MainContent */}
        {location.pathname === "/contact" ? (
          <ContactSection />
        ) : (
          <MainContent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;