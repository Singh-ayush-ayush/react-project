import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const[num,setNum] = useState("");
  const[table,setTable] = useState([]);

  const generateTable = () =>{
    const number = Number(num);
    let result = [];

    for(let i=1;i<=10; i++){
    result.push(`${number} x ${i} = ${number * i}`);
    }
    setTable(result);
  };
  return (
    <>
    <h1>Generate Table</h1>
     <input id="input"
      type ="number"
      placeholder ="enter number"
      onChange={(e)=>
        setNum(e.target.value)
      }/>

      <button  id="btn" onClick={generateTable}>Generate Table</button>

      <ul>
        {table.map((item,index)=>(
          <li keys={index}>{item}</li>
        ))}
      </ul>  
    </>
  );
}

export default App
