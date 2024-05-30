import React, { useContext } from 'react'
import {data1, data11} from './App'

const Parul = () => {
  const tt= useContext(data1);
  const tt1= useContext(data11);

  return (
    <div>

      <h1>hello component...</h1>
      <h1>my name is {tt} and age is {tt1}</h1>
    </div>
  )
}

export default Parul
