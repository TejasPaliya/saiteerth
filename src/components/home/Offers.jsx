"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Offers = ({ heading, offersList = [] }) => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-[100vw] mx-auto bg-[url('/circle-bg.png')] bg-bottom bg-no-repeat bg-[length:100%_100%]">
      <div className="md:p-2 flex flex-col">
        <div className="flex max-lg:justify-center justify-between items-center px-4">
          <div className="text-[#892201] font-['Anek_Latin'] font-bold text-center text-[40px] mt-4 leading-[100%] md:text-5xl lg:text-[50px] mb-8">
            {heading || "Exclusive Offers & Packages"}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 max-lg:hidden">
            <button className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3" onClick={() => swiperRef.current?.slidePrev()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
                <path d="M13.0405 27.3469C13.9121 28.1805 15.3252 28.1802 16.1965 27.3469C17.0683 26.5128 17.0683 25.161 16.1962 24.3269L7.6205 16.1222L32.4539 16.1199C33.6864 16.1196 34.6853 15.1639 34.6853 13.9841C34.685 12.8049 33.6861 11.8494 32.4536 11.8494L7.61931 11.8517L16.1971 3.64527C17.0686 2.81139 17.0686 1.45908 16.1971 0.625481C15.7611 0.208683 15.1901 0 14.6188 0C14.0478 0 13.4768 0.208683 13.0408 0.625196L0.653739 12.4766C0.235073 12.8769 0 13.4198 0 13.9864C0.000297559 14.5529 0.23537 15.0955 0.654036 15.4967L13.0405 27.3469Z" fill="#80050A"/>
              </svg>
            </button>
            <button className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3" onClick={() => swiperRef.current?.slideNext()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
                <path d="M21.6448 27.3469C20.7732 28.1805 19.3601 28.1802 18.4888 27.3469C17.617 26.5128 17.617 25.161 18.4891 24.3269L27.0648 16.1222L2.23139 16.1199C0.998898 16.1196 -1.14441e-05 15.1639 -1.14441e-05 13.9841C0.000286102 12.8049 0.999195 11.8494 2.23169 11.8494L27.066 11.8517L18.4883 3.64527C17.6167 2.81139 17.6167 1.45908 18.4883 0.625481C18.9242 0.208683 19.4952 0 20.0665 0C20.6375 0 21.2085 0.208683 21.6445 0.625196L34.0316 12.4766C34.4502 12.8769 34.6853 13.4198 34.6853 13.9864C34.685 14.5529 34.4499 15.0955 34.0313 15.4967L21.6448 27.3469Z" fill="#80050A"/>
              </svg>
            </button>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1.2, centeredSlides: true },
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1300: { slidesPerView: 4.2 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={offersList.length > 4}
            className="w-full px-4"
          >
            {offersList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="max-w-[400px] mx-auto w-full shadow-[-2px_17px_16px_4px_rgba(0,0,0,0.15)] rounded-[20px] overflow-hidden bg-white mb-10">
                  <img
                    src={"http://13.48.85.216:1337"+item.card_image?.url }
                    alt={item.name}
                    className="w-full aspect-[415/237] object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="text-[#80050A] font-semibold text-xl sm:text-[24px] md:text-[26px] line-clamp-1">
                      {item.name}
                    </div>
                    <ul className="list-disc ml-5 mt-2 text-[#474747] font-normal text-sm h-[60px] overflow-hidden">
                      {item.point?.map((p) => (
                        <li key={p.id} className="line-clamp-2">{p.point}</li>
                      )) || <li>No details available</li>}
                    </ul>
                    <div className="flex gap-3 mt-5">
                      <button className="bg-[#80050A] flex-1 rounded-[12px] py-2 text-center font-semibold text-white hover:bg-red-900 transition-colors">
                        Book Now
                      </button>
                      <button className="bg-[#FEB22A] flex-1 rounded-[12px] py-2 text-center font-semibold text-[#7F050A] hover:bg-yellow-500 transition-colors">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <span className="rounded-[50px] font-['Anek_Latin'] mx-auto mt-6 bg-[#FCD503] hover:scale-105 transition-transform p-2 px-8 font-bold text-lg md:text-2xl">
          Explore More offers
        </span>
        <div className="h-12 w-full"></div>
      </div>
    </div>
  );
};

export default Offers;