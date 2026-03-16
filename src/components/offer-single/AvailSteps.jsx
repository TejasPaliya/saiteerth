import React from 'react'

const AvailSteps = ({ steps }) => {
  // Defensive check: if steps are missing, don't break the UI
  if (!steps) return null;

  // Create an array from the steps object for easier mapping
  const stepsList = [
    { num: "1", text: steps.first },
    { num: "2", text: steps.second },
    { num: "3", text: steps.third }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 mt-16 md:mt-32">
      
      {/* Responsive Heading */}
      <h2 className="font-['Anek_Latin',sans-serif] font-bold text-[#ae3232] text-4xl md:text-[65px] leading-tight text-center mb-8 md:mb-12">
        How to avail this offer?
      </h2>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {stepsList.map((step, index) => (
          <div 
            key={step.num} 
            className={`relative h-[300px] md:h-[343px] rounded-[40px] md:rounded-[62px] overflow-hidden bg-[url('/avail-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between p-6 md:p-8 py-8 md:py-12 ${
              index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Big Number */}
            <p className="font-['Anek_Latin',sans-serif] font-bold text-[100px] md:text-[150px] text-white/25 leading-[1] mt-4 md:mt-8 select-none">
              {step.num}
            </p>
            
            {/* Dynamic Text Description */}
            <p className="font-['Anek_Latin',sans-serif] font-normal text-white text-xl md:text-[28px] text-center leading-snug md:leading-[32px] max-w-[260px] md:max-w-[300px]">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive Button */}
      <div className="flex justify-center mt-8 md:mt-12 pb-16 md:pb-0">
        <button className="bg-[#FCD503] rounded-[41.5px] px-8 md:px-12 py-3 md:py-4 hover:bg-[#e5aa04] transition-colors w-full md:w-auto max-w-xs md:max-w-none">
          <span className="font-['Anek_Latin',sans-serif] font-bold text-[#000000] text-xl md:text-[29px] uppercase">
            AVAIL THIS OFFER
          </span>
        </button>
      </div>
    </div>
  )
}

export default AvailSteps