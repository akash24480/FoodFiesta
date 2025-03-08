import React from 'react'

const Starter = ({images, foodName, content}) => {
  return (
    <div className='bg-gray-100 px-2 py-8  rounded-lg flex items-center gap-5 cursor-pointer hover:scale-105 transition-all duration-500 lg:px-16 lg:gap-14 xl:w-[750px] dark:bg-gray-800'>
        <div className='icon relative'>
            <img className='w-[70px] h-auto object-contain dark:invert' src={images} alt="" />
            
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold dark:text-gray-200'>{foodName}</h3>
            <p className='dark:text-gray-400'>{content}</p>
        </div>
    </div>
  )
}

export default Starter