import React from 'react'
import Marquee from 'react-fast-marquee'
const TopDestination = () => {
  return (
    <div >
              <div
        className=" text-[#892201]  font-['Anek_Latin'] font-bold not-italic text-3xl sm:text-4xl mt-8 md:text-5xl lg:text-[55px] text-center"
      >
         Shirdi's Top Tourist Destination
      </div>
      <div className='mt-6 md:mt-12'>
          <Marquee>
            <div className='gap-6 md:gap-8 flex ml-3 md:ml-5'>
                <div className="w-[200px] md:w-[250px] lg:w-[300px] aspect-[332/422] rounded-4xl bg-[url('/dest.png')] bg-cover bg-center flex flex-col justify-end items-center p-3 h-full ">
                <div className='text-[#892201] font-semibold not-italic text-base sm:text-[20px] md:text-[21px] rounded-4xl px-2 py-2 bg-white rounded-4xl'>Wet'nJoy Water Park</div>
                </div>
                <div className="w-[200px] md:w-[250px] lg:w-[300px] aspect-[332/422] rounded-4xl bg-[url('/dest.png')] bg-cover bg-center flex flex-col justify-end items-center p-3 h-full ">
                <div className='text-[#892201] font-semibold not-italic text-base sm:text-[20px] md:text-[21px] rounded-4xl px-2 py-2 bg-white rounded-4xl'>Wet'nJoy Water Park</div>
                </div>
                <div className="w-[200px] md:w-[250px] lg:w-[300px] aspect-[332/422] rounded-4xl bg-[url('/dest.png')] bg-cover bg-center flex flex-col justify-end items-center p-3 h-full ">
                <div className='text-[#892201] font-semibold not-italic text-base sm:text-[20px] md:text-[21px] rounded-4xl px-2 py-2 bg-white rounded-4xl'>Wet'nJoy Water Park</div>
                </div>
                <div className="w-[200px] md:w-[250px] lg:w-[300px] aspect-[332/422] rounded-4xl bg-[url('/dest.png')] bg-cover bg-center flex flex-col justify-end items-center p-3 h-full ">
                <div className='text-[#892201] font-semibold not-italic text-base sm:text-[20px] md:text-[21px] rounded-4xl px-2 py-2 bg-white rounded-4xl'>Wet'nJoy Water Park</div>
                </div>
                <div className="w-[200px] md:w-[250px] lg:w-[300px] aspect-[332/422] rounded-4xl bg-[url('/dest.png')] bg-cover bg-center flex flex-col justify-end items-center p-3 h-full ">
                <div className='text-[#892201] font-semibold not-italic text-base sm:text-[20px] md:text-[21px] rounded-4xl px-2 py-2 bg-white rounded-4xl'>Wet'nJoy Water Park</div>
                </div>

            </div>
          </Marquee>
      </div>
    </div>
  )
}

export default TopDestination