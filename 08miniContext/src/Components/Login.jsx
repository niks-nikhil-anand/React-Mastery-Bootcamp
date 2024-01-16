import React from "react";
import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

import React from 'react'

const Profile = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit= (e) => {
        e.preventDefault();
        setUser({Username , Password})
    }
  return (
    <div>
        
        <h1>Login</h1>
        <input type="text"placeholder="Username" 
        value={Username} 
        onChange={(e)=>{
            setUsername(e.target.value)
        }} />
        <input type="text"placeholder="Password"
        value={Password} onChange={(e)=>{
            setPassword(e.target.value)
        }} 
        />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Profile