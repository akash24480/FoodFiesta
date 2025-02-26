import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import girl from '../asset/girl.png'
import burger from '../asset/1.svg'
import pi from '../asset/2.svg'
import pizza from '../asset/3.svg'


const HomePage = () => {
  return (
    <div className='bg-white dark:bg-gray-900 pt-10 flex flex-col items-center gap-14'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <p className='bg-gray-100 p-1 text-sm rounded'>Hii, new friend</p>
        <h1 className='text-5xl text-center font-bold dark:text-gray-200'>We do not cook, we create your emotions!</h1>
        <p className='text-center text-gray-400 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est repellendus nisi, alias magnam ratione quis impedit.</p>
        <div className='flex flex-col items-center gap-5'>
          <button className='flex items-center gap-2 bg-customYellow text-xl p-2 rounded font-semibold'><IoFastFoodSharp /> Our Menu</button>
          <button className='flex items-center gap-2 text-xl rounded font-semibold p-2 border-2 border-customYellow dark:text-gray-200 '><MdArrowOutward /> About us</button>
        </div>
      </div>

      <div>
        <div className='rounded-b-full h-[400px] w-full relative overflow-hidden'>
          <img className='w-full h-full' src={girl} alt="" />
          <div className='circle-1 bg-transparent border-[18px] border-white h-20 w-20 rounded-full absolute bottom-12 right-10 z-30 animate-upDown'></div>
          <div className='circle-2 bg-customYellow h-8 w-8 rounded-full absolute right-24 top-28 z-30 animate-upDown2'></div>
          <div className='circle-3 bg-customYellow h-5 w-5 rounded-full absolute right-36 top-7 z-30 animate-upDown2'></div>
          <div className='circle-1 bg-transparent border-[14px] border-white h-10 w-10 rounded-full absolute bottom-32 left-20 z-30 animate-upDown3'></div>
          <div className='circle-2 bg-customYellow h-14 w-14 rounded-full absolute left-20 bottom-2 z-30 animate-zoomInOut'></div>
          <img className='w-10 absolute' src={burger} alt="" />
          <img className='w-10 absolute' src={pi} alt="" />
          <img className='w-10 absolute' src={pizza} alt="" />
        </div>

      </div>
    </div>
  )
}

export default HomePage