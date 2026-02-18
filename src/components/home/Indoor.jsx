"use client"
import React from "react";
import Marquee from "react-fast-marquee";

const Indoore = ({ data }) => {
  return (
    <div className="w-full aspect-[400/800] sm:aspect-[600/800] md:aspect-[800/800] lg:aspect-[1256/800] xl:aspect-[1456/800] relative overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={"/indoor.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_30.77%,rgba(0,0,0,0)_100%)] gap-8 ">
        <div className="flex flex-col items-center  px-4 text-center">
          {/* Experience the... */}
          <div className="text-white font-['Anek_Latin'] font-normal text-[17px] leading-[100%] md:text-4xl lg:text-4xl mt-10 md:mt-14">
            {data?.sub || "Experience the"}
          </div>

          {/* Indoor AC Theme Park */}
          <div className="text-white font-['Anek_Latin'] font-bold text-[40px] leading-tight md:text-6xl  lg:text-[55px] ">
            {data?.heading || <>Indoor AC <br className="md:hidden"/> Theme Park</>}
          </div>

          {/* Button */}
          <span className="rounded-[50px] font-['Anek_Latin'] mx-auto mt-2 bg-[#FCD503]  hover:text-[25px] p-2 px-8 font-bold text-lg md:text-2xl">
            Book Your Tickets Now
          </span>
        </div>
        
        <div className="bg-white flex items-center self-end  h-8 w-full">
          <Marquee>
            <div className="flex gap-4 items-center">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#FBBC05" />
                  </svg>
                  <span className="text-[#80050A]"> Indoor A/C Theme park</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Indoore;