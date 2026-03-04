import React from 'react'

const Samadhi = ({ data }) => {
  // Defensive check for video data
  const videoSrc = data?.video?.url || "/samadhi.mp4";

  return (
    <div className="w-full aspect-[400/800] sm:aspect-[600/800] md:aspect-[800/800] lg:aspect-[1256/800] xl:aspect-[1456/800] relative overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={"http://13.48.85.216:1337"+videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col max-md:items-center items-start justify-between bg-[linear-gradient(180.49deg,#FFFFFF_2.72%,rgba(255,255,255,0)_21.26%)] gap-4 ">
        <div>
          <div className="text-[#80050A] max-md:text-[#FFF2F3] font-['Anek_Latin'] font-bold text-center text-[40px] leading-[100%] tracking-normal md:text-6xl lg:text-[79px] mt-14 lg:ml-10 lg:text-left">
            {/* Using the dynamic heading from Strapi */}
            {data?.heading || "Just 5mins From"} 
           
          </div>
        </div>
        <div className="bg-white self-end h-2 w-full"></div>
      </div>
    </div>
  )
}

export default Samadhi