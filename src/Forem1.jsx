
import * as yup from "yup";
import { Button } from 'react-bootstrap'
import { Formik, useFormik } from "formik"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import Forem11 from "./Forem11";

const Forem1 = () => {

  const navigate= useNavigate();
  const [Id, setId] = useState("");
  const [data, setdata] = useState([]);
 
  const getData1 = async () => {
    const result = await axios.get("http://localhost:3000/posts");
    setdata(result.data)
  }

  useEffect(() => {
    getData1()
  }, [])

  //post data

  const insertdata1 = async (ec) => {
    const resp = await axios.post("http://localhost:3000/posts", ec)
    console.log(resp);
    getData1();
  }


   //update data
  const [details,setDetails]= useState({})
  const editData = async(body)=>
    {
        const resp1 = await axios.put(`http://localhost:3000/posts/${values?.id}`, body)
        resetForm()
        getData1()
    }

  //View data
  const   getsingleData=async (id)=>{
    const resp = await axios.get(`http://localhost:3000/posts/${id}` )
    const data= resp?.data
    const dd1 = setDetails(data)
    navigate("/Forem11", {state : {id: id , name : data?.name, email: data?.email, password: data?.password, mobile: data?.mobile }})
  }
  //delete data

  const deletefun = async (id) => {
    const resp = await axios.delete(`http://localhost:3000/posts/${id}`)
    console.log(resp);
    getData1();
  }

  //prefilled data

  const updatefun = async (id) => {
    const resp = await axios.get(`http://localhost:3000/posts/${id}`)
    const dataa= resp?.data;
    setValues({
      id:dataa.id,
      name: dataa?.name,
      mobile: dataa?.mobile,
      email: dataa?.email,
      password: dataa?.password
    })
    setId(id);

    
  }


  const schema = yup.object().shape({
    name: yup.string().required("Name is required").min(5),
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("password is required").password(),
    mobile: yup.string().required("mobile is required").max(10)
  })
  const { handleBlur, handleChange, handleReset, handleSubmit, touched, values, errors, resetForm, setValues } = useFormik({
    initialValues:
    {
      name: "",
      email: "",
      password: "",
      mobile: ""
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const ec = values;
      console.log(ec);
      if (values?.id) {
        editData(ec)
      }
      else {

        insertdata1(ec)
      }
      // resetForm();
    }
  })
  return (
    <div className='form1'>
        <div>


      </div>

      <h1>Registration  Form</h1>
      <div className='input1'>
        <input type="text" name='name' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your name' value={values.name} />
        {
          errors?.name && touched?.name && (
            <span className="error nn1">{errors?.name}</span>
          )
        }
      </div>
      <div className='input1'>
        <input type="text" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email' />
        {
          errors?.email && touched?.email && (
            <span className="error nn1">{errors?.email}</span>
          )
        }
      </div>
      <div className='input1'>
        <input type="password" value={values?.password} name='password' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your password' />
        {
          errors?.password && touched?.password && (
            <span className="error nn1">{errors?.password}</span>
          )
        }
      </div>

      <div className='input1'>
        <input type="number" name='mobile' value={values.mobile} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your mobile' />
        {
          errors?.mobile && touched?.mobile && (
            <span className="error nn1">{errors?.mobile}</span>
          )
        }
      </div>
      <div className='btn1'>

        <Button variant="danger" onClick={handleSubmit}>    {values?.id ? "update" : " Insert "} </Button>
        <Button variant="primary" onClick={resetForm}>Reset</Button>
      </div>
      
      <div className="tab">
        <h1>Table Information</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>MOBILE</th>
              <th>DELETE</th>
              <th>UPDATE</th>
              <th>VIEW</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.mobile}</td>
                    <td><button onClick={() => deletefun(item.id)}>Delete</button></td>
                    <td><button onClick={() => updatefun(item.id)}>Update</button></td>
                    <td><button onClick={() => getsingleData(item.id)}>view</button></td>
                    

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

export default Forem1
