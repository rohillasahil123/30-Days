import React from 'react'
import Button from './Button'

const Filter = ({ onFilterHandle, activeCategory, categorys }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-4">
      {categorys.map((category, i) => (
        <Button
          key={i}
          text={category}
          onClick={() => onFilterHandle(category)}
          color={activeCategory === category ? "bg-blue-600" : "bg-gray-400"}
        />
      ))}
    </div>
  )
}

export default Filter
