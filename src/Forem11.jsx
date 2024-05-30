import React from 'react'
import { useLocation } from 'react-router-dom'

const Forem11 = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <div className="tr">
        <h3>Id : {location.state.id}</h3>
        <h3>Name : {location.state.name}</h3>
        <h3>Mobile :{location.state.mobile}</h3>
        <h3>Email : {location.state.email}</h3>
        <h3>Password :{location.state.password}</h3>
        <h1> </h1>
      </div>
    </div>
  )
}

export default Forem11
