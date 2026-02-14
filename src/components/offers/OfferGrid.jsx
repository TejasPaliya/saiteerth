import React from 'react'

const OfferCard = () => {
  return (
    <div className="max-w-[400px] w-full shadow-[-2px_17px_16px_4px_rgba(0,0,0,0.20)] rounded-[20px] p-1 bg-white">
      <img
        src="/offers.png"
        alt=""
        className="w-full aspect-[415/237] rounded-[20px_20px_0_0]"
      />
      <div className="p-4 bg-white">
        <div className="text-[#80050A] font-semibold text-xl sm:text-[28px]">
          Small Group Offer
        </div>
        <ul className="list-disc ml-4 text-[#474747] text-sm sm:text-base">
          <li>Book 5 or more tickets and get 10% off</li>
          <li>Online booking only bro</li>
        </ul>
        <div className="flex gap-3 mt-3">
          <span className="bg-[#80050A] flex-1 rounded-[12px] p-2 text-center font-semibold text-white">
            Book Now
          </span>
          <span className="bg-[#FEB22A] flex-1 rounded-[12px] p-2 text-center font-semibold text-[#7F050A]">
            View More
          </span>
        </div>
      </div>
    </div>
  )
}

const OfferGrid = () => {
  return (
    <div>
           <div className="font-['Anek_Latin'] font-bold text-center mt-16 text-[#80050A] leading-[1] text-[40px] sm:text-[50px] md:text-[54px] lg:text-[60px] mx-auto">Exclusive Offers & Packages</div>
           
        <div className=' flex flex-wrap justify-center mt-12'></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center max-w-7xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <OfferCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default OfferGrid
