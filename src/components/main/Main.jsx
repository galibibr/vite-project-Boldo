import React from 'react'
import '../../App.css'
import S1_comp from './S1_comp'
import s1a from '../../assets/s1a.png'
import s1b from '../../assets/s1b.png'
import s1c from '../../assets/s1c.png'

const Main = () => {
  return (
    <main>
        {/* Section 1 */}
        <section className='container px-5 sm:pt-[82px] pt-[50px]'>
              <p className='text-[#777777] mb-[12px] sm:text-[20px] text-[18px] open_sans text-center'>Our Services</p>
              <p className=' sm:mb-[78px] mb-[40px] text-center md:text-[48px] text-[25px] manrope'>Handshake infographic mass market crowdfunding iteration.</p>
              <div className='flex flex-col lg:flex-row gap-[45px] md:gap-[100px]'>
                  <S1_comp img={s1a} txt1={'Cool feature title'} txt2={'Learning curve network effects return on investment.'}></S1_comp>
                  <S1_comp img={s1b} txt1={'Even cooler feature'} txt2={'Learning curve network effects return on investment.'}></S1_comp>
                  <S1_comp img={s1c} txt1={'Cool feature title'} txt2={'Learning curve network effects return on investment.'}></S1_comp>
              </div>
        </section>
    </main>
  )
}

export default Main