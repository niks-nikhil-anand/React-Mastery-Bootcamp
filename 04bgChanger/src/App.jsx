import React from 'react'
import {useState} from "react" 

const App = () => {
  const  [color , setcolor] = useState("#7E2553")
  return (
    <div className='w-full h-screen'
    style={{backgroundColor : color}}>
      <div className='fixed flex flex-col right-20 justify-center pt-10'>
      <div className='flex flex-col justify-center  shadow-xl bg-white px-3 py-1.4 rounded-xl text-black '>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3'
       onClick={() => setcolor("red")} 
       style = {{backgroundColor: 'red'}}>
        Red</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 '
       onClick={() => setcolor("orange")} 
       style = {{backgroundColor: 'orange'}}>
        Orange</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 '
       onClick={() => setcolor("yellow")} 
       style = {{backgroundColor: 'yellow'}}>
        Yellow</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 '
       onClick={() => setcolor("green")} 
       style = {{backgroundColor: 'green'}}>
        Green</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 ' 
       onClick={() => setcolor("blue")}
       style = {{backgroundColor: 'blue'}}>
        Blue</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 ' 
       onClick={() => setcolor("indigo")}
       style = {{backgroundColor: 'indigo'}}>
        Indigo</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 '
       onClick={() => setcolor("violet")} 
       style = {{backgroundColor: 'violet'}}>
        Violet</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 ' 
       onClick={() => setcolor("purple")}
       style = {{backgroundColor: 'purple'}}>
        Purple</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 ' 
       onClick={() => setcolor("pink")}
       style = {{backgroundColor: 'pink'}}>
        Pink</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 '
       onClick={() => setcolor("lavender")} 
       style = {{backgroundColor: 'lavender'}}>
        Lavender</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 '
       onClick={() => setcolor("#BF3131")} 
       style = {{backgroundColor: '#BF3131'}}>
        Brown</button>
       <button className='outline-none py-2 px-3.5 rounded-full mt-3 mb-3 ' 
       onClick={() => setcolor("olive")}
       style = {{backgroundColor: 'olive'}}>
        Olive</button>
      
      </div>
      </div>
    </div>
  )
}

export default App