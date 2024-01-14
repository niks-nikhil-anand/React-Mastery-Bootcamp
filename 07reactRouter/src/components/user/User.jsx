import React from 'react'
import {useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-orange-500 text-4xl p-10 m-10'>User : {id}</div>
  )
}

export default User