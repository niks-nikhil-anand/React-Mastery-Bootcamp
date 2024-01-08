import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/currencyInfo'
import './App.css'


function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = currencyInfo(from)


  

  return (
    <>
  <h1 className='text-xl bg-red-300'> Currency app with tailwind</h1>
    </>
  )
}

export default App
