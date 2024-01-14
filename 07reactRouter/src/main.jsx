import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home , About , Contact , User} from './components'
import { Route } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/> ,
//     children : [
//       {
//         path:"",
//         element : <Home/> 
//       },
//       {
//         path:"contact",
//         element : <Contact/> 
//       },
//       {
//         path:"about",
//         element : <About/> 
//       },
      
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>} >
      <Route path = "" element = {<Home/>} />
      <Route path = "about" element = {<About/>} />
      <Route path = "conatct" element = {<Contact/>} />
      <Route path = "user:id" element = {<User/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
