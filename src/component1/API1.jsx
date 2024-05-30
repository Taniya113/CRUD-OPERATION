import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API1 = () => {

  const[data, setdata]= useState([]);


  //using Async Await -- get method
  const getMydata = async ()=>
  {
    try
    {
       const result = await axios.get("http://localhost:3000/posts");
       setdata(result.data)
    }
    catch(error)
    {
      console.log(error)
    }
  }
 
  useEffect(()=>
{
   getMydata();
},[])

  return (
    <div>
      <h1>hello react component</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COURSE</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>
          {
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
     
    </div>
  )
}

export default API1
