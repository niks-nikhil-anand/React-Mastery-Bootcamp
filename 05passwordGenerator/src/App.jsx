import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= '0123456789'
    if(numberAllowed) str+= '!@#$%&*_-'

    for (let index = 1; index < array.length; index++) {
      let char = Math.floor(Math.random()*str.length()+1);
      pass = str.charAt(char)
    }

    setPassword(pass)
    

  },[length,numberAllowed,charAllowed])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white'
    style={{ backgroundColor: '#6DA4AA' }}
    >
    
    <h1 className='text-white text-center pt-5 pb-3 text-xl'>Password Generator</h1>
    <div className='flex  rounded-lg
    overflow-hidden mb-4 h-20  '>
      <input 
      type='text' 
      value = {password}
      className='outline-none w-full py-1 px-3 mb-8 '
      placeholder='password'
      readOnly  
      />
      <button className='outline-none bg-blue-700 text-white h-12 px-4'>
        Copy
        </button>
    </div>
    <div className='flex text-sm gap-x-2 pb-10'>
      <div className='flex items-centre gap-x-1 flex-col'>
        <input 
      type="range"
      min={6} 
      max={50}
      value={length}
      className='cursor-pointer'
      onChange={(e)=> {setLength(e.target.value)}}
      />
      <label >Length: {length}</label>
      </div>

    </div>
    </div>
     </>
  )
}

export default App
