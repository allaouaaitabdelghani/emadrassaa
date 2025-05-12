import React from "react";
import TeacherCard from "./teachercard";
import Navbar from "./navbar";
import Footer from "./footer";

function Teacher() {
  const teachers = [
    {
      id: 1,
      name: "Adam Bell",
      subject: "Philosophy",
      image: "/images/adam-bell.jpg",
    },
    {
      id: 2,
      name: "Henry Barthes",
      subject: "Philosophy",
      image: "/images/henry-barthes.jpg",
    },
    {
      id: 3,
      name: "Sean Maguire",
      subject: "Algebra",
      image: "/images/sean-maguire.jpg",
    },
    {
      id: 4,
      name: "Severus Snape",
      subject: "History",
      image: "/images/severus-snape.jpg",
    },
    {
      id: 5,
      name: "Walter White",
      subject: "Major",
      image: "/images/walter-white.jpg",
    },
    {
      id: 6,
      name: "Steve Carell",
      subject: "Major",
      image: "/images/steve-carell.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="flex-1 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002b4d] mb-4">
              Meet Our Teachers
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Discover our team of experienced educators dedicated to helping you achieve your learning goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          {/* Second row of teachers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            {teachers.map((teacher) => (
              <TeacherCard key={`second-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Teacher;
