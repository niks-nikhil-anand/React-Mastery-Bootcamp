
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
 

  return (
    <UserContextProvider>
    <h1> Chai With React - Use Context API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
