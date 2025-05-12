import React from "react";
import { Home, BookOpen, HelpCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

// Sidebar component with navigation links
function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Mobile backdrop - only visible when sidebar is open on mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Sidebar container with dark blue background */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#002b4d] transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo section at the top of sidebar */}
        <div className="flex h-24 items-center px-6">
          <div className="flex items-center">
            <img src="/Vector.svg" alt="Logo" width={40} height={40} className="mr-2" />
            <h1 className="text-2xl font-bold text-white">Madrasati</h1>
          </div>
        </div>
        {/* Navigation menu section */}
        <nav className="flex-1 space-y-2 px-6">
          <div className="space-y-6">
            <Link to="/dashboard" className="flex items-center text-white">
              <Home className="mr-4 h-5 w-5" />
              <span>Profile</span>
            </Link>
            <Link to="/dashboard3" className="flex items-center text-white">
              <BookOpen className="mr-4 h-5 w-5" />
              <span>my courses</span>
            </Link>
            <Link to="/dashboard2" className="flex items-center text-white">
              <HelpCircle className="mr-4 h-5 w-5" />
              <span>contact us</span>
            </Link>
          </div>
        </nav>
        {/* Logout button at the bottom of sidebar */}
        <div className="px-6 py-8">
          <button className="flex items-center text-white">
            <LogOut className="mr-4 h-5 w-5" />
            <span>log out</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
