

import React, { useState } from 'react'

const Second = () => 
{
  const[name, setname]= useState("");
  const[course,setcourse]= useState("");
  

  function submitfunction()
  {
    
    let data= {name, course};
    //console.log(data);
  //   fetch("http://localhost:3000/posts",
  //  {
  //     method: "POST",
  //     header:{
  //       'Accept': "Application/json",
  //       'Content-Type': "Application/json"
  //     },
  //     body:JSON.stringify(data)
  //  }).then((result)=>
  // {
  //   result.json().then((resp)=>
  // {
  //   console.log(resp)
  // })
  // })

    
     

  }
  
  
  
  return (
    <>
     <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/><br></br>
     <input type="text" name="course" value={course} onChange={(e)=>{setcourse(e.target.value)}} /><br></br>
     <button type="button" onClick={submitfunction}>click me</button>
    </>
  )

}
export default Second
