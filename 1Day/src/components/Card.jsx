import React from 'react'

const Card = ({titleD}) => {

  return (
    <>
      <div className="p-4 border rounded shadow bg-white max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{titleD}</h2>
    </div>
    </>
  )
}

export default Card