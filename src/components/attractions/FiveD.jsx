import React from 'react'

const FiveD = ({ data }) => {
  // Defensive check: if no data, don't render or show a fallback
  if (!data) return null;

  return (
    <div className="flex w-full justify-evenly mx-auto max-lg:flex-col gap-6 p-4 bg-[url('/5d-bg.png')] bg-bottom bg-no-repeat bg-[length:100%_100%] py-16">
      
      {/* Left Image (Still static for now as requested) */}
      <video
        src={"http://13.48.85.216:1337"+data.video.url}
        className="w-1/2 rounded-[20px] max-lg:w-full aspect-[7/8] object-cover max-w-xl"
controls
      >
          <source src={"http://13.48.85.216:1337"+data.video.url || "/hero.mp4"} type="video/mp4" />
        </video>

      <div className="flex flex-col w-1/2 max-lg:w-full justify-center gap-6 items-start">
        
        {/* Dynamic Title */}
        <div className="font-['Anek_Latin'] font-bold max-md:text-center text-[#892201] leading-[1.13] text-[40px] sm:text-[45px] md:text-[50px] lg:text-[69px]">
          {data.title}
        </div>

        {/* Dynamic Description */}
        {/* Added whitespace-pre-line so that line breaks from Strapi actually show up */}
        <div className="font-['Anek_Latin'] max-md:text-center font-normal text-[#000000] leading-[1.4] text-[16px] sm:text-[18px] md:text-[21px] lg:text-[25px] whitespace-pre-line">
          {data.description}
        </div>

        <a href='https://saiteerth.in/book/' className="rounded-[50px] font-['Anek_Latin']  mt-6 bg-[#FCD503] hover:scale-105 transition-transform p-2 px-8 font-bold text-lg md:text-2xl">
          Plan Your Visit Now
        </a>

      </div>
    </div>
  )
}

export default FiveD