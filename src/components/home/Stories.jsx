"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Stories = ({ data, attractionsList = [] }) => {
  const swiperRef = useRef(null);

  return (
    <div
      className="pt-16 flex flex-col items-center bg-[url('/stories-bg.jpg')]  
      bg-[url('/round-bg.png')]
      bg-no-repeat
      bg-top
      bg-[length:100%_auto]"
    >
      <div className="relative flex flex-col items-center gap-4 px-4 w-full mb-8">
        <div className="text-[#892201] text-center font-['Anek_Latin'] font-bold text-[40px] leading-[35px] md:text-[50px] lg:text-[50px] lg:leading-tight">
          {data?.heading || "Other Attractions "}
        </div>

        <p className="text-black text-center font-['Poppins'] font-normal text-[14px] leading-[19px] md:text-lg lg:text-xl lg:leading-normal max-w-2xl">
          {data?.sub || "Experience Sai Baba’s life and teachings through immersive 5D shows, virtual pilgrimages, and powerful narratives."}
        </p>

        {/* Navigation Arrows */}
        <div className="absolute right-4 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 flex gap-2 max-lg:hidden">
          <button className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3 hover:bg-gray-300 transition-colors" onClick={() => swiperRef.current?.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
              <path d="M13.0405 27.3469C13.9121 28.1805 15.3252 28.1802 16.1965 27.3469C17.0683 26.5128 17.0683 25.161 16.1962 24.3269L7.6205 16.1222L32.4539 16.1199C33.6864 16.1196 34.6853 15.1639 34.6853 13.9841C34.685 12.8049 33.6861 11.8494 32.4536 11.8494L7.61931 11.8517L16.1971 3.64527C17.0686 2.81139 17.0686 1.45908 16.1971 0.625481C15.7611 0.208683 15.1901 0 14.6188 0C14.0478 0 13.4768 0.208683 13.0408 0.625196L0.653739 12.4766C0.235073 12.8769 0 13.4198 0 13.9864C0.000297559 14.5529 0.23537 15.0955 0.654036 15.4967L13.0405 27.3469Z" fill="#80050A"/>
            </svg>
          </button>
          <button className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3 hover:bg-gray-300 transition-colors" onClick={() => swiperRef.current?.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
              <path d="M21.6448 27.3469C20.7732 28.1805 19.3601 28.1802 18.4888 27.3469C17.617 26.5128 17.617 25.161 18.4891 24.3269L27.0648 16.1222L2.23139 16.1199C0.998898 16.1196 -1.14441e-05 15.1639 -1.14441e-05 13.9841C0.000286102 12.8049 0.999195 11.8494 2.23169 11.8494L27.066 11.8517L18.4883 3.64527C17.6167 2.81139 17.6167 1.45908 18.4883 0.625481C18.9242 0.208683 19.4952 0 20.0665 0C20.6375 0 21.2085 0.208683 21.6445 0.625196L34.0316 12.4766C34.4502 12.8769 34.6853 13.4198 34.6853 13.9864C34.685 14.5529 34.4499 15.0955 34.0313 15.4967L21.6448 27.3469Z" fill="#80050A"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        className="w-full overflow-hidden mt-8 md:mt-16"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={attractionsList.length > 4}
          speed={600}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 30 },
            1300: { slidesPerView: 4.2, spaceBetween: 35 },
            1880: { slidesPerView: 4.7, spaceBetween: 40 },
          }}
        >
          {attractionsList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="aspect-[2/3] relative overflow-hidden rounded-2xl group cursor-pointer">
                <video
                  src={"http://13.48.85.216:1337"+item.attraction_video?.url || "/stories.mp4"}
                   autoPlay
                   muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 w-full p-6 bg-[linear-gradient(0deg,#4A0202_0%,rgba(64,0,0,0)_100%)] flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                       {item.show_type}
                    </span>
                    <p className="text-white font-['Anek_Latin'] font-semibold text-[24px] md:text-[31px] leading-tight">
                      {item.name}
                    </p>
                  </div>
                  <a href={"/attractions/"+item.slug}>
                    <span className="rounded-full p-3 flex justify-center items-center bg-[#892201] hover:bg-[#a32b02] transition-colors mb-1">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4443 8.69801C11.4322 9.24213 10.9812 9.69296 10.4373 9.70507C9.89286 9.7171 9.46152 9.28575 9.47364 8.74127L9.59201 3.38662L1.6669 11.3103C1.27352 11.7035 0.649793 11.7173 0.27332 11.3408C-0.102875 10.9644 -0.089007 10.3408 0.304283 9.94747L8.22968 2.02353L2.87383 2.14202C2.32962 2.14202 1.89809 1.72252 1.91021 1.1784C1.91631 0.906295 2.03193 0.657492 2.21424 0.475185C2.39645 0.292972 2.64525 0.177351 2.91727 0.171157L10.6518 0.000215029C10.9131 -0.00565042 11.1614 0.092584 11.3422 0.273371C11.5229 0.454252 11.621 0.70242 11.6154 0.964021L11.4443 8.69801Z" fill="white"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stories;