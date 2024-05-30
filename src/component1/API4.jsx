import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const API4 = () => {

  const[data, setdata]= useState([]);
  const[name,  setname]= useState("");
  const[course, setcourse]= useState("");
  const[Id, setID]= useState("");

  //get data from api 

  const getmydata= async()=>
  {
      const resp= await axios.get("http://localhost:3000/posts");
      setdata(resp.data)
      
  }

  //post method for insertdata
  const insertdata1= async()=>
  {
    const data= {name, course};
    const resp= await axios.post("http://localhost:3000/posts", data)
    console.log(resp);
    getmydata();
    setname("");
    setcourse("");
  }

  //delete method  fot delete data  
  const deletefun= async(id)=>
  {
    
    const ress= await axios.delete(`http://localhost:3000/posts/${id}`)
    console.log(ress);
    getmydata();
  }

  //update method for update data
  const updatefun= async()=>
  {
      const data={name, course}  
      const res1= await axios.put(`http://localhost:3000/posts/${Id}`, data)
      getmydata();
      setname("");
      setcourse("");

    
  }

  //pre flled for update button

  const getdetails= async(id)=>
  {
    const resq= await axios.get(`http://localhost:3000/posts/${id}`)
    //setID(id);
   // setname(resq.data.name)
    //setemail(resq.data.email)
    //setpassword(resq.data.password)
    //setmobile(resq.data.mobile)
  }



   useEffect(()=>{

    getmydata();

   },[]) 

   console.log(data);

  return (
    <div>
      <h1>hello crud component!!</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Delete</th>
                <th>update</th>
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
                        <td><button onClick={()=> deletefun(item.id)}>delete</button></td>
                        <td><button onClick={()=> getdetails(item.id)}>update</button></td>
                        

                    </tr>
                )
            })
            }
        </tbody>
      </table>

      <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}/><br></br>
      <input type="text" name="course" value={course} onChange={(e)=>setcourse(e.target.value)} /><br></br>
      <button type="button" onClick={insertdata1}>insert</button>
      <button type='button' onClick={(e)=> {
        e.preventDefault();
        if(Id)
        {
            updatefun();
        }
        else
        {
            insertdata1(e);
        }
      }}>update</button>
      
    </div>
  )
}

export default API4

