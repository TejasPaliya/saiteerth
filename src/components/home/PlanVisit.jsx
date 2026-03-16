import React from 'react'

const PlanVisit = () => {
  return (
    <div className="bg-[url('/plan-visit.png')] bg-cover bg-center flex flex-col p-6 md:p-12 lg:p-16 items-center w-full">
      
      <div className="font-['Anek_Latin'] font-semibold text-[28px] leading-[32px] sm:text-[36px] sm:leading-[40px] md:text-[49px] md:leading-[49px] lg:text-[55px] lg:leading-[56px] text-center text-white mb-2">
        Plan Your Visit With Ease
      </div>

      <div className="font-['Anek_Latin'] font-medium text-[16px] leading-[22px] sm:text-[18px] sm:leading-[24px] md:text-[20px] md:leading-[25px] lg:text-[25px] lg:leading-[31px] text-center text-white max-w-4xl">
        Everything you need to know to make the most of your exciting visit!
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:mt-16 gap-8 md:gap-10 lg:gap-16 w-full">

        <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-full max-w-[350px] hover:shadow-lg transition-shadow">
          <img className="h-[48px] w-[48px] md:h-[56px] md:w-[56px]" src="/schedule.png" />
          <div className="font-['Anek_Latin'] font-semibold text-[24px] md:text-[26px] md:text-[32px] lg:text-[38px] text-center text-[#CD3F0D] mt-2 mb-4">
            Park Timings
          </div>
          <div className="rounded-[22.5px] px-6 py-2 bg-[#CD3F0D] font-['Anek_Latin'] font-semibold text-white cursor-pointer">
            View Schedule
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-full max-w-[350px] hover:shadow-lg transition-shadow">
          <img className="h-[48px] w-[48px] md:h-[56px] md:w-[56px]" src="/location.svg" />
          <div className="font-['Anek_Latin'] font-semibold text-[24px] md:text-[26px] md:text-[32px] lg:text-[38px] text-center text-[#CD3F0D] mt-2 mb-4">
            How To Reach?
          </div>
          <a href='/how-to-reach' className="rounded-[22.5px] px-6 py-2 bg-[#CD3F0D] font-['Anek_Latin'] font-semibold text-white cursor-pointer">
            Get Directions
          </a>
        </div>

        <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-full max-w-[350px] hover:shadow-lg transition-shadow">
          <img className="h-[48px] w-[48px] md:h-[56px] md:w-[56px]" src="/map.png" />
          <div className="font-['Anek_Latin'] font-semibold text-[24px] md:text-[26px] md:text-[32px] lg:text-[38px] text-center text-[#CD3F0D] mt-2 mb-4">
           Group Enquiry
          </div>
          <a href='/group' className="rounded-[22.5px] px-6 py-2 bg-[#CD3F0D] font-['Anek_Latin'] font-semibold text-white cursor-pointer">
            Enquire Now
          </a>
        </div>

      </div>
    </div>
  )
}

export default PlanVisit
