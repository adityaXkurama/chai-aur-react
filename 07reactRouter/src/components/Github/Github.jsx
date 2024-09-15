import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data=useLoaderData()
     // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/adityaXkurama')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data) 
    //         setData(data) 
    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-white p-4 test-center m-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export const githubInfoLoader =async()=>{
    const Response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return Response.json()
}