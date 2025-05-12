import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import your existing components
import LandingPage from "./components/LandingPage";
import ContinueBanner from "./components/cards/ContinueBanner";
import PromoCard from "./components/cards/PromoCard";
import SocialCard from "./components/cards/SocialCard";
import UserDetailsCard from "./components/cards/UserDetailsCard";
import UserInfoCard from "./components/cards/UserInfoCard";
import WelcomeCard from "./components/cards/WelcomeCard";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import ContactSection from "./components/ContactSection";
import "./App.css";
import Dashboard3 from "components/Dashboard3";
import Teacher from "./components/teacher";



function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/dashboard3" element={<Dashboard3 />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/main" element={<MainContent />} />
          <Route path="/video/last-watched" element={<div><ContinueBanner /></div>} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;