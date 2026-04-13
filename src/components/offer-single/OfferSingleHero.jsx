import React from 'react'

const OfferSingleHero = ({ title, description, imageUrl, url }) => {
  return (
    <div>
      {/* Dynamic Image from Strapi */}
      <img 
        src={"https://strapi.saiteerth.in"+imageUrl || "/single-hero.png"} 
        className='w-full h-auto p-8 max-md:aspect-square max-xl:aspect-video aspect-[32/9]' 
        alt={title} 
      />

      {/* Dynamic Title */}
      <div className="text-[#AE3232] text-center font-['Anek_Latin'] text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[1.2] md:leading-[78px] mb-4">
        {title}
      </div>

      {/* Dynamic Description */}
      <div className="text-[#444] text-center font-['Anek_Latin'] text-[16px] px-8 leading-[24px] font-normal sm:text-[#696969] sm:text-[22px] md:text-[30px] sm:leading-[39px]">
        {description}
      </div>

      {/* CTA Button */}
     <div className="flex justify-center mt-8 md:mt-12 pb-16 md:pb-0">
        <a href={url} className="bg-[#FCD503] rounded-[41.5px] px-8 md:px-12 py-3 md:py-4 hover:bg-[#e5aa04] transition-colors w-full md:w-auto max-w-xs md:max-w-none">
          <span className="font-['Anek_Latin',sans-serif] font-bold text-[#000000] text-xl md:text-[29px] uppercase">
            AVAIL THIS OFFER
          </span>
        </a>
      </div>
    </div>
  )
}

export default OfferSingleHero
