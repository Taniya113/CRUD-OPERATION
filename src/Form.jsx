import React, { useState } from 'react'
import { Formik, useFormik} from "formik"
import * as yup from "yup";
import { Button } from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom';
const Form = () => 
  { 
    const navigate= useNavigate()
    const[email, setemail]= useState("");
    const[password, setpassword]= useState("");

    const schema = yup.object().shape({
      email: yup.string().required("Email is required").min(5, "first letter must be capital"),
      password: yup.string().required("password is required").min(10, "Aa@#123 included")
    });

    const data1= "taniya@gmail.com";
    const data2= "taniya";

    const {handleChange, handleBlur, errors, touched, values, handleSubmit, handleReset ,resetForm, setValues}= useFormik({
      initialValues :
      {
        email:"",
        password: ""
      },
      validationSchema: schema,
      onSubmit : (values, {resetForm})=>
        {
            console.log(JSON.stringify(values));
            navigate("/Forem1")
            
        }
    })
   
  return (
    <div className='form1'>
      <h1 >Login Form</h1>
      <div className='input1'>
        <input type="text" name='email' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email' />
        {
          errors?.email && touched?.email &&(
            <span className="error nn1">{errors?.email}</span>
          )
        }
      </div>
      <div className='input2'>
        <input type="password" name='password' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your password' />
        {
          errors?.password && touched?.password &&(
            <span className="error nn1">{errors?.password}</span>
          )
        }
      </div>
      <div className='btn1'>
        <Button variant="danger" onClick= {handleSubmit}>Login</Button>
        <Button variant="primary" onClick={resetForm}>Reset</Button>
      </div>
    </div>
  )
}

export default Form
