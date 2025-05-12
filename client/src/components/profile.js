import React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import CourseCard from "./coursecard"
import Navbar2 from "./navbar2"

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
    <div className="min-h-screen bg-gray-50">
      <Navbar2 />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0a3b5b] py-8 sm:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Salam, I'm Henry Barthes</h1>
                <p className="text-gray-300 text-lg sm:text-xl">Philosophy, Literature</p>

                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">About Me</h2>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    Hello, my name is Henry Barthes. I'm a substitute teacher of English and Literature at Emadrassati. I
                    try to help my students find meaning in their lives, even when the world around them feels hopeless. I
                    believe education is more than just memorizing facts—it's about understanding emotions, experiences,
                    and the human condition. Though I struggle with my own past, I do my best to guide my students through
                    theirs.
                  </p>
                </div>

                <div className="flex justify-center md:justify-start space-x-4 mt-6">
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

              <div className="flex justify-center md:justify-end">
                <div className="rounded-full border-4 border-white overflow-hidden h-48 w-48 sm:h-64 sm:w-64">
                  <img
                    src="/profile.svg"
                    alt="Teacher Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0a3b5b] mb-8 sm:mb-12">Some of my courses</h2>

            <div className="relative">
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-w-max sm:min-w-0">
                  <CourseCard title="Philosophy" imageSrc="/placeholder.svg?height=200&width=200" />
                  <CourseCard title="P_Religion" imageSrc="/placeholder.svg?height=200&width=200" />
                  <CourseCard title="Ethics" imageSrc="/placeholder.svg?height=200&width=200" />
                  <CourseCard title="Epistemology" imageSrc="/placeholder.svg?height=200&width=200" />
                </div>
              </div>

              <div className="hidden sm:block">
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Previous courses"
                >
                  <ChevronLeft className="h-6 w-6 text-[#0a3b5b]" />
                </button>

                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Next courses"
                >
                  <ChevronRight className="h-6 w-6 text-[#0a3b5b]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a3b5b] py-6 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-5 w-5 text-[#0a3b5b]" />
            </button>

            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl mb-3">Social Media</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
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