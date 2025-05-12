import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock, Menu, X } from 'lucide-react';
import Navbar4 from "./navbar4";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample course data
  const courses = [
    { title: "Quran Memorization", level: "Beginner", image: "/course1.jpg" },
    { title: "Arabic Language", level: "Intermediate", image: "/course2.jpg" },
    { title: "Islamic Studies", level: "Advanced", image: "/course3.jpg" },
    { title: "Tajweed Rules", level: "Beginner", image: "/course4.jpg" },
    { title: "Islamic History", level: "Intermediate", image: "/course5.jpg" },
    { title: "Hadith Studies", level: "Advanced", image: "/course6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar4 />

      <main>
        {/* Hero section */}
        <section className="relative overflow-hidden bg-[#002B4D] shadow-md py-8 sm:py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-start justify-between gap-8 p-4 sm:p-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white flex flex-col leading-tight">
                  <span>Where Academic</span>
                  <span>Excellence Meets</span>
                  <span>Personal Growth</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-200 flex flex-col">
                  <span>We provide high-quality education focused on academic</span>
                  <span>excellence, creativity, and personal development</span>
                </p>
                <div className="mt-6 sm:mt-8 flex gap-4 sm:gap-6">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#002B4D] hover:bg-gray-100 transition-colors"
                  >
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#002B4D] hover:bg-gray-100 transition-colors"
                  >
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#002B4D] hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
              <div className="mt-8 w-full md:mt-0 md:w-3/5">
                <div className="relative">
                  <img src="/Group.png" alt="Group.png" className="w-full h-auto scale-110 relative z-10" />
                  <img 
                    src="/person.svg" 
                    alt="person.svg" 
                    className="absolute top-0 -bottom-20 right-0 w-full object-cover z-20" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Teachers Section */}
        <section id="teachers" className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-10">Meet With our teachers</h2>
            {/* Teacher cards carousel with navigation arrows */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-8 h-8 sm:w-12 sm:h-12 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors z-10"
                onClick={() => {
                  const container = document.querySelector('.teachers-grid');
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-8 h-8 sm:w-12 sm:h-12 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors z-10"
                onClick={() => {
                  const container = document.querySelector('.teachers-grid');
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>

              {/* Grid of teacher cards */}
              <div className="teachers-grid overflow-x-auto flex gap-4 sm:gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar max-w-[960px] mx-auto">
                {[
                  { name: "Steve Clark", image: "/placeholder.svg?height=120&width=120" },
                  { name: "Derrick Lopez", image: "/placeholder.svg?height=120&width=120" },
                  { name: "Harry Barker", image: "/placeholder.svg?height=120&width=120" },
                  { name: "John Smith", image: "/placeholder.svg?height=120&width=120" },
                  { name: "Sarah Wilson", image: "/placeholder.svg?height=120&width=120" },
                  { name: "Emma Davis", image: "/placeholder.svg?height=120&width=120" },
                ].map((teacher, index) => (
                  <div key={index} className="min-w-[260px] sm:min-w-[300px] flex-shrink-0 snap-start bg-white rounded-lg border-2 border-blue-900 overflow-hidden">
                    <div className="p-4 sm:p-6 flex flex-col items-center">
                      {/* Teacher avatar - circular image */}
                      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">{teacher.name}</h3>
                      {/* See More button for each teacher */}
                      <button
                        className="px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-blue-900 text-blue-900 rounded-md hover:bg-blue-900 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        See More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* See All Teachers button */}
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link 
                to="/teachers" 
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors group text-sm sm:text-base"
              >
                See All Teachers
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Our courses section */}
        <div className="bg-[#002642] py-8 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">Our courses</h2>
              <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-100 text-[#002642] rounded-full transition-colors text-sm sm:text-base">
                See all courses
              </button>
            </div>

            <div className="relative">
              <div className="courses-container overflow-x-auto flex gap-4 sm:gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar max-w-[1200px] mx-auto">
                {[
                  { title: "Algorithms", image: "/algorithms.jpg" },
                  { title: "Algebra", image: "/algebra.jpg" },
                  { title: "Physics", image: "/physics.jpg" },
                  { title: "Spanish", image: "/spanish.jpg" },
                  { title: "Japanese", image: "/japanese.jpg" },
                  { title: "Anatomy", image: "/anatomy.jpg" }
                ].map((course, index) => (
                  <div key={index} className="min-w-[240px] sm:min-w-[280px] flex-shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-36 sm:h-48 relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-4 sm:p-6 text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{course.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors z-10 shadow-lg"
                onClick={() => {
                  const container = document.querySelector('.courses-container');
                  container.scrollBy({ left: -290, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors z-10 shadow-lg"
                onClick={() => {
                  const container = document.querySelector('.courses-container');
                  container.scrollBy({ left: 290, behavior: 'smooth' });
                }}
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Latest News section */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002642] mb-8 sm:mb-12">Latest News</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main featured news - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <img
                    src="/chess.svg"
                    alt="Chess Tournament"
                    className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
                  />
                  <div className="mt-4 sm:mt-6">
                    <span className="text-sm sm:text-base text-gray-600">Next Week</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#002642] mt-2">
                      Compete in our annual chess tournament register now!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mt-2">
                      Registration is only available at the school !!
                    </p>
                  </div>
                </div>
              </div>

              {/* Side news items - Takes up 1 column */}
              <div className="space-y-6 sm:space-y-8">
                {/* News Item 1 */}
                <div className="flex gap-4">
                  <img
                    src="/instractor.svg"
                    alt="Explore Courses"
                    className="w-24 sm:w-32 h-20 sm:h-24 object-cover rounded-lg"
                  />
                  <div>
                    <span className="text-sm sm:text-base text-gray-600">Saturday</span>
                    <h3 className="text-base sm:text-lg font-bold text-[#002642] mt-1">
                      Join us to explore courses & meet instructors!
                    </h3>
                  </div>
                </div>

                {/* News Item 2 */}
                <div className="flex gap-4">
                  <img
                    src="/grp.svg"
                    alt="Team Championship"
                    className="w-24 sm:w-32 h-20 sm:h-24 object-cover rounded-lg"
                  />
                  <div>
                    <span className="text-sm sm:text-base text-gray-600">Friday</span>
                    <h3 className="text-base sm:text-lg font-bold text-[#002642] mt-1">
                      Cheer for our team in the championship this Friday!
                    </h3>
                  </div>
                </div>

                {/* News Item 3 */}
                <div className="flex gap-4">
                  <img
                    src="/ai.png"
                    alt="AI Course"
                    className="w-24 sm:w-32 h-20 sm:h-24 object-cover rounded-lg"
                  />
                  <div>
                    <span className="text-sm sm:text-base text-gray-600">Available</span>
                    <h3 className="text-base sm:text-lg font-bold text-[#002642] mt-1">
                      Enroll now in our new AI & Machine Learning course!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us section */}
        <section id="contact" className="py-8 sm:py-16 bg-[#00457C]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Left Side - Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
                    Get in touch with us
                  </h2>
                  
                  <form>
                    {/* Name Fields - Side by Side */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="w-full sm:w-1/2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00457C]"
                          placeholder="Your first name"
                        />
                      </div>
                      
                      <div className="w-full sm:w-1/2">
                        <label htmlFor="familyName" className="block text-sm font-medium text-gray-700 mb-2">
                          Family Name
                        </label>
                        <input
                          type="text"
                          id="familyName"
                          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00457C]"
                          placeholder="Your family name"
                        />
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00457C]"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    {/* Message Field */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Type your demande
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00457C]"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#00457C] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-[#003666] transition-colors font-medium text-base sm:text-lg"
                    >
                      Send Know
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Right Side - Contact Info */}
              <div className="w-full lg:w-1/2">
                <div className="bg-[#005699] p-6 sm:p-8 rounded-xl text-white h-full">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Details</h2>
                  <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-200">
                    Have questions? We're here to help! Reach out to us anytime
                  </p>
                  
                  {/* Contact Info Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                    {/* Address Card */}
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                      <div className="bg-[#00457C] p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="text-gray-800">
                        <p className="text-sm sm:text-base font-medium">Address</p>
                        <p className="text-xs sm:text-sm text-gray-600">eldjelfa</p>
                      </div>
                    </div>
                    
                    {/* Mobile Card */}
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                      <div className="bg-[#00457C] p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="text-gray-800">
                        <p className="text-sm sm:text-base font-medium">Mobile</p>
                        <p className="text-xs sm:text-sm text-gray-600">+213 555 123 456</p>
                      </div>
                    </div>
                    
                    {/* Email Card */}
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                      <div className="bg-[#00457C] p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="text-gray-800">
                        <p className="text-sm sm:text-base font-medium">Email</p>
                        <p className="text-xs sm:text-sm text-gray-600">e.madrassati@gmail.com</p>
                      </div>
                    </div>
                    
                    {/* Availability Card */}
                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                      <div className="bg-[#00457C] p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="text-gray-800">
                        <p className="text-sm sm:text-base font-medium">Availability</p>
                        <p className="text-xs sm:text-sm text-gray-600">8:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div>
                    <p className="text-sm sm:text-base font-medium mb-4 text-white">Social Media</p>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="bg-white p-2 sm:p-3 rounded-full text-[#00457C] hover:bg-gray-100 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-white p-2 sm:p-3 rounded-full text-[#00457C] hover:bg-gray-100 transition-colors"
                      >
                        <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-white p-2 sm:p-3 rounded-full text-[#00457C] hover:bg-gray-100 transition-colors"
                      >
                        <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add this CSS to hide scrollbar but keep functionality */}
        <style jsx>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </main>
    </div>
  );
}

export default LandingPage;
