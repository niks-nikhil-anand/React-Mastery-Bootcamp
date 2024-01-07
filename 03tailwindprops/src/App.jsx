import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card  from './components/card'

function App() {
  const obj = {
    name : "Nikhil" ,
    age : 18,
    profession : "web- developer"
  }

  const arr = [1 , 2, ,3 , 4]
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-10 '>Tailwind and Props</h1>
     
    <Card username = "Nikhil"/>
    <Card username = "Anand"/>
    </>
  )
}

export default App
