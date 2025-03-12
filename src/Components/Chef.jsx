import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import chef_1 from '../asset/chef-1.png'
import chef_2 from '../asset/chef-2.png'
import chef_3 from '../asset/chef-3.png'
import chef_4 from '../asset/chef-4.png'

import { MdArrowOutward } from "react-icons/md";


const Chef = () => {

    const chefs = [
        {
            img: chef_1,
            chefName:'carpaccio de',
            designation:'Chef'
        },

        {
            img: chef_2,
            chefName:'Emma Newman',
            designation:'Assistant chef'
        },
        {
            img: chef_3,
            chefName:'Oscar Oldman',
            designation:'Chef'
        },
        {
            img: chef_4,
            chefName:'Ed Freeman',
            designation:'Assistant chef'
        },

    ]


    return (
        <>
            <div className=''>
                <h1 className='text-2xl font-bold md:text-4xl dark:text-gray-200'>They will cook for you</h1>
                <div className='flex flex-col gap-4 mt-4 md:flex-row md:items-center md:justify-between'>
                    <p className='text-gray-400'>Consectetur numquam poro nemo veniameligendi rem adipisci quo modi.</p>
                    <button className='px-8 py-4 bg-customYellow w-fit text-black font-semibold flex items-center gap-3'><MdArrowOutward className='text-2xl' /> More about us</button>
                </div>
            </div>

            <div className='mt-10 overflow-hidden'>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={false}
        className="mySwiper"
        breakpoints={{
            375: {  
                slidesPerView: 2,
            },
            768:{
                slidesPerView: 3,
            },
            1024: {  
                slidesPerView: 3, 
            },
            1200: { 
                slidesPerView: 4, 
            },

            1400: {  
                slidesPerView: 4,
            },
        }}
      >

        {chefs.map((chef) => (
            <SwiperSlide>
            <div className='main-container overflow-hidden flex flex-col gap-5 items-center justify-center group'>
                <div className='food-section'>
                    <div className='overflow-hidden bg-gray-100 rounded h-[390px]'>
                    <img src={chef.img}
                     alt={chef.chefName}
                     className='transition-transform duration-300 ease-in-out group-hover:scale-105 w-full'
                      />
                    </div>
                    <div className=' h-14 flex flex-col justify-center items-center dark:bg-gray-800 dark:text-gray-200'>
                        <h3 className='dish-name text-xl font-bold ps-3'>{chef.chefName}</h3>
                        <p className='text-gray-400'>{chef.designation}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        ))}
        

      </Swiper>
            </div>
        </>
    )
}

export default Chef;