import React from 'react'

const Description = ({sno, heading, description}) => {
  return (
    <div className='flex flex-col lg:items-center gap-3 md:flex-row'>
        <div className='text-5xl text-customYellow font-bold lg:text-8xl'>{sno}</div>
        <div>
            <h3 className='text-xl font-bold'>{heading}</h3>
            <p className='text-[17px] text-gray-400'>{description}</p>
        </div>
    </div>
  )
}

export default Description