import React from "react";
import TeacherCard from "./teachercard"
import Navbar from "./navbar"
import Footer from "./footer"
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
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 bg-[#002b44] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Meet With our teachers</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          {/* Second row of teachers (duplicate for demo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
