import React from 'react'
import TeamData from "./data/Teamdata"
import Card from './components/Card'


const App = () => {

  const sayHello = (name)=>{
    alert(`hii ${name}`)
  }
  return (
    <>
      <div className=' min-h-screen  bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold text-center mb-2' >Team list</h1>
        <div className='flex flex-wrap justify-center gap-6'>
        { TeamData.map(( item , i  )=>(
          <Card
          key={i}
          name={item.name}
          role={item.role}
          image={item.image}
          skills={item.skills}
          onJock={sayHello}
          />
        ))}
        </div>
      </div>
    </>
  )
}

export default App