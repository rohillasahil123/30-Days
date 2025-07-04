import React from 'react'
import Skills from './Skills'
import Button from './Button'

const Card = ({name , role , image , skills ,  onJock}) => {
  return (
    <div className='border shadow-md w-[300px] p-4 bg-white'>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h1>{role}</h1>
      <Skills skills={skills} />
      <div className='flex justify-center mt-2'>
        <Button  text='say hello ' onClick={()=>{onJock(name)} } color='bg-blue-500'  ></Button>
      </div>

    </div>
  )
}

export default Card