import React from "react"


const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-[#002642] text-white rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{course.title}</h3>
          <div className="flex items-center">
            <Image
              src={course.instructor.avatar || "/placeholder.svg"}
              alt={course.instructor.name}
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
          </div>
        </div>
        <div className="text-sm">{course.instructor.name}</div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">{course.price}</div>
          <button className="bg-white text-[#002642] px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition-colors">
            see more
          </button>
        </div>
      </div>
    </div>
  )
}
