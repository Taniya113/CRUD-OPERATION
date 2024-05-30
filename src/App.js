
import './App.css';
//import Form from './Form';

//import API1 from "./coment1/API1"
import { Button } from 'react-bootstrap'
import API1 from './component3/API1'; 
import Forem1 from './Forem1';
import Parul1 from './Parul1';
import Form from './Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forem11 from './Forem11';
import Images from './Images';
import Formm from './Formm';
import Select from './Select'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './redux3/Slice/index'
import { createContext } from 'react';

const data1 =createContext();
const data11= createContext();
function App() {
  
  const count =useSelector((state)=>state.counter)
  const dispatch = useDispatch();

  //const data1 =createContext();
  //const data11= createContext();
  
  var name= "taniya";
  var age= 21;
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Select/>} />
      <Route path="/Forem1" element={<Forem1 />} />
      <Route path="/Forem11" element={< Forem11/>} />
    </Routes>

    <h1>Count is {count}</h1>
    <button onClick={()=> dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </BrowserRouter>
    <data1.Provider value={name}>
      <data11.Provider value={age}>
        <Parul1 />
      </data11.Provider>
    </data1.Provider>

    
      
     
    </>
      
  );
}

export default App;
export { data1,data11 }


