import { useState } from 'react'
import './App.css'

function App() {
// let value = 5 

let [value , setvalue] = useState(15)

const addvalue = ()=>{
  if(value<20){
    value++;
    
  }
  setvalue(value)
}
const minusvalue = ()=>{
  if(value>0){
    value--;
  }
  setvalue(value)
}

  return (

   <>
   <h1>{value}----Why we Need Hooks?----{value} </h1>
   <h3>Counter value : {value}</h3>
   <button onClick={addvalue} 
   >Increase</button>
   <br/>
   <button onClick={minusvalue}> Decrease</button>
   </>
  )
}

export default App
