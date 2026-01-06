"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="bg-[#CD3F0D] flex py-10 gap-10">
      
      {/* LEFT BIG RATING BLOCK */}
      <div
        className="bg-[#7F050A] rounded-r-[37px] font-extrabold
        text-[96px] leading-[1] text-center text-[#FFFFFF]
        flex flex-col p-8 py-12 gap-2"
      >
        <span>4.8</span>

        <div className="flex gap-2 justify-center">
          <img className="w-6 aspect-square" src="/star.png" />
          <img className="w-6 aspect-square" src="/star.png" />
          <img className="w-6 aspect-square" src="/star.png" />
          <img className="w-6 aspect-square" src="/star.png" />
          <img className="w-6 aspect-square" src="/half-star.png" />
        </div>

        <div className="font-['Anek_Latin'] font-bold text-[29px] text-center">
          Sai Teerth Devotional <br /> Theme Park
        </div>

        <div className="font-['Anek_Latin'] text-[20px]">
          Based on <span className="font-[600]">14,210</span> reviews
        </div>
      </div>

      {/* RIGHT SIDE SWIPER */}
      <div className="flex-1 min-w-0">
        <div className="font-['Anek_Latin'] font-bold text-[70px] mb-6">
          Here’s what our guests says!
        </div>
<div className="flex-1 overflow-hidden">
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={24}
    slidesPerView={2.5}
    loop={true}
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    className="w-full"
  >
    <SwiperSlide>
      <div className="bg-white rounded-[38px] h-[280px] p-6" />
    </SwiperSlide>

    <SwiperSlide>
      <div className="bg-white rounded-[38px] h-[280px] p-6" />
    </SwiperSlide>

    <SwiperSlide>
      <div className="bg-white rounded-[38px] h-[280px] p-6" />
    </SwiperSlide>

    <SwiperSlide>
      <div className="bg-white rounded-[38px] h-[280px] p-6" />
    </SwiperSlide>
  </Swiper>
</div>
        
      </div>
    </div>
  );
};

export default Testimonials;
