import React from 'react'

const Button = ( {text , onClick , color}) => {
  return (
    <button className={`${color} text-white px-2 py-2 rounded   `} onClick={onClick} >{text}</button>
  )
}

export default Button