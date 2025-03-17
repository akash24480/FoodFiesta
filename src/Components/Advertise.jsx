import React from 'react'
import google from '../asset/google.svg'
import ios from '../asset/ios.svg'
import iphone from '../asset/iphone.png'

const Advertise = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Download our mobile app.</h1>
            <p className='text-center mt-5'>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
            <div className='flex flex-wrap gap-5 mt-5 justify-center items-center'>
            <img className='w-44' src={google} alt="" />
            <img className='w-44' src={ios} alt="" />
            </div>
        </div>

        <div className='relative'>
            <img className='w-full h-96 rotate-[20deg]' src={iphone} alt="" />
            <div className='circle-3 bg-customYellow h-5 w-5 rounded-full absolute right-36 top-7 z-30 animate-upDown2'></div>
                <div className='circle-1 bg-transparent border-[18px] border-white h-20 w-20 rounded-full absolute bottom-12 right-32 z-30 animate-upDown'></div>
                <div className='circle-2 bg-customYellow h-14 w-14 rounded-full absolute left-20 bottom-2 z-30 animate-zoomInOut'></div>
        </div>
    </div>
  )
}

export default Advertise