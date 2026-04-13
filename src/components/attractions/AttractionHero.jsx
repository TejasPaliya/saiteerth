import React from 'react'

const AttractionHero = ({ title, type, description, videoUrl }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex flex-col">

      {/* Dynamic bg video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        key={videoUrl}
        className="absolute inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src={videoUrl || "/hero.mp4"} type="video/mp4" />
      </video>

      {/* dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: '#000000C9' }}
      ></div>

      {/* content - Centered vertically and horizontally */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 pb-20">
        <div className="font-['Anek_Latin'] font-extrabold text-white text-center leading-[1.16] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[58px]">
          {title}
        </div>

        <div className="max-w-3xl mx-auto text-white text-center font-['Anek_Latin'] font-normal text-[18px] sm:text-[20px] md:text-[23px] lg:text-[27px] leading-[1.1] mt-4">
          {description}
        </div>
      </div>

      {/* bottom image - Anchored to bottom */}
      <img
        src="/bottom-design.png"
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        alt=""
      />
    </div>
  )
}

export default AttractionHero