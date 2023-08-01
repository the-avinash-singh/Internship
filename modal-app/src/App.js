import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [value,setvalue]=useState(' ');
  const [visible,setVisible]=useState('hidden')

  const handelClick=(e)=>{
    setvalue(e.target.name);
    setVisible("block")
  }

  const clicked=()=>{
    setVisible("hidden")
  }
  return (
    <div className="App ">
      <div className="relative top-80 rounded-2xl border border-2 w-1/2 m-auto bg-[#F5F5F7]">
        <button className="bg-[#6A75CA] w-20 rounded my-10 p-1 block m-auto text-sm" name={"catagory"} onClick={handelClick}>Catagory</button>
        <button className="bg-[#6A75CA] w-28 rounded p-1 my-10 block m-auto text-sm" name={"sub-catagory"} onClick={handelClick}>Sub-catagory</button>
        <button className="bg-[#6A75CA] w-20 rounded p-1 my-10 block m-auto text-sm" name={"item"} onClick={handelClick}>Item</button>
      </div>
      <Modal value={value} visible={visible} clicked={clicked}/>
    </div>
  );
}

export default App;
