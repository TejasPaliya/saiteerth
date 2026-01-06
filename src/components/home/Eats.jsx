import React from 'react'
import Marquee from "react-fast-marquee";

const Eat = () => {
    // Array to avoid repetitive code
    const images = ["/food.jpg", "/food.jpg", "/food.jpg", "/food.jpg", "/food.jpg"];

    return (
        <div className='bg-[#CD3F0D] py-8'>
            <div className='flex justify-between max-lg:justify-center max-w-[1600px] mx-auto items-center px-8'>
                <span className="text-white font-bold not-italic text-[40px] sm:text-5xl md:text-[70px] font-['Anek_Latin']">
                    Delightful Eats
                </span>
                <span className='text-black font-bold not-italic max-lg:hidden text-xl sm:text-2xl md:text-[27px] bg-[#FCD503] rounded-[40px] p-2 px-4'>
                    Choose your perfect meal
                </span>
            </div>

            <div className='max-md:mt-8 mt-16'>
                {/* gradient={true} enables the fade
                    gradientColor={[205, 63, 13]} matches your #CD3F0D background
                    gradientWidth={100} adjusts how "deep" the fade is
                */}
                <Marquee gradient={true} gradientColor={[205, 63, 13]} gradientWidth={100}>
                    <div className='flex gap-6 mx-3'>
                        {images.map((src, index) => (
                            <div key={index} className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                                <img className='rounded-[42px] w-full h-full object-cover' src={src} alt="food" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <div className='max-md:mt-8 mt-16 lg:hidden'>
                <Marquee direction="right" gradient={true} gradientColor={[205, 63, 13]} gradientWidth={100}>
                    <div className='flex gap-6 mx-3'>
                        {images.map((src, index) => (
                            <div key={index} className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                                <img className='rounded-[42px] w-full h-full object-cover' src={src} alt="food" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <div className='h-8'></div>
            <div className='flex justify-center'>
                <span className='text-black font-bold not-italic lg:hidden text-xl sm:text-2xl mx-auto md:text-[27px] bg-[#FCD503] rounded-[40px] p-2 px-4'>
                    Choose your perfect meal
                </span>
            </div>
        </div>
    )
}

export default Eat;