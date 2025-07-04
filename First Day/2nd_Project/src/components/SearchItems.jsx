import React from 'react'

const SearchItems = ({placeholder , value , onChange}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
 onChange={onChange}     
      className="border px-4 py-2 rounded w-full mb-4"
    />
  );
};



export default SearchItems