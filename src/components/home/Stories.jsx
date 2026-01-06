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
    <div className="mt-8 flex flex-col items-center">
      <div className="text-[#892201] font-bold text-5xl">
        Watch Stories Come Alive!
      </div>

      <div className="text-black text-center text-xl">
        6 spectacular shows powered by 5D tech <br />
        just 5 mins from temple
      </div>

      {/* SCROLL TRAP ZONE */}
      <div
        ref={containerRef}
        onWheel={onWheel}
        className="w-full overflow-hidden"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4.5}
          spaceBetween={8}
          speed={600}
        >
          {[1,2,3,4,5,6,7,8,9].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[2/3]">
                <video
                  src="/stories.mp4"
                  loop
                  muted
                  //autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stories;
