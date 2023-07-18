import React from 'react'
import '../../../App.css'

const Btn02 = ({name, txtcol, bgcol, bordercol}) => {
  return (
    <button 
        className='lg:py-[16px] py-[13px] lg:px-[56px] px-[40px] rounded-[56px] border-[2px] font-[700] sm:text-[20px] text-[16px] open_sans hover:scale-[1.05] hover:opacity-90' 
        style={{borderColor:bordercol, backgroundColor: bgcol, color: txtcol}}
    >{name}</button>
  )
}

export default Btn02