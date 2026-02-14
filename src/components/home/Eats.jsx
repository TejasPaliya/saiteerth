import React from 'react'
import Marquee from "react-fast-marquee";

const Eat = ({ data }) => {
    // Map dynamic images from Strapi, fallback to static if empty
    const apiImages = data?.images?.map(img => img.url) || [];
    const displayImages = apiImages.length > 0 ? apiImages : ["/food.jpg", "/food.jpg", "/food.jpg"];

    return (
        <div className='bg-[#CD3F0D] py-8'>
            <div className='flex justify-between max-lg:justify-center max-w-[1600px] mx-auto items-center px-8'>
                <span className="text-white font-bold not-italic text-[40px] sm:text-5xl md:text-[55px] font-['Anek_Latin']">
                    {data?.heading || "Delightful Eats"}
                </span>

                <span className="rounded-[50px] capitalize font-['Anek_Latin'] mt-6 bg-[#FCD503] max-lg:hidden hover:text-[25px] p-2 px-8 font-bold text-lg md:text-2xl">
                    Choose your perfect meal
                </span>
            </div>

            <div className='max-md:mt-8 mt-8'>
                <Marquee gradient={true} gradientColor={[205, 63, 13]} gradientWidth={100}>
                    <div className='flex gap-6 mx-3'>
                        {displayImages.map((src, index) => (
                            <div key={index} className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white flex justify-center items-center'>
                                <img className='rounded-[42px] w-full h-full object-cover' src={src} alt="food" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <div className='max-md:mt-8 mt-16 lg:hidden'>
                <Marquee direction="right" gradient={true} gradientColor={[205, 63, 13]} gradientWidth={100}>
                    <div className='flex gap-6 mx-3'>
                        {displayImages.map((src, index) => (
                            <div key={index} className='rounded-[42px] p-0.5 px-1 md:p-1 md:px-2 aspect-[275/196] w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] bg-white flex justify-center items-center'>
                                <img className='rounded-[42px] w-full h-full object-cover' src={src} alt="food" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <div className='flex justify-center'>
                <span className="rounded-[50px] capitalize font-['Anek_Latin'] mx-auto mt-6 bg-[#FCD503] lg:hidden hover:text-[25px] p-2 px-8 font-bold text-lg md:text-2xl">
                    Choose your perfect meal
                </span>
            </div>
        </div>
    )
}

export default Eat;