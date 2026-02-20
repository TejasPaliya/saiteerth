"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const Youtube = ({ data }) => {
  const swiperRef = useRef(null);
  // State to track which video is playing
  const [playingId, setPlayingId] = useState(null);

  // Helper function to extract YouTube ID
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoLinks = data?.link || [];

  return (
    <div className="md:p-8 mt-6 max-w-[1800px] mx-auto">
      <div className="text-[#892201] max-lg:text-center font-bold not-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-['Anek_Latin']">
        {data?.heading || <>Voices of the <br className="md:hidden" /> Journey</>}
      </div>
      <div className="flex max-lg:justify-center justify-between items-center">
        <div
          className=" text-black font-['Anek_Latin'] max-lg:text-center  font-normal not-italic leading-[20px] text-lg sm:text-lg md:text-2xl lg:text-[24px] sm:leading-[20px] md:leading-[30px] lg:leading-[31px] mb-8"
        >
          {data?.sub || <>Discover unique travel perspectives from experts <br className="max-sm:hidden" /> who’ve explored Sai Tirth first-hand.</>}
        </div>
        <div className="flex gap-2 max-lg:hidden">
          <span className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3 cursor-pointer" onClick={() => swiperRef.current.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
              <path d="M13.0405 27.3469C13.9121 28.1805 15.3252 28.1802 16.1965 27.3469C17.0683 26.5128 17.0683 25.161 16.1962 24.3269L7.6205 16.1222L32.4539 16.1199C33.6864 16.1196 34.6853 15.1639 34.6853 13.9841C34.685 12.8049 33.6861 11.8494 32.4536 11.8494L7.61931 11.8517L16.1971 3.64527C17.0686 2.81139 17.0686 1.45908 16.1971 0.625481C15.7611 0.208683 15.1901 0 14.6188 0C14.0478 0 13.4768 0.208683 13.0408 0.625196L0.653739 12.4766C0.235073 12.8769 0 13.4198 0 13.9864C0.000297559 14.5529 0.23537 15.0955 0.654036 15.4967L13.0405 27.3469Z" fill="#80050A" />
            </svg>
          </span>
          <span className="rounded-full bg-[#D9D9D9] h-fit p-2 py-3 cursor-pointer" onClick={() => swiperRef.current.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
              <path d="M21.6448 27.3469C20.7732 28.1805 19.3601 28.1802 18.4888 27.3469C17.617 26.5128 17.617 25.161 18.4891 24.3269L27.0648 16.1222L2.23139 16.1199C0.998898 16.1196 -1.14441e-05 15.1639 -1.14441e-05 13.9841C0.000286102 12.8049 0.999195 11.8494 2.23169 11.8494L27.066 11.8517L18.4883 3.64527C17.6167 2.81139 17.6167 1.45908 18.4883 0.625481C18.9242 0.208683 19.4952 0 20.0665 0C20.6375 0 21.2085 0.208683 21.6445 0.625196L34.0316 12.4766C34.4502 12.8769 34.6853 13.4198 34.6853 13.9864C34.685 14.5529 34.4499 15.0955 34.0313 15.4967L21.6448 27.3469Z" fill="#80050A" />
            </svg>
          </span>
        </div>
      </div>
      <Swiper
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.3, centeredSlides: true },
          480: { slidesPerView: 1.5, centeredSlides: true },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1300: { slidesPerView: 3.5 },
          1880: { slidesPerView: 4 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {videoLinks.map((item, index) => {
          const videoId = getYoutubeId(item.link);
          const isPlaying = playingId === videoId;

          return (
            <SwiperSlide key={item.id || index}>
              <div className="max-w-[400px] w-full block group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[540/300] bg-black">
                  {isPlaying ? (
                    /* Inline Embed Iframe */
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title="YouTube video player"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    /* Thumbnail and Play Button */
                    <div className="w-full h-full" onClick={() => setPlayingId(videoId)}>
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="YouTube Video"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-black font-normal not-italic text-base sm:text-lg md:text-[20px] leading-tight">
                  Sai Teerth Theme Park Shirdi • Video Experience
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Youtube;