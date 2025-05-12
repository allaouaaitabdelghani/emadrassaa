import React from "react"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar5 from "./navbar5"

function Course2() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar5 />
      {/* Main Content */}
      <main className="flex-1">
        {/* Discover Course Section */}
        <section className="bg-[#003049] py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-white">discover course</h2>
              <Link to="/course" className="bg-white text-[#003049] hover:bg-gray-100 border border-[#003049] px-4 py-2 rounded inline-block text-center">
                see all courses
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Philosophy"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-4xl font-bold text-[#003049] mb-4">Philosophy</h3>
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img
                        src="/placeholder.svg?height=48&width=48"
                        alt="Henry Bathes"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xl text-[#003049] font-medium">Henry Bathes</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-[#003049] mb-2">Discreption</h4>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus luctus urna sed urna ultricies, ut
                      dapibus massa laoreet Nulla facil Fusce at felis ut nisi v Ipute facilisis Curabitur sit amet
                      justo non r Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus luctus urna sed urna
                      ultricies, ut dapibus massa laoreet Nulla facil
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-[#003049]">Price :1000.00 / Per Month</div>
                    <button className="bg-[#003049] hover:bg-[#00436a] text-white px-4 py-2 rounded">
                      <span className="mr-2">Get course</span> →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Courses Section */}
        <section id="courses" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#003049] mb-12 text-center">other courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course Card 1 */}
              <CourseCard
                title="Algorithms"
                instructor="Sean Maguire"
                price="00.00 DA"
                imageSrc="/placeholder.svg?height=200&width=150"
              />

              {/* Course Card 2 */}
              <CourseCard
                title="Physics"
                instructor="Sean Maguire"
                price="00.00 DA"
                imageSrc="/placeholder.svg?height=200&width=150"
              />

              {/* Course Card 3 */}
              <CourseCard
                title="Spanish"
                instructor="Steve Carell"
                price="00.00 DA"
                imageSrc="/placeholder.svg?height=200&width=150"
              />

              {/* Course Card 4 */}
              <CourseCard
                title="Algebra"
                instructor="Severus Snape"
                price="00.00 DA"
                imageSrc="/placeholder.svg?height=200&width=150"
              />

              {/* Course Card 5 */}
              <CourseCard
                title="Japenies"
                instructor="Walter White"
                price="00.00 DA"
                imageSrc="/placeholder.svg?height=200&width=150"
              />

              {/* Course Card 6 */}
              <CourseCard
                title="Anatomy"
                instructor="Steve Carell"
                price="00.00 DA"
                imageSrc="/placeholder.svg?height=200&width=150"
              />
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="bg-[#003049] py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">contact us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#003049] mb-6">Get in touch with us</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input id="firstName" placeholder="First Name" className="w-full border rounded p-2" />
                  </div>
                  <div>
                    <label htmlFor="familyName" className="block text-sm font-medium mb-1">
                      Family Name
                    </label>
                    <input id="familyName" placeholder="Family Name" className="w-full border rounded p-2" />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="Email" className="w-full border rounded p-2" />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Type your demmande
                  </label>
                  <textarea id="message" placeholder="message" className="w-full border rounded p-2 min-h-[120px]" />
                </div>

                <button className="bg-[#003049] hover:bg-[#00436a] text-white px-4 py-2 rounded w-full">Send Know</button>
              </div>

              {/* Contact Details */}
              <div className="bg-[#003049] rounded-lg p-6 md:p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">contact details</h3>
                <p className="text-gray-300 mb-6">Have questions? We're here to help! Reach out to us anytime</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <MapPin className="text-[#003049] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#003049]">Adress</h4>
                      <p className="text-gray-600">eldjeffa</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <Phone className="text-[#003049] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#003049]">Mobile</h4>
                      <p className="text-gray-600">+213 555 123 456</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <Mail className="text-[#003049] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#003049]">email</h4>
                      <p className="text-gray-600">e.madrasati@gmail.com</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <Clock className="text-[#003049] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#003049]">avaliability</h4>
                      <p className="text-gray-600">8:00 - 14:00</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">social media</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CourseCard({ title, instructor, price, imageSrc }) {
  return (
    <div className="bg-[#003049] rounded-lg overflow-hidden">
      <div className="p-4 flex">
        <div className="w-1/3">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={150}
            height={200}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden mr-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt={instructor}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-sm text-white">{instructor}</span>
          </div>
          <div className="text-white text-sm mb-3">price {price}</div>
          <button className="text-white border border-white hover:bg-white hover:text-[#003049] px-3 py-1 rounded">
            see more
          </button>
        </div>
      </div>
    </div>
  )
}
export default Course2;
