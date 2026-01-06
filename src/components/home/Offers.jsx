"use client"
import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
const Offers = () => {
    const swiperRef = useRef(null);
  return (
    <div className="  max-w-[100vw] mx-auto mt-16 bg-[url('/circle-bg.png')] bg-bottom   bg-no-repeat
  bg-[length:100%_100%] ">
      <div className="md:p-2 flex flex-col">
        <div className="flex max-lg:justify-center justify-between items-center">
        <div className="text-[#892201] font-['Anek_Latin'] font-bold text-center text-[40px] mt-4 leading-[100%] md:text-5xl lg:text-[62px] mb-8">
          Exclusive Offers & Packages
        </div>
          <div className="flex gap-2 max-lg:hidden">
            <span className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3" onClick={() => swiperRef.current.slidePrev()}>
        
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="28"
                viewBox="0 0 35 28"
                fill="none"
              >
                <path
                  d="M13.0405 27.3469C13.9121 28.1805 15.3252 28.1802 16.1965 27.3469C17.0683 26.5128 17.0683 25.161 16.1962 24.3269L7.6205 16.1222L32.4539 16.1199C33.6864 16.1196 34.6853 15.1639 34.6853 13.9841C34.685 12.8049 33.6861 11.8494 32.4536 11.8494L7.61931 11.8517L16.1971 3.64527C17.0686 2.81139 17.0686 1.45908 16.1971 0.625481C15.7611 0.208683 15.1901 0 14.6188 0C14.0478 0 13.4768 0.208683 13.0408 0.625196L0.653739 12.4766C0.235073 12.8769 0 13.4198 0 13.9864C0.000297559 14.5529 0.23537 15.0955 0.654036 15.4967L13.0405 27.3469Z"
                  fill="#80050A"
                />
              </svg>
            </span>
            <span className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3"  onClick={() => swiperRef.current.slideNext()}>
        
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="28"
                viewBox="0 0 35 28"
                fill="none"
              >
                <path
                  d="M21.6448 27.3469C20.7732 28.1805 19.3601 28.1802 18.4888 27.3469C17.617 26.5128 17.617 25.161 18.4891 24.3269L27.0648 16.1222L2.23139 16.1199C0.998898 16.1196 -1.14441e-05 15.1639 -1.14441e-05 13.9841C0.000286102 12.8049 0.999195 11.8494 2.23169 11.8494L27.066 11.8517L18.4883 3.64527C17.6167 2.81139 17.6167 1.45908 18.4883 0.625481C18.9242 0.208683 19.4952 0 20.0665 0C20.6375 0 21.2085 0.208683 21.6445 0.625196L34.0316 12.4766C34.4502 12.8769 34.6853 13.4198 34.6853 13.9864C34.685 14.5529 34.4499 15.0955 34.0313 15.4967L21.6448 27.3469Z"
                  fill="#80050A"
                />
              </svg>
            </span>
          </div>
        </div>
         <div >
           <Swiper
        
                 spaceBetween={10}
               breakpoints={{
              0: { slidesPerView: 1.3,  centeredSlides:true },
              480: { slidesPerView: 1.3,  centeredSlides:true },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1300: { slidesPerView: 4 },
              1880: { slidesPerView: 4 },
            }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
                 loop={true}
                 className="w-full"
               >
                 {[1, 2, 3, 4,5, 6,7 ,8].map((x) => (
            <SwiperSlide key={x}>
              <div className="max-w-[400px] w-full shadow-[-2px_17px_16px_4px_rgba(0,0,0,0.20)] rounded-[20px] p-1 bg-white">
                <img
                  src="/offers.png"
                  alt=""
                  className="w-full aspect-[415/237] rounded-[20px_20px_0_0]"
                />
                <div className="p-4 bg-white">
                  <div className="text-[#80050A] font-semibold not-italic text-xl sm:text-[28px] md:text-[30px] lg:text-[31px]">
                    Small Group Offer
                  </div>
                  <ul className="list-disc ml-4 text-[#474747] font-normal not-italic text-sm sm:text-base md:text-[15px]">
                    <li>Book 5 or more tickets and get 10% off on regular ticket</li>
                    <li>Applicable for online bookings only</li>
                  </ul>
                  <div className="flex gap-3 mt-3">
                    <span className="bg-[#80050A] flex-1 rounded-[12px] p-1 px-2 md:p-2 md:px-4 text-center font-semibold text-[16px] md:text-[20px] text-white">
                      Book Now
                    </span>
                    <span className="bg-[#FEB22A] flex-1 rounded-[12px] p-1 px-2 md:p-2 md:px-4 text-center font-semibold text-[16px] md:text-[20px] text-[#7F050A]">
                      View More
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
                 ))}
               </Swiper>
         </div>
         <div className="h-4 w-full"></div>
              <span className="rounded-[50px] mx-auto mt-6 bg-[#FCD503] p-2 px-8 font-bold text-lg md:text-2xl">
            Explore More offers
          </span>
          <div className="h-8 w-full"></div>
      </div>
    </div>
  );
};

export default Offers;
