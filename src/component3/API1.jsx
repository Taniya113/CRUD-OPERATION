import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API1 = () => {

    const[data, setdata]= useState([]);

    const getMyData = async()=>
    {
       const result = await axios.get("")
       setdata(result.data)
    }

    useEffect(()=>
    {
       getMyData()
    },[])

    console.log(data)
  return (
    <div>
      <h1>hello api component</h1>
    </div>
  )
}

export default API1
