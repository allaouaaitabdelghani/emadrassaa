import React from "react"
import PropTypes from 'prop-types'

export default function CourseCard({ title, imageSrc }) {
    return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-2">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={imageSrc || "/placeholder.svg?height=200&width=200"}
            alt={title}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </div>
  )
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
}
