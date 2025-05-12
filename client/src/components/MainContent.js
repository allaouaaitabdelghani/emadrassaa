import React from "react";
import { Menu } from "lucide-react";
import UserInfoCard from "./cards/UserInfoCard";
import WelcomeCard from "./cards/WelcomeCard";
import UserDetailsCard from "./cards/UserDetailsCard";
import SocialCard from "./cards/SocialCard";
import PromoCard from "./cards/PromoCard";
import ContinueBanner from "./cards/ContinueBanner";

// MainContent component that displays all dashboard cards
function MainContent({ sidebarOpen, setSidebarOpen }) {
  return (
    // Main container with light gray background and scrollable content
    <div className="flex flex-col h-full bg-gray-100">
      {/* Mobile header - only visible on small screens */}
      <div className="flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
        {/* Menu button to toggle sidebar */}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
          <Menu className="h-6 w-6" />
        </button>
        {/* Mobile header title */}
        <h1 className="text-lg font-bold text-[#002b4d]">Madrasati</h1>
        {/* Empty div for layout balance */}
        <div className="w-6"></div>
      </div>
      {/* Main content area with cards */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Grid layout for cards - 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Top row: User info and Social cards */}
          <UserInfoCard />
          <SocialCard />
          {/* Middle row: Welcome and Promo cards */}
          <WelcomeCard />
          <PromoCard />
          {/* User details card spanning full width on mobile */}
          <UserDetailsCard />
        </div>
        {/* Bottom banner with margin top for spacing */}
        <div className="mt-6">
          <ContinueBanner />
        </div>
      </div>
    </div>
  );
}

export default MainContent;