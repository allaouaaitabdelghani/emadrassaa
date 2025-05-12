import React from "react";
import { Menu } from "lucide-react";
import UserInfoCard from "./cards/UserInfoCard";
import WelcomeCard from "./cards/WelcomeCard";
import UserDetailsCard from "./cards/UserDetailsCard";
import SocialCard from "./cards/SocialCard";
import PromoCard from "./cards/PromoCard";
import ContinueBanner from "./cards/ContinueBanner";
import PropTypes from 'prop-types';

// MainContent component that displays all dashboard cards
function MainContent({ children }) {
  return (
    <main className="min-h-screen bg-gray-50 lg:ml-64">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {children}
      </div>
    </main>
  );
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;