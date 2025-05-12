import React from "react";

const TeacherCardProps = {
  teacher: {
    name: "",
    subject: "", 
    image: "",
  }
}

export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-[#002b44] mb-2">{teacher.name}</h3>
      <p className="text-gray-600 mb-4">{teacher.subject}</p>
      <a
        href="#"
        className="px-4 py-2 border-2 border-[#002b44] text-[#002b44] rounded-md hover:bg-[#002b44] hover:text-white transition-colors"
      >
        See More
      </a>
    </div>
  );
}
