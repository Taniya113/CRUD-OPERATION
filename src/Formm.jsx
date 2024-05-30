import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import {Formik, useFormik} from "formik"
import axios from 'axios';
import {button} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const Formm = () => {

  const[data, setdata]= useState([])
  const[Id, setId]= useState("");
  //get data
  const getdata= async()=>
  {
      const resp=  await axios.get("http://localhost:3000/posts")
      setdata(resp.data)
  }
  useEffect(()=>
  {
    getdata();
  },[])


  //delete data
  const deletedata = (id)=>
  {
     const respp= axios.delete(`http://localhost:3000/posts/${id}`)
     console.log(respp);
     getdata();
  }

  //post data
  const insertdata = (ec)=>
  {
      const rest= axios.post("http://localhost:3000/posts", ec)
      getdata();
  }

  //prefilled data
  const prefilled = async (id)=>
  {
     const rest= await axios.get(`http://localhost:3000/posts/${id}`)
     const dataa= rest?.data
     console.log(dataa);
     setValues({
      id: dataa?.id,
      name: dataa?.name,
      email: dataa?.email,
      mobile: dataa?.mobile,
      password: dataa?.password
     })
     setId(id);
  }

  //update data
  const updatefun= async(pi)=>
  {
     const resd= await axios.put(`http://localhost:3000/posts/${values?.id}`, pi)
     resetForm();
     getdata();
  }

  const scheme= yup.object().shape({
    name: yup.string().required("enter your  name"),
    email: yup.string().required("email is required").email(),
    mobile: yup.string().required("mobile is  required").min(10),
    password: yup.string().required("password is required")

  })

  const{handleBlur, handleReset, handleSubmit, touched, values, errors, handleChange, resetForm, setValues} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      mobile: ""
    },
    validationSchema : scheme,
    onSubmit : (values)=>
      {
          const data= values
          if(values ?.id)
          {
             updatefun(data)
          }
          else
          {
            insertdata(data)
          }
          
     
      }
    
  })
  console.log(data);
  return (
    <div>
      <div className="input1">
        <input type='text' name="name" onChange={handleChange} onBlur={handleBlur} placeholder='enter name' value={values.name}/>
        {
           errors?.name && touched?.name &&(
           <span>{errors.name}</span>)
        }
      </div>
      <div className="input1">
        <input type='text' name="email" onChange={handleChange} onBlur={handleBlur} placeholder='enter email' value={values.email}/>
        {
           errors?.email && touched?.email &&(
           <span>{errors.email}</span>)
        }
      </div>
      <div className="input1">
        <input type='password' name="password" onChange={handleChange} onBlur={handleBlur} placeholder='enter pasword' value={values.password}/>
        {
           errors?.password && touched?.password &&(
           <span>{errors.password}</span>)
        }
      </div>
      <div className="input1">
        <input type='number' name="mobile" onChange={handleChange} onBlur={handleBlur} placeholder='enter mobile' value={values.mobile}/>
        {
           errors?.mobile && touched?.mobile &&(
           <span>{errors.mobile}</span>)
        }
      </div>
      <div className="btn">
         <button onClick={handleSubmit}> {values.id ? "update" : "insert" }</button>
         <button onClick={resetForm}>reset</button>
      </div>

      <div className="nn">
        <h1>table data</h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MOBILE</th>
              <th>PASSWORD</th>
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
                    <td>{item.password}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td><button onClick={()=> deletedata(item.id)}>delete</button></td>
                    <td><button onClick={()=> prefilled(item.id)}>update</button></td>
                    <td><button>view</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
      
    </div>
    

     )
}

export default Formm
