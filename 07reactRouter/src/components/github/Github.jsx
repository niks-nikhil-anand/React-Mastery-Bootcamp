import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data , setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/niks-nikhil-anand')
    //     .then(res => res.json())
    //     .then(data => {
    //         setdata(data)
    //     })
    // } , [])
  return (
    <>
    <div className='p-5 m-10 text-2xl bg-red-400 text-white text-center'>
        Github Followers : {data.followers}
        </div>
        <div className='flex justify-center '>
            <img src={data.avatar_url}/>
        </div>
        </>
        
  )
}

export default Github

export const githubInfoLoader = async ()=>{
     const response = await fetch('https://api.github.com/users/niks-nikhil-anand')
    return response.json()
}