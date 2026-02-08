import React from 'react'

const OfferSingleHero = ({ title, description, imageUrl }) => {
  return (
    <div>
      {/* Dynamic Image from Strapi */}
      <img 
        src={imageUrl || "/single-hero.png"} 
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
      <div className="text-[#80050A] cursor-pointer hover:bg-[#eab004] transition-colors font-['Anek_Latin'] text-[23px] font-bold leading-normal uppercase rounded-[41.5px] bg-[#FBBC05] p-4 py-2 mt-6 mx-auto w-fit">
        Avail This Offer
      </div>
    </div>
  )
}

export default OfferSingleHero
