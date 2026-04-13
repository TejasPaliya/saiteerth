"use client";

import React, { useState } from 'react'

const PlanVisit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div 
            onClick={() => setIsModalOpen(true)}
            className="rounded-[22.5px] px-6 py-2 bg-[#CD3F0D] font-['Anek_Latin'] font-semibold text-white cursor-pointer"
          >
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl p-8 relative flex flex-col items-center max-w-[350px] w-full shadow-2xl animate-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img className="h-[48px] w-[48px] md:h-[56px] md:w-[56px] mb-4" src="/schedule.png" alt="Schedule" />
            
            <h3 className="font-['Anek_Latin'] font-semibold text-[28px] md:text-[32px] text-[#CD3F0D] mb-4 text-center">
              Park Timings
            </h3>
            
            <div className="font-semibold text-xl md:text-2xl text-gray-800 text-center mb-6">
              10:00 AM – 06:00 PM
            </div>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="rounded-[22.5px] px-8 py-2 bg-[#CD3F0D] hover:bg-[#a8330a] transition-colors font-['Anek_Latin'] font-semibold text-white cursor-pointer w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlanVisit
