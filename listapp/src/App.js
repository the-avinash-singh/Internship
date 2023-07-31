import './App.css';
import React,{useState} from "react";

function App() {
  
  const[divElement,setDivElement]=useState([]);
  const[divLeft,setDivLeft]=useState(3);
  const add=()=>{
    setDivElement(data=>[
      ...data,
      <div className='flex' key={data.length}>
        <div className='border border-2 h-9 mx-3 my-3 p-1 rounded w-40 left-0' >item {data.length+1}</div>
        <div className='border border-2 h-9 mx-3 my-3 p-1 rounded w-40 right-0'>price</div>
      </div>]);
    setDivLeft(data=>data-1);
  }
  const remove=()=>{
    setDivElement(data=>data.slice(0,data.length-1));
    setDivLeft(data=>data+1);
  }
  
  return (
    <div className="App flex justify-center relative">
      <div className="absolute border border-2 w-1/2 h-96 flex justify-center top-52 rounded-lg">
      <div className="">
        {divElement.length>0?divElement:<p>click Add-item</p>}
      </div>
    <button className="absolute bg-blue-500 rounded w-24 p-2 h-10 m-5 bottom-0 left-0 md-start-10" id="addButton" onClick={add} disabled={divLeft===0}>Add-Item</button>
    <button className="absolute bg-blue-500 rounded h-10 w-36 m-5 p-2 bottom-0 right-0 md-end-10" id="removeButton" onClick={remove} disabled={divElement<3}>Remove-Item</button>
    </div>
    </div>
  );
}

export default App;
