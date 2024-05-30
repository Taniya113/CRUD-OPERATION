import React from 'react'
import {data1, data11} from './App'

const Parul1 = () => {
  return (
    <div>
        <data1.Consumer>
           {
            (name)=>
            {
              return(
                <data11.Consumer>
                    {
                        (age)=>
                        {
                           return(
                            <h1>my name is {name } and age is {age}</h1>
                           )
                        }
                    }
                </data11.Consumer>
              )
            }
           } 
        </data1.Consumer>
      
    </div>
  )
}

export default Parul1
