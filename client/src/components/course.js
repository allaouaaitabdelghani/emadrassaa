import React, { useRef } from "react"
import { Search, ArrowLeft, ArrowRight, Twitter, Facebook, Instagram, Linkedin, Star, Clock, Users } from "lucide-react"
import Navbar3 from "./navbar3"
import { Link } from "react-router-dom"

const courses = [
  { title: "Advanced Mathematics", instructor: "Sean Maguire", price: "00.00 DA", image: "/course1.jpg", rating: 4.8, duration: "12 weeks", students: 120 },
  { title: "Physics Fundamentals", instructor: "Sean Maguire", price: "00.00 DA", image: "/course2.jpg", rating: 4.7, duration: "10 weeks", students: 95 },
  { title: "Chemistry Basics", instructor: "Steve Carell", price: "00.00 DA", image: "/course3.jpg", rating: 4.9, duration: "8 weeks", students: 150 },
  { title: "Algorithms", instructor: "Sean Maguire", price: "00.00 DA", image: "/algorithms.jpg", rating: 4.8, duration: "14 weeks", students: 110 },
  { title: "Spanish", instructor: "Steve Carell", price: "00.00 DA", image: "/spanish.jpg", rating: 4.6, duration: "9 weeks", students: 80 },
  { title: "Algebra", instructor: "Severus Snape", price: "00.00 DA", image: "/algebra.jpg", rating: 4.7, duration: "11 weeks", students: 100 },
  { title: "Japanese", instructor: "Walter White", price: "00.00 DA", image: "/japanese.jpg", rating: 4.5, duration: "10 weeks", students: 70 },
  { title: "Anatomy", instructor: "Steve Carell", price: "00.00 DA", image: "/anatomy.jpg", rating: 4.9, duration: "7 weeks", students: 60 },
  { title: "Philosophy", instructor: "Henry Bathes", price: "00.00 DA", image: "/philosophy.jpg", rating: 4.8, duration: "13 weeks", students: 90 },
  { title: "Pharmacy", instructor: "Severus Snape", price: "00.00 DA", image: "/pharmacy.jpg", rating: 4.7, duration: "12 weeks", students: 85 },
  { title: "Finance", instructor: "Steve Carell", price: "00.00 DA", image: "/finance.jpg", rating: 4.6, duration: "10 weeks", students: 75 },
  { title: "Architecture", instructor: "Adam Bell", price: "00.00 DA", image: "/architecture.jpg", rating: 4.8, duration: "15 weeks", students: 65 },
  { title: "AI", instructor: "Sean Maguire", price: "00.00 DA", image: "/ai.jpg", rating: 4.9, duration: "16 weeks", students: 130 },
  { title: "Biology", instructor: "Steve Carell", price: "00.00 DA", image: "/biology.jpg", rating: 4.7, duration: "9 weeks", students: 95 },
  { title: "History", instructor: "Adam Bell", price: "00.00 DA", image: "/history.jpg", rating: 4.5, duration: "8 weeks", students: 60 },
  { title: "Cyber Security", instructor: "Henry Bathes", price: "00.00 DA", image: "/cybersecurity.jpg", rating: 4.8, duration: "14 weeks", students: 120 },
  { title: "Python", instructor: "Steve Carell", price: "00.00 DA", image: "/python.jpg", rating: 4.9, duration: "10 weeks", students: 140 },
];

export default function Course() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar3 />
      {/* Hero Section */}
      <section className="bg-[#002642] text-white py-16 px-6 md:px-16 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">what do you want to learn today ?</h1>
        <p className="text-center mb-8">search for your next course know</p>
        <div className="relative w-full max-w-xl">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="search here"
            className="w-full py-3 pl-12 pr-4 rounded-full text-black focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#002642] p-2 rounded-full">
            <Search size={20} className="text-white" />
          </button>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#002642]">Recommended cources</h2>
        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#002642] rounded-full p-2 shadow hover:bg-gray-100">
            <ArrowLeft className="h-6 w-6 text-[#002642]" />
          </button>
          <div ref={scrollRef} className="overflow-x-auto flex gap-6 pb-4 scroll-smooth no-scrollbar">
            {courses.map((course, idx) => (
              <div key={idx} className="min-w-[320px] max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  <p className="mt-2 text-gray-600">Instructor: {course.instructor}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-gray-600">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="ml-1 text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="ml-1 text-gray-600">{course.students} students</span>
                    </div>
                  </div>
                  <Link to="/course2" className="mt-4 w-full inline-block bg-[#002642] text-white py-2 rounded-md hover:bg-[#001f3d] transition-colors text-center">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#002642] rounded-full p-2 shadow hover:bg-gray-100">
            <ArrowRight className="h-6 w-6 text-[#002642]" />
          </button>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-[#002642] text-white py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">contact us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white text-black p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#002642]">Get in touch with us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input type="text" className="w-full border rounded-md p-2" placeholder="John" />
              </div>
              <div>
                <label className="block mb-2">Family Name</label>
                <input type="text" className="w-full border rounded-md p-2" placeholder="Doe" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full border rounded-md p-2" placeholder="email@example.com" />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Type your demmande</label>
              <textarea className="w-full border rounded-md p-2 h-32" placeholder="message..."></textarea>
            </div>
            <button className="bg-[#002642] text-white px-6 py-2 rounded-md">Send Know</button>
          </div>

          {/* Contact Details */}
          <div className="bg-[#002642] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">contact details</h3>
            <p className="mb-6">Have questions? We're here to help! Reach out to us anytime.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white text-black p-4 rounded-lg flex items-center">
                <div className="bg-[#002642] p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Adress</h4>
                  <p>eldjolfa</p>
                </div>
              </div>

              <div className="bg-white text-black p-4 rounded-lg flex items-center">
                <div className="bg-[#002642] p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Moblie</h4>
                  <p>+213 555 123 456</p>
                </div>
              </div>

              <div className="bg-white text-black p-4 rounded-lg flex items-center">
                <div className="bg-[#002642] p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">email</h4>
                  <p>elmadrasati@gmail.com</p>
                </div>
              </div>

              <div className="bg-white text-black p-4 rounded-lg flex items-center">
                <div className="bg-[#002642] p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">availability</h4>
                  <p>8:00 - 14:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4">social media</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full">
                  <Twitter className="text-[#002642]" size={20} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <Facebook className="text-[#002642]" size={20} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <Instagram className="text-[#002642]" size={20} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <Linkedin className="text-[#002642]" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
