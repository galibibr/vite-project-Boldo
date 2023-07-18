import React, { useState } from 'react'
import '../../../App.css'
import logo from '../../../assets/logo.png'
import Btn01 from '../btn/Btn01'
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {

    const [nav, setNav] = useState(false)
    const handlNav = () => {
        setNav(!nav)
    }

    return (
        <nav className='p-5 text-white flex justify-between items-center'>
            <div className='flex gap-[11px] items-center cursor-pointer'>
                <img src={logo} alt="" className=' object-contain h-[25px] md:h-[34px]' />
                <p className='manrope font-[700] md:text-[43px] text-[30px]'>Boldo</p>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-[40px] items-center'>
                    <li className='font-[600] open_sans cursor-pointer hover:scale-[1.05] hover:text-[#69E6A6]'>Product</li>
                    <li className='font-[600] open_sans cursor-pointer hover:scale-[1.05] hover:text-[#69E6A6]'>Services</li>
                    <li className='font-[600] open_sans cursor-pointer hover:scale-[1.05] hover:text-[#69E6A6]'>About</li>
                    <Btn01 name={'Log In'}></Btn01>
                </ul>
            </div>
            <div className='md:hidden'>
                <AiOutlineMenu
                    className='hv_menu'
                    size={'25px'}
                    onClick={handlNav}
                />
                {
                    nav ? (
                        <ul className='flex flex-col gap-[15px] items-center border-gray-400 border-t-[1px] fixed left-0 w-full bg-[#0a2640] pb-[20px] mt-5 pt-5'>
                            <li className='font-[600] open_sans cursor-pointer hover:scale-[1.05] hover:text-[#69E6A6]'>Product</li>
                            <li className='font-[600] open_sans cursor-pointer hover:scale-[1.05] hover:text-[#69E6A6]'>Services</li>
                            <li className='font-[600] open_sans cursor-pointer hover:scale-[1.05] hover:text-[#69E6A6]'>About</li>
                            <Btn01 name={'Log In'}></Btn01>
                        </ul>
                    )
                        : (
                            ''
                        )
                }
            </div>
        </nav>
    )
}

export default Nav