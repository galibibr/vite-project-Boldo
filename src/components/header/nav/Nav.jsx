import React from 'react'
import '../../../App.css'
import logo from '../../../assets/logo.png'

const Nav = () => {
    return (
        <nav className='border p-5'>
            <div className='flex gap-[11px] items-center'>
                <img src={logo} alt="" className=' object-contain' />
                <p className='monrape font-[700] text-[43px]'>Boldo</p>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav