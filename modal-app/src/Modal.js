import React from 'react'

const Modal = ({value,visible,clicked}) => {

  return (
    <div className={`relative top-14 ${visible}`}>
        <div className="rounded-xl bg-[#F5F5F7] border border-2 w-1/2 m-auto text-center font-Inter">
            <div className='font-bold text-sm font-Inter my-9'>Do you want to delete this {value}?</div>
            <div className='text-xs text-[#6A75CA] font-Inter my-9'>This action can't be undone</div>
            <button className='text-xs font-Inter border border-[#6E6D7A] bg-[#F5F5F7] h-11 w-32 rounded-md mx-3' onClick={clicked}>No</button>
            <button className='text-xs font-Inter rounded-md bg-[#6A75CA] w-32 h-11 mx-3 my-9' onClick={clicked}>Yes</button>
        </div>
      
    </div>
  )
}

export default Modal
