import React from 'react'
import Marquee from "react-fast-marquee";
const Eat = () => {
  return (
    <div className='bg-[#CD3F0D] py-8 '>
        <div className='flex justify-between max-lg:justify-center max-w-[1600px] mx-auto items-center px-8'>
            <span className='text-white font-bold not-italic text-3xl sm:text-5xl md:text-[70px]'>Delightful Eats</span>
            <span className='text-black font-bold not-italic max-lg:hidden text-xl sm:text-2xl md:text-[27px] bg-[#FCD503] rounded-[40px] p-2 px-4'>Choose your perfect meal</span>
        </div>
        <div className='max-md:mt-8 mt-16'>
            <Marquee>
                <div className='flex gap-6 mx-2'>
                    <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
        <div className='max-md:mt-8 mt-16 lg:hidden'>
            <Marquee direction="right">
                <div className='flex gap-6 mx-2'>
                    <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                        <div className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                        <img className='rounded-[42px]' src="/food.jpg" alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
        <div className='h-8'></div>
        <div className='flex justify-center'><span className='text-black font-bold not-italic lg:hidden text-xl sm:text-2xl  mx-auto md:text-[27px] bg-[#FCD503] rounded-[40px] p-2 px-4'>Choose your perfect meal</span></div>

    </div>
  )
}

export default Eat