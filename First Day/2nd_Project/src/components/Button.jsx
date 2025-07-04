import React from 'react'

const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} px-4 py-2 rounded text-white hover:opacity-90 transition`}
    >
      {text}
    </button>
  )
}

export default Button
