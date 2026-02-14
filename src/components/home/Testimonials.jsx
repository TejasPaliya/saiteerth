"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ data }) => {
  // Use comments from API if available
  const testimonialsList = data?.comments || [];

  return (
    <div className="bg-[#CD3F0D] flex mt-8 md:mt-16 py-10 gap-10 max-lg:flex-col">
      <div className="text-white md:hidden font-['Anek_Latin'] font-bold text-center text-[38px] leading-[100%] lg:text-[55px] lg:text-left mb-2">
        {data?.heading || "Here’s what our guests says!"}
      </div>

      {/* LEFT BIG RATING BLOCK */}
      <div
        className="bg-[#7F050A] rounded-r-[37px] max-lg:rounded-[37px] font-extrabold
        text-[96px] leading-[1] text-center text-[#FFFFFF]
        flex flex-col p-8 py-12 gap-2 max-lg:mx-6"
      >
        <span>{data?.rating || "4.8"}</span>

        <div className="flex gap-2 justify-center">
          <img className="w-6 aspect-square" src="/star.png" alt="star" />
          <img className="w-6 aspect-square" src="/star.png" alt="star" />
          <img className="w-6 aspect-square" src="/star.png" alt="star" />
          <img className="w-6 aspect-square" src="/star.png" alt="star" />
          <img className="w-6 aspect-square" src="/half-star.png" alt="star" />
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
        <div className="text-white max-md:hidden font-['Anek_Latin'] font-bold text-center text-[42px] leading-[100%] lg:text-[55px] lg:text-left mb-6">
          {data?.heading || "Here’s what our guests says!"}
        </div>
        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={3.5}
            loop={testimonialsList.length > 3}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                centeredSlides: true
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
          >
            {/* If API has no comments, it will map nothing, showing an empty slider or you can fallback to [1,2,3,4,5] */}
            {(testimonialsList.length > 0 ? testimonialsList : [1, 2, 3, 4, 5]).map((item, i) => (
              <SwiperSlide key={item.id || i}>
                <div className="bg-white rounded-[38px] h-[280px] p-6 flex flex-col">
                  <div className="flex w-full justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <img className="w-[45px] aspect-square" src="/testimonial.png" alt="" />
                      <div>
                        <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[100%] tracking-normal mb-1">
                          Nishanth
                        </div>
                        <div className="flex gap-0.5 justify-center">
                          {[...Array(item.rating || 5)].map((_, index) => (
                            <img key={index} className="w-3 aspect-square" src="/star.png" alt="star" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <img className="w-8 h-7" src="/google.png" alt="" />
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[15px] leading-[20px] tracking-normal overflow-hidden">
                    {item.comment || "The theme park is Spiritual concept. It meets the quality and service wise an International theme park. The videos and 5D shows were amazing. It is very safe for SENIOR CITIZENS. A MUST DO WHEN AT SHIRDI"}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;