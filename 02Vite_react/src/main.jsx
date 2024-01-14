import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



function Mychai(){
  return(
    <div>
      <h1>My custom Chai</h1>
    </div>
  )
}


const anotherElement = (
  <a href='https:google.com/' target='_blank'>
    Go to google
    </a>
)


const name = "Nikhil"

const createElement = React.createElement(
  "a" ,
  {href : 'https://google.com' , target : "_blank"},
  'google India' , 
  name
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    // <App /> 
    // <Mychai/> 
    // anotherElement
    createElement

)
