"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Stories = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const isThrottled = useRef(false);
  const [lockScroll, setLockScroll] = useState(false);

  // detect when slider enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLockScroll(entry.isIntersecting);
      },
      { threshold: 0.6 } // most of slider visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const onWheel = (e) => {
    if (!lockScroll) return;
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    // allow page scroll at edges
    if (e.deltaY > 0 && swiper.isEnd) {
      setLockScroll(false);
      return;
    }
    if (e.deltaY < 0 && swiper.isBeginning) {
      setLockScroll(false);
      return;
    }

    e.preventDefault(); // HARD STOP PAGE SCROLL

    if (isThrottled.current) return;
    isThrottled.current = true;

    if (e.deltaY > 0) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }

    setTimeout(() => {
      isThrottled.current = false;
    }, 120);
  };

  return (
    <div
      className="pt-16 flex flex-col items-center bg-[url('/stories-bg.jpg')]  
  bg-[url('/round-bg.png')]
  bg-no-repeat
  bg-top
  bg-[length:100%_auto] "
    >
   <div className="flex flex-col items-center gap-4 px-4">
  {/* Heading: 30px on mobile (Anek), 69px on desktop */}
  <div className="text-[#892201] text-center font-['Anek_Latin'] font-bold text-[40px] leading-[35px] md:text-[50px] lg:text-[50px] lg:leading-tight">
    Watch Stories Come Alive!
  </div>

  {/* Subtext: 14px on mobile (Poppins), 20px (xl) on desktop */}
  <p className="text-black text-center font-['Poppins'] font-normal text-[14px] leading-[19px] md:text-lg lg:text-xl lg:leading-normal max-w-2xl">
    6 spectacular shows powered by 5D technology, robotics, <br className="hidden md:block" />
    and stunning visuals, just 5 mins from the temple.
  </p>
</div>

      {/* SCROLL TRAP ZONE */}
      <div
        ref={containerRef}
        onWheel={onWheel}
        className="w-full overflow-hidden mt-16"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4.5}
          spaceBetween={30}
          loop={true}
          speed={600}
            breakpoints={{
            0: { slidesPerView: 1.3,  spaceBetween:10, centeredSlides:true },
            480: { slidesPerView: 1.3, spaceBetween:10, centeredSlides:true },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.2 },
            1300: { slidesPerView: 4.2, spaceBetween:35 },
            1880: { slidesPerView: 4.7, spaceBetween:40 },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[2/3] relative overflow-hidden">
                <video
                  src="/stories.mp4"
                  loop
                  muted
                  className="w-full h-full object-cover"
                />

                {/* bottom overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-[linear-gradient(0deg,#4A0202_0%,rgba(64,0,0,0)_100%)] flex justify-between">
                  <p className="text-white font-['Anek_Latin'] font-semibold text-[31px] leading-[35px] tracking-normal">Kaliya Mardan </p>
                 <span className="rounded-full p-3 flex justify-center items-center bg-[#892201]">
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11.4443 8.69801C11.4322 9.24213 10.9812 9.69296 10.4373 9.70507C9.89286 9.7171 9.46152 9.28575 9.47364 8.74127L9.59201 3.38662L1.6669 11.3103C1.27352 11.7035 0.649793 11.7173 0.27332 11.3408C-0.102875 10.9644 -0.089007 10.3408 0.304283 9.94747L8.22968 2.02353L2.87383 2.14202C2.32962 2.15404 1.89809 1.72252 1.91021 1.1784C1.91631 0.906295 2.03193 0.657492 2.21424 0.475185C2.39645 0.292972 2.64525 0.177351 2.91727 0.171157L10.6518 0.000215029C10.9131 -0.00565042 11.1614 0.092584 11.3422 0.273371C11.5229 0.454252 11.621 0.70242 11.6154 0.964021L11.4443 8.69801Z" fill="white"/>
                   </svg>
                 </span>

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
