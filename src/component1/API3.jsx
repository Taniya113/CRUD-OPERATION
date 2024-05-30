import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API3 = () => {
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [course, setcourse] = useState("")
    const [ID, setID] = useState("")

    const getMyData = async () => {
        const res = await axios.get("http://localhost:3000/posts");
        setdata(res.data)
    }
    useEffect(() => {
        getMyData();

    }, [])

    const deletefun = async (id) => {
        const resp = await axios.delete(`http://localhost:3000/posts/${id}`)
        console.log(resp);
        getMyData();

    }
    const updatefun = async () => {
        const data= {name, course};
        const ress = await axios.patch(`http://localhost:3000/posts/${ID}`, data)
        getMyData();
        setcourse("")
        setname("")
    }

    const getDetail = async (id) => {
        try {
            const resp=await axios.get(`http://localhost:3000/posts/${id}`)
            setID(id)
            setcourse(resp.data.course)
            setname(resp.data.name)
        } catch (error) {
            
        }
    }

    const submitfun= async (e)=>{
        e.preventDefault();
        if (name === "" && course ==+"") {
            
        } else {
            
            const data= {name, course};
            const res=   await axios.post("http://localhost:3000/posts", data);
            console.log(res);
            setcourse("")
            setname("")
            getMyData()
        }
    }

    return (
        <div>
            <h1>hello delete component </h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Course</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.course}</td>
                                    <td><button onClick={() => deletefun(item.id)}>Delete</button></td>
                                    <td><button onClick={() => getDetail(item.id)}>Update</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)} /><br></br>
            <input tppe="text" value={course} name="course" onChange={(e) => setcourse(e.target.value)} /><br></br>
            <button type="button" onClick={(e) => {
                e.preventDefault()
                if (ID) {
                    updatefun()
                } else {
                    submitfun(e) 
                }
            }}>submit</button>
        </div>
    )
}

export default API3
