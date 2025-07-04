import React from 'react'

const ProductCard = ({ name, image, price, rating, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[250px] hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
      <p className="text-blue-600 font-bold mb-1">₹ {price}</p>
      <p className="text-yellow-500 font-medium">⭐ {rating} / 5</p>
    </div>
  )
}

export default ProductCard
