"use client"
import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
const Youtube = () => {
    const swiperRef = useRef(null);
  return (
    <div className="md:p-8 mt-6 max-w-[1800px] mx-auto">
            <div className="text-[#892201] max-lg:text-center font-bold not-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-['Anek_Latin']">
         Voices of the <br className="md:hidden"/> Journey
        </div>
      <div className="flex max-lg:justify-center justify-between items-center">
      <div
        className=" text-black font-['Anek_Latin'] max-lg:text-center  font-normal not-italic leading-[20px] text-lg sm:text-lg md:text-2xl lg:text-[24px] sm:leading-[20px] md:leading-[30px] lg:leading-[31px] mb-8"
      >
 Discover unique travel perspectives from experts <br className="max-sm:hidden"/> who’ve explored Sai Tirth first-hand.
      </div>
        <div className="flex gap-2 max-lg:hidden">
          <span className="rounded-full bg-[#CD3F0D] h-fit p-2 py-3" onClick={() => swiperRef.current.slidePrev()}>
              
       <svg xmlns="http://www.w3.org/2000/svg" width="38" height="31" viewBox="0 0 38 31" fill="none">
  <path d="M14.2631 29.9107C15.2164 30.8225 16.7619 30.8221 17.7149 29.9107C18.6685 28.9983 18.6685 27.5199 17.7146 26.6075L8.33492 17.6336L35.4965 17.6311C36.8445 17.6308 37.9371 16.5855 37.9371 15.2951C37.9367 14.0053 36.8442 12.9603 35.4961 12.9603L8.33362 12.9628L17.7155 3.98701C18.6688 3.07496 18.6688 1.59586 17.7155 0.68412C17.2387 0.228247 16.6142 0 15.9893 0C15.3648 0 14.7402 0.228247 14.2634 0.683808L0.715027 13.6463C0.257111 14.0841 0 14.6779 0 15.2976C0.000325456 15.9172 0.257436 16.5107 0.715352 16.9495L14.2631 29.9107Z" fill="white"/>
</svg>
          </span>
          <span className="rounded-full bg-[#CD3F0D] h-fit p-2 py-3"  onClick={() => swiperRef.current.slideNext()}>
              
         <svg xmlns="http://www.w3.org/2000/svg" width="38" height="31" viewBox="0 0 38 31" fill="none">
  <path d="M23.674 29.9107C22.7207 30.8225 21.1751 30.8221 20.2222 29.9107C19.2686 28.9983 19.2686 27.5199 20.2225 26.6075L29.6022 17.6336L2.44061 17.6311C1.09257 17.6308 1.14441e-05 16.5855 1.14441e-05 15.2951C0.000335693 14.0053 1.09289 12.9603 2.44093 12.9603L29.6035 12.9628L20.2215 3.98701C19.2683 3.07496 19.2683 1.59586 20.2215 0.68412C20.6983 0.228247 21.3229 0 21.9478 0C22.5723 0 23.1969 0.228247 23.6737 0.683808L37.222 13.6463C37.68 14.0841 37.9371 14.6779 37.9371 15.2976C37.9367 15.9172 37.6796 16.5107 37.2217 16.9495L23.674 29.9107Z" fill="white"/>
</svg>
          </span>
        </div>
      </div>
       <Swiper
      loop={true}
      spaceBetween={20}
           breakpoints={{
          0: { slidesPerView: 1.3, centeredSlides:true },
          480: { slidesPerView: 1.5, centeredSlides:true },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1300: { slidesPerView: 3.5 },
          1880: { slidesPerView: 4 },
        }}
   onSwiper={(swiper) => (swiperRef.current = swiper)}

      className="w-full"
    >
      {[1, 2, 3, 4,5, 6,7 ,8].map((x) => (
        <SwiperSlide key={x}>
          <div className="max-w-[400px] w-full  ">
            <img
              src="/yt.png"
              alt=""
              className="w-full aspect-[540/300] "
            />
            <span className="text-black font-normal not-italic text-base sm:text-lg md:text-[20px] [leading-trim:both] [text-edge:cap]">Sai Teerth Theme Park Shirdi • Complete Tour & Guide • Ticket Prices, Attractions, Places to Visit</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Youtube;
