import React from 'react'

const Description = ({sno, heading, description}) => {
  return (
    <div className='flex flex-col gap-3 items-center md:flex-row'>
        <div className='text-5xl'>{sno}</div>
        <div>
            <h3 className='text-xl font-semibold'>{heading}</h3>
            <p className='text-[18px] text-gray-200'>{description}</p>
        </div>
    </div>
  )
}

export default Description