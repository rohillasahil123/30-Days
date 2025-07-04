  import React, { useState } from 'react'
  import Contaainer from "./components/Container"
  import Button from './components/Button'
  import Card from './components/Card'
import SaveButton from './components/saveButton'

  const App = () => {
    const [show , setShow] = useState(false)


    const handleSubmit =  ()=>{
      setShow(!show)
      console.log(show)
    }

    const handleSave = ()=>{
      console.log("save")
    }


    return (
    
      <Contaainer>
        <h1 className='font-bold uppercase text-2xl underline mt-[3%] ' > Consept of props</h1>
        <Button text= "show" onClick={handleSubmit} ></Button> 
        <SaveButton text = "save" onClick={handleSave} />

        { 
          show && (
            <div className='flex flex-col'>
              <Card titleD="React component"></Card>
              <Card titleD="TailwindCss component"></Card>
            </div>
          )
        }

      </Contaainer>
    
    )
  }

  export default App