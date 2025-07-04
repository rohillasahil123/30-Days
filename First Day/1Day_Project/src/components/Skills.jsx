import React from 'react'

const Skills = ({Skills}) => {
  if(!Skills || Skills.length === 0 ) 
    return <p> no skills hare </p>
  return (
    <div className='flex flex-wrap gap-2 justify-center mt-2 '>
      {
        Skills.map(( skill , i )=>{
             <li key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">
          {skill}
        </li>
        
        })
      }
    </div>
  )
}

export default Skills