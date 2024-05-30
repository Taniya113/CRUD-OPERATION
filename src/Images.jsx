import React from 'react'
import { DropdownDivider } from 'react-bootstrap'

const Images = () => {
    const comments = [
        {
            "id": "1",
          "img": "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ] 
  return (
    <div>
      {
        comments && comments?.map((resp)=>
        {
            return(
                <div key={resp?.id}>
                    {
                        console.log(resp?.id)
                    }
                    <img src={resp?.img} alt=""/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Images

