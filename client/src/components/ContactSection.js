import { useState } from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"

// API URL based on environment
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-backend-domain.com/api" // Replace with your actual backend domain
    : "http://localhost:5000/api"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.familyName.trim()) {
      newErrors.familyName = "Family name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await axios.post(`${API_URL}/contact`, formData)

      if (response.status === 200) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          familyName: "",
          email: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-white py-12 px-4 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#032D55] rounded-xl p-6 md:p-8 shadow-lg border border-[#0A3E73]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Get in touch with us</h2>

            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Your message has been sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                There was an error sending your message. Please try again.
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name *"
                    className={`w-full px-4 py-3 rounded-lg bg-white text-[#032D55] placeholder-gray-400 border ${
                      errors.firstName ? "border-red-500" : "border-[#0A3E73]"
                    } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  />
                  {errors.firstName && <p className="text-red-300 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleChange}
                    placeholder="Family name *"
                    className={`w-full px-4 py-3 rounded-lg bg-white text-[#032D55] placeholder-gray-400 border ${
                      errors.familyName ? "border-red-500" : "border-[#0A3E73]"
                    } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  />
                  {errors.familyName && <p className="text-red-300 text-xs mt-1">{errors.familyName}</p>}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className={`w-full px-4 py-3 rounded-lg bg-white text-[#032D55] placeholder-gray-400 border ${
                    errors.email ? "border-red-500" : "border-[#0A3E73]"
                  } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                />
                {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your demande *"
                  className={`w-full px-4 py-3 rounded-lg bg-white text-[#032D55] placeholder-gray-400 border ${
                    errors.message ? "border-red-500" : "border-[#0A3E73]"
                  } focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[150px]`}
                />
                {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="flex justify-center md:justify-start pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-[#032D55] font-medium rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-100 hover:scale-105 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Know"}
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Two Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Social Media Card */}
            <div className="bg-[#032D55] rounded-xl p-6 md:p-8 shadow-lg border border-[#0A3E73] flex-1">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Stay connected
                  <br />
                  Follow us for updates and more
                </h2>
                <p className="text-gray-300">Stay Connected & Follow Us</p>
              </div>

              <div className="flex space-x-4 mt-auto">
                <a
                  href="#"
                  className="bg-[#0A3E73] p-3 rounded-full hover:bg-[#0D4A8A] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-[#0A3E73] p-3 rounded-full hover:bg-[#0D4A8A] transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-[#0A3E73] p-3 rounded-full hover:bg-[#0D4A8A] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-[#0A3E73] p-3 rounded-full hover:bg-[#0D4A8A] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            {/* Courses & Instructor Card */}
            <div className="bg-[#032D55] rounded-xl p-6 md:p-8 shadow-lg border border-[#0A3E73] flex-1">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Find Your Perfect Course & Instructor!
                </h2>
                <p className="text-gray-300">Discover courses and expert instructors on our updated platform</p>
              </div>

              <div className="mt-auto">
                <Link
                  to="/"
                  className="bg-white text-[#032D55] font-medium rounded-full px-6 py-3 inline-flex items-center gap-2 hover:bg-gray-100 hover:scale-105 transition-all"
                >
                  landing page
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
