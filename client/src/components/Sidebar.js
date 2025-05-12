import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Users, Settings, LogOut } from 'lucide-react';

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: Users, label: 'Teachers', path: '/teachers' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#002b4d] text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-[#002b4d] text-white transition-transform duration-300 ease-in-out z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64
      `}>
        <div className="p-6">
          <div className="flex items-center mb-8">
            <img src="/Vector.svg" alt="Madrasati" className="h-8 sm:h-10" />
            <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold">Madrasati</span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center px-4 py-3 text-sm sm:text-base rounded-lg hover:bg-white/10 transition-colors"
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <button className="flex items-center w-full px-4 py-3 text-sm sm:text-base rounded-lg hover:bg-white/10 transition-colors">
              <LogOut className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
