import { useState } from 'react';
import './App.css';
import Box from './components/Box.js';

function App() {
  const [animation,setAnimaton]=useState(false);
  const transition=animation?{opacity: "0.2"}:{};
  return (
    <>
    <div className=" App flex justify-center items-center" style={transition}>
    <button className='bg-cyan-600 rounded-md p-2 mt-5' onClick={()=>setAnimaton(!animation)}>Press me</button>
    </div>
      <Box text={"I am sliding"} animation={animation}/>
    </>
  );
}

export default App;
