import React from 'react'

const AttractionHero = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden flex flex-col">

      {/* bg video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* dark overlay exact */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: '#000000C9' }}
      ></div>

      {/* content */}
      <div className="flex-1 flex flex-col items-center justify-center lg:mt-40 z-10 mx-4">
        
      <div className="font-['Anek_Latin'] font-extrabold text-white text-center leading-[1.16] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[58px]">Lanka Dahan <span className="font-semibold">- 5D Show</span></div>


 <div className="max-w-3xl mx-auto text-white text-center font-['Anek_Latin'] font-normal text-[18px] sm:text-[20px] md:text-[23px] lg:text-[27px] leading-[1.1] mt-4">Spectacular 5D experience recounting the adventure of Hanuman in Lanka. Hanuman was the son of Vayu, the God of the wind, and a celestial nymph named Anjana.</div>


      </div>

      {/* bottom image */}
      <img
        src="/bottom-design.png"
        className="w-full z-10"
        alt=""
      />
    </div>
  )
}

export default AttractionHero
