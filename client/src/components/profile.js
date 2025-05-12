import React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import CourseCard from "./coursecard"

// Create SocialIcon component directly in this file
const SocialIcon = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <Facebook className="h-6 w-6" />
    case "instagram":
      return <Instagram className="h-6 w-6" />
    case "linkedin":
      return <Linkedin className="h-6 w-6" />
    case "twitter":
      return <Twitter className="h-6 w-6" />
    default:
      return <Linkedin className="h-6 w-6" />
  }
}

function TeacherProfile() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-[#0a3b5b]">
            <img
              src="/Vector.svg"
              alt="Madrasati Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            Madrasati
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="font-medium">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/teacher" className="font-medium">
                Teachers
              </Link>
            </li>
            <li>
              <Link to="/courses" className="font-medium">
                Courses
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="/profile.svg"
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link to="/dashboard" className="ml-2 hidden md:inline-block font-medium">
              Khenfer Hicham
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0a3b5b] py-16 text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Salam, I'm Henry Barthes</h1>
              <p className="text-gray-300">philosophy, Literature</p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                <p className="text-gray-200">
                  Hello, my name is Henry Barthes. I'm a substitute teacher of English and Literature at Emadrassati. I
                  try to help my students find meaning in their lives, even when the world around them feels hopeless I
                  believe education is more than just memorizing facts—it's about understanding emotions, experiences,
                  and the human condition Though I struggle with my own past, I do my best to guide my students through
                  theirs
                </p>
              </div>

              <div className="flex space-x-4 mt-6">
                <Link to="#" aria-label="Facebook" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="Facebook" />
                </Link>
                <Link to="#" aria-label="Instagram" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="Instagram" />
                </Link>
                <Link to="#" aria-label="LinkedIn" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="LinkedIn" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end items-center">
              <div className="rounded-full border-4 border-white overflow-hidden h-64 w-64">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Teacher Profile"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#0a3b5b] mb-12">Some of my courses</h2>

            <div className="relative">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                  <CourseCard title="Philosophy" imageSrc="/placeholder.svg?height=200&width=200" />
                  <CourseCard title="P_Religion" imageSrc="/placeholder.svg?height=200&width=200" />
                  <CourseCard title="Ethics" imageSrc="/placeholder.svg?height=200&width=200" />
                  <CourseCard title="Epistemology" imageSrc="/placeholder.svg?height=200&width=200" />
                </div>
              </div>

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                aria-label="Previous courses"
              >
                <ChevronLeft className="h-6 w-6 text-[#0a3b5b]" />
              </button>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                aria-label="Next courses"
              >
                <ChevronRight className="h-6 w-6 text-[#0a3b5b]" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a3b5b] py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <button
              className="bg-white rounded-full p-3"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-5 w-5 text-[#0a3b5b]" />
            </button>

            <div>
              <h3 className="text-xl mb-2">social media</h3>
              <div className="flex space-x-4">
                <Link to="#" aria-label="Twitter" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="Twitter" />
                </Link>
                <Link to="#" aria-label="Facebook" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="Facebook" />
                </Link>
                <Link to="#" aria-label="Instagram" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="Instagram" />
                </Link>
                <Link to="#" aria-label="LinkedIn" onClick={e => e.preventDefault()}>
                  <SocialIcon platform="LinkedIn" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TeacherProfile;