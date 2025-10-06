import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mayukh-7')
    //     .then((response)=>response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github following: {data.following}
    <img src={data.avatar_url}  width={300} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/mayukh-7')
    return response.json()
}