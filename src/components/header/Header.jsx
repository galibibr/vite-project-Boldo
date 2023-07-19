import React from 'react'
import '../../App.css'
import Nav from './nav/Nav'
import Btn02 from './btn/Btn02'
import head from '../../assets/header.svg'
import bgLog from '../../assets/bgLogos.png'

const Header = () => {
    return (
        <header className='bg-[#0A2640] flex flex-col md:gap-[56px] gap-[35px]'>
            <div className='container'>
                <Nav></Nav>
                <div className='sm:pb-[64px]'>
                    <div className='md:pt-[64px] md:pb-[56px] mb-[20px] py-[20px] mx-[20px] text-white flex flex-col lg:flex-row lg:justify-between items-center gap-6'>
                        <div className='flex flex-col justify-center lg:max-w-[567px] w-[100%]'>
                            <div>
                                <p className='md:text-[48px] text-[30px] font-[400] manrope mb-[16px]'>Save time by building  fast with Boldo Template </p>
                                <p className='open_sans text-[#F1F1F1] mb-[40px]'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                                <div className='flex gap-[24px] sm:flex-row flex-col sm:px-0 px-[60px]'>
                                    <Btn02 name={'Buy template'} txtcol={'#0A2640'} bgcol={'#69E6A6'} bordercol={'#0A2640'}></Btn02>
                                    <Btn02 name={'Explore'} txtcol={'#FFFFFF'} bgcol={'#0A2640'} bordercol={'#FFFFFF'}></Btn02>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-auto'>
                            <img src={head} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className='bgLogos mx-5'>
                        <img src={bgLog} alt="" className=' w-full h-[60px]' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header