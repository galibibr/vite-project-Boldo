import React from 'react'
import '../../App.css'
import { AiOutlineArrowRight } from 'react-icons/ai'


const S1_comp = ({ img, txt1, txt2 }) => {
    return (
        <div className='text-center sm:text-start flex flex-col items-center md:items-start'>
            <div className=' rounded-[24px] sm:mb-[24px] mb-[16px] w-full'>
                <img src={img} alt="" className=' w-full hover:opacity-70' />
            </div>
            <p className='open_sans sm:text-[24px] text-[22px] sm:mb-[12px] mb-[8px]'>{txt1}</p>
            <p className='text-[#777777] sm:mb-[28px] mb-[20px] open_sans sm:text-[20px] text-[16px]'>{txt2}</p>
            <div className='flex cursor-pointer hover:opacity-70 items-center gap-[12px] border-b border-black pb-[8px]'>
                <p className='text-[18px] sm:text-[20px] font-[700] open_sans'>Explore page</p>
                <AiOutlineArrowRight style={{color:'black', fontWeight:'bolder'}}></AiOutlineArrowRight>
            </div>
        </div>
    )
}

export default S1_comp