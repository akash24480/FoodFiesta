import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img_1 from '../asset/1.jpg'
import img_2 from '../asset/2.jpg'
import img_3 from '../asset/3.jpg'
import img_4 from '../asset/4.jpg'
import img_5 from '../asset/5.jpg'
import img_6 from '../asset/6.jpg'
import { MdRestaurantMenu } from "react-icons/md";


const Dishes = () => {

    const dishes = [
        {
            img: img_1,
            dishName:'carpaccio de',
            price:10,
        },

        {
            img: img_2,
            dishName:'Chevrefrit au miel',
            price:14,
        },
        {
            img: img_3,
            dishName:'Sauman Garvlax',
            price:9,
        },
        {
            img: img_4,
            dishName:'Croustillant de...',
            price:4,
        },
        {
            img: img_5,
            dishName:'carpaccio de',
            price:6,
        },
        {
            img: img_6,
            dishName:'Stracciatella',
            price:11,
        },

        
    ]


    return (
        <>
            <div className=''>
                <h1 className='text-2xl font-bold md:text-4xl dark:text-gray-200'>Most popular dishes</h1>
                <div className='flex flex-col gap-4 mt-4 md:flex-row md:items-center md:justify-between'>
                    <p className='text-gray-400'>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
                    <button className='px-8 py-4 bg-customYellow w-fit text-black font-semibold flex items-center gap-3'><MdRestaurantMenu className='text-2xl' /> Full Menu</button>
                </div>
            </div>

            <div className='mt-10 overflow-hidden'>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={false}
        className="mySwiper"
        breakpoints={{
            640: {  
                slidesPerView: 2,
            },
            1024: {  
                slidesPerView: 2, 
            },
            1200: { 
                slidesPerView: 3, 
            },

            1400: {  
                slidesPerView: 4,
            },
        }}
      >

        {dishes.map((dish) => (
            <SwiperSlide>
            <div className='main-container overflow-hidden flex flex-col gap-5 items-center justify-center group'>
                <div className='food-section'>
                    <div className='overflow-hidden'>
                    <img src={dish.img}
                     alt={dish.dishName}
                     className='transition-transform duration-300 ease-in-out group-hover:scale-105'
                      />
                    </div>
                    <div className='bg-gray-100 h-14 flex justify-between items-center dark:bg-gray-800 dark:text-gray-200'>
                        <h3 className='dish-name text-xl font-bold ps-3'>{dish.dishName}</h3>
                        <p className='price bg-customYellow h-14 w-14 flex items-center justify-center font-bold text-2xl'><span className='text-sm font-thin'>$</span>{dish.price}</p>
                    </div>
                </div>
                <div className='text-rating'>
                    <div className='text-gray-400 dark:text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, blanditiis.</div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                        <span className='text-gray-600 dark:text-gray-200'>(4.5 rating)</span>
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

export default Dishes