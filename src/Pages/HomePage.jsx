import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import girl from '../asset/girl.png'
import burger from '../asset/1.svg'
import pi from '../asset/2.svg'
import pizza from '../asset/3.svg'
import Description from '../Components/Description';
import interior from '../asset/interior.jpg'
import { BsArrowUpRightCircle } from "react-icons/bs";
import Starter from '../Components/Starter';
import salad from '../asset/1.png'
import mainDish from '../asset/2.png'
import drinks from '../asset/3.png'
import dessert from '../asset/4.png'
import Dishes from '../Components/Dishes';







const HomePage = () => {
  const strategies = [
    {
      sno: "01",
      heading: "We are located in the city center",
      description: "Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."
    },
    {
      sno: "02",
      heading: "Fresh, organic ingredients",
      description: "Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi."
    },
    {
      sno: "03",
      heading: "Own fast delivery",
      description: "Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit."
    },
  ]


  const starters = [
    {
      images: salad,
      foodName: "Starters",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      images: mainDish,
      foodName: "Main dishes",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
      images: drinks,
      foodName: "Drinks",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },


    {
      images: dessert,
      foodName: "Desserts",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ]
  return (

    <>
      <section className='bg-white dark:bg-gray-900 px-5 lg:px-20 xl:px-40'>
        <div className=' pt-10 flex flex-col items-center gap-14 lg:flex-row'>


          <div className='flex flex-col justify-center gap-5 lg:w-1/2'>
            <p className='bg-gray-100 p-1 text-sm rounded lg:text-start w-fit'>Hii, new friend</p>
            <h1 className='text-5xl text-center font-bold dark:text-gray-200 md:px-24 md:text-7xl lg:text-start lg:px-1'>We do not cook, we create your emotions!</h1>
            <p className='text-center text-gray-400 text-[18px] md:px-36 lg:text-start lg:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est repellendus nisi, alias magnam ratione quis impedit.</p>
            <div className='flex items-center flex-wrap justify-center gap-5 lg:justify-start'>
              <button className='flex items-center gap-2 bg-customYellow text-xl p-2 rounded font-semibold'><IoFastFoodSharp /> Our Menu</button>
              <button className='flex items-center gap-2 text-xl rounded font-semibold p-2 border-2 border-customYellow dark:text-gray-200 '><MdArrowOutward /> About us</button>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <div className='rounded-b-full h-[500px] md:h-[600px] lg:h-[700px] w-full relative overflow-hidden'>
              <img className='w-full h-[70vh] sm:h-[60vh] md:h-[90vh] lg:h-[80vh] xl:h-[100vh] object-contain' src={girl} alt="" />
              <div className='circle-1 bg-transparent border-[18px] border-white h-20 w-20 rounded-full absolute bottom-12 right-10 z-30 animate-upDown'></div>
              <div className='circle-2 bg-customYellow h-8 w-8 rounded-full absolute right-24 top-28 z-30 animate-upDown2'></div>
              <div className='circle-3 bg-customYellow h-5 w-5 rounded-full absolute right-36 top-7 z-30 animate-upDown2'></div>
              <div className='circle-1 bg-transparent border-[14px] border-white h-10 w-10 rounded-full absolute bottom-32 left-20 z-30 animate-upDown3'></div>
              <div className='circle-2 bg-customYellow h-14 w-14 rounded-full absolute left-20 bottom-2 z-30 animate-zoomInOut'></div>

            </div>

          </div>
        </div>

        <div className='py-24'>
          <h1 className='text-4xl font-bold lg:text-6xl'>We are doing more than
            you expect</h1>

          <div className='flex flex-col space-y-20 lg:flex-row-reverse lg:justify-between lg:gap-20 lg:items-center'>
            <div className='mt-10 flex flex-col gap-10 '>
              {strategies.map((strategy) => (
                <Description sno={strategy.sno} heading={strategy.heading} description={strategy.description} />
              ))}
            </div>

            <div className=''>
              <div className='relative w-full lg:w-[400px] lg:h-[400px] object-cover xl:w[700px]'>
                <img className='w-full h-full' src={interior} alt="" />
                <div className='circle-3 bg-customYellow h-5 w-5 rounded-full absolute right-36 top-7 z-30 animate-upDown2'></div>
                <div className='circle-1 bg-transparent border-[18px] border-white h-20 w-20 rounded-full absolute bottom-12 right-10 z-30 animate-upDown'></div>
                <div className='circle-2 bg-customYellow h-14 w-14 rounded-full absolute left-20 bottom-2 z-30 animate-zoomInOut'></div>
              </div>
            </div>
          </div>


        </div>


        <div className="like-section">
          <div>
            <h1 className='text-3xl font-bold dark:text-gray-200'>What do you like today?</h1>
            <div className='flex flex-col gap-5 mt-3 lg:flex-row lg:items-center lg:justify-between'>
              <p className='text-gray-500 w-80'>Consectetur numquam poro nemo veniam
                eligendi rem adipisci quo modi. </p>
              <div>
                <button className='px-8 py-4 bg-customYellow text-black font-semibold flex items-center gap-3'><BsArrowUpRightCircle className='text-2xl' />Go shopping now</button>
              </div>
            </div>

          </div>


        </div>

        <section className='py-20 space-y-7'>
          <div className='menu-section-1 flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-between'>
            {
              starters.slice(0, 2).map((starter) => (
                <Starter images={starter.images} foodName={starter.foodName} content={starter.content} />
              ))
            }
          </div>

          <div className='menu-section-2 flex gap-5 flex-col justify-center items-center lg:flex-row lg:justify-between'>
            {
              starters.slice(2).map((starter) => (
                <Starter images={starter.images} foodName={starter.foodName} content={starter.content} />
              ))
            }
          </div>
        </section>


        <section className='py-14'>
          <Dishes />
        </section>

      </section>

    </>

  )
}

export default HomePage