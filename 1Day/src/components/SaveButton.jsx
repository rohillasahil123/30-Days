import React from 'react'

const SaveButton = ({text  , onClick}) => {
  return (
    <>
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={onClick}
    >{text} </button>
    </>
  )
}

export default SaveButton