import React from 'react'
import scroll from '../image/scroll.png'
function Hero() {
  return (
    <div className='flex flex-col  justify-center items-center  bg-purple-50 mt-3 mx-3 rounded ' >
        <div className='gap-10 flex-col text-center font-b612 tracking-wide flex justify-center items-center py-24'>
            <h1 className=' sm:text-7xl text-5xl leading-snug'>Never Miss Your <br /><span style={{color:'mediumslateblue'}}>&lt;Coding &#47;&gt;</span>  Contest</h1>
            <p className='leading-snug text-slate-500 sm:w-full w-1/2'>Stay Updated for future competitive coding contests</p>
        </div>

        <div className='animate-bounce w-12 pb-12 pt-12'>
            <img src={scroll} alt='scrollimage'></img>
        </div>
        
    </div>
  )
}

export default Hero