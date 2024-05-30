import React, { useEffect, useState } from 'react'
import Second from './Second';

const First = () => {

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        setdata(resp)
      })
    })
  }, [])
  console.log(data);



  return (
    <div>
      <table border="1">
        <tbody>
          <tr>
            <td>UserId</td>
            <td>Id</td>
            <td>Title</td>
          </tr>
          {
            data.map((item) =>
            (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>

              </tr>
            )

            )
          }
        </tbody>
      </table>
      <Second />
    </div>
  )
}

export default First
