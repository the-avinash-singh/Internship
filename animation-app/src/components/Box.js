import React from 'react'
import "./box.css"

function Box({text,animation}) {
    const transition=animation?{transform:"translateY(600px)"}:{};
  return (
    <div className='box flex w-full justify-center items-center'style={transition}>
    <div className=' relative bottom-10 border-2 border-black w-72 h-72 flex justify-center items-center m-auto'  >
      {text}
    </div>
    </div>
  )
}

export default Box
