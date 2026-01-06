import React from 'react'

const PlanVisit = () => {
  return (
    <div className="bg-[url('/plan-visit.png')] bg-cover bg-center flex flex-col p-6 md:p-12 lg:p-16 items-center w-full">
      {/* Main Title */}
      <div className='font-anek font-semibold text-[28px] leading-[32px] sm:text-[36px] sm:leading-[40px] md:text-[49px] md:leading-[49px] lg:text-[70px] lg:leading-[76px] text-center text-white mb-2'>
        Plan your visit with ease
      </div>

      {/* Subtitle */}
      <div className="font-anek font-medium text-[16px] leading-[22px] sm:text-[18px] sm:leading-[24px] md:text-[20px] md:leading-[25px] lg:text-[31px] lg:leading-[31px] text-center text-white max-w-4xl">
        Everything you need to know to make the most of your exciting visit!
      </div>

      {/* Cards Container - Flex Column on Mobile, Row on Desktop */}
      <div className='flex flex-col lg:flex-row justify-center items-center mt-8 lg:mt-16 gap-8 md:gap-10 lg:gap-16 w-full'>

        {/* --- Card 1: Park Timings --- */}
        <div className='bg-white rounded-2xl p-6 flex flex-col items-center w-full max-w-[350px] lg:max-w-none lg:w-auto hover:shadow-lg transition-shadow duration-300'>
          <img className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' src="/schedule.png" alt="Schedule" />
          <div className="font-anek font-semibold text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] md:text-[38px] md:leading-[50px] lg:text-[47px] lg:leading-[69px] text-center text-[#CD3F0D] mt-2 mb-4">
            Park Timings
          </div>
          <div className="rounded-[22.5px] px-6 py-2 md:px-8 bg-[#CD3F0D] font-anek font-semibold text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] text-center text-white whitespace-nowrap cursor-pointer">
            View Schedule
          </div>
        </div>

        {/* --- Card 2: How To Reach --- */}
        <div className='bg-white rounded-2xl p-6 flex flex-col items-center w-full max-w-[350px] lg:max-w-none lg:w-auto hover:shadow-lg transition-shadow duration-300'>
          <img className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' src="/location.svg" alt="Location" />
          {/* Applied responsive text classes to match Card 1 */}
          <div className='font-anek font-semibold text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] md:text-[38px] md:leading-[50px] lg:text-[47px] lg:leading-[69px] text-center text-[#CD3F0D] mt-2 mb-4'>
            How To Reach?
          </div>
          <div className='rounded-[22.5px] px-6 py-2 md:px-8 bg-[#CD3F0D] font-anek font-semibold text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] text-center text-[#FFFFFF] whitespace-nowrap cursor-pointer'>
            Get Directions
          </div>
        </div>

        {/* --- Card 3: Park Map --- */}
        <div className='bg-white rounded-2xl p-6 flex flex-col items-center w-full max-w-[350px] lg:max-w-none lg:w-auto hover:shadow-lg transition-shadow duration-300 lg:px-12'>
          <img className='h-[48px] w-[48px] md:h-[56px] md:w-[56px]' src="/map.png" alt="Map" />
          {/* Applied responsive text classes to match Card 1 */}
          <div className='font-anek font-semibold text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] md:text-[38px] md:leading-[50px] lg:text-[47px] lg:leading-[69px] text-center text-[#CD3F0D] mt-2 mb-4'>
            Park Map
          </div>
          <div className='rounded-[22.5px] px-6 py-2 md:px-8 bg-[#CD3F0D] font-anek font-semibold text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] text-center text-[#FFFFFF] whitespace-nowrap cursor-pointer'>
            View Map
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlanVisit