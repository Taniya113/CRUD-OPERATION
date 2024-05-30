import React, { useState } from 'react'
import { useEffect } from 'react'


const Third = () => {
  const [data, setdata] = useState([]);
  console.log('data', data);
  //for prifilled api
  const [name, setname] = useState("");
  console.log('name', name);
  const [course, setcourse] = useState("");
  useEffect(() => {
    getList();
  }, [])
  function getList() {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        setdata(resp)
        setname(resp[0].name)
        setcourse(resp[0].course)
      })
    }
    )
  }
  function deleteUser(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getList();
      })
    })
  }
  function selectUser(id) {
    
    console.log('id', id-1);
    console.log(data[id - 1]);
    setname(data[id-1]?.name)
    setcourse(data[id-1]?.course)
  }
  return (
    <div>
      <h1>Get Api call</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COURSE</th>
            <th>Opertion</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              const { id, name, course } = item;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{course}</td>
                  <td><button onClick={() => deleteUser(id)}>Delete</button></td>
                  <td><button onClick={() => selectUser(id)}>Update</button></td>
                </tr>
              )
            })
          } 
        </tbody>
      </table>
      <div className='left'>
         <input type="text" value={name} onChange={(e) => setname()} /><br></br><br></br>
        <input type="text" value={course} /><br></br><br></br> 
        <button className='btn'>submit</button>
      </div>

    </div>
  )
}

export default Third
