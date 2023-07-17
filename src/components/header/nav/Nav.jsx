import React from 'react'
import '../../../App.css'
import logo from '../../../assets/logo.png'
import Btn01 from '../btn/Btn01'
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    return (
        <nav className='p-5 text-white flex justify-between items-center'>
            <div className='flex gap-[11px] items-center cursor-pointer'>
                <img src={logo} alt="" className=' object-contain h-[25px] md:h-[34px]' />
                <p className='monrape font-[700] md:text-[43px] text-[30px]'>Boldo</p>
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
                <MenuIcon 
                className='hv_menu'
                style={{
                    fontSize: '30px',
                    cursor: 'pointer',
                }} />
                {onclick=()=>{
                    
                }}
            </div>
        </nav>
    )
}

export default Nav