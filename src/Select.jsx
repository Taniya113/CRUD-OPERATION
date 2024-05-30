import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Select = () => {
    const[data, setData]=useState([]);
    const[option, setoption]= useState()

    const Getdata= async ()=>
    {
       const resp= await axios.get("http://localhost:3000/posts");
       setData(resp.data)
    }

    useEffect(()=>{
        Getdata()
    }, [])
   // console.log(data);
  return (
    <div className='sel'>
      <h1>hello component</h1>
      < select onClick={(e)=>setoption(e.target.value)}>
        {
            data.map((item, i)=>
            {
                return(
                   <option key={i}>{item.name}</option>
                )
            })
        }
      </select>
    </div>
  )
}

export default Select
