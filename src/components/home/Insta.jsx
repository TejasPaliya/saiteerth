"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useRouter } from "next/navigation"
 

const API_BASE = "https://strapi.saiteerth.in";

const InstaCard = ({ handle, reelData }) => {
 const router = useRouter();
  // Helper to calculate "days ago"
  const getTimeAgo = (dateString) => {
    if (!dateString) return "Recently";
    const uploadDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - uploadDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? "Today" : `${diffDays} days ago`;
  };

  const videoUrl = reelData?.reel?.url ? `${API_BASE}${reelData.reel.url}` : "";

  return (
    <div className="relative aspect-[9/13] rounded-[22px] w-full overflow-hidden"  onClick={() => router.push(reelData.link)}>
      {/* Dynamic Video with Autoplay */}
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover block rounded-[46px]"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 rounded-[46px] bg-black/40 pointer-events-none"></div>

      {/* bottom info */}
      <div className="absolute bottom-0 left-0 w-full p-3 text-white z-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <img
              className="w-[30px] h-[36px]"
              src="/logo.png"
              alt=""
            />
            <div>
              <div className="font-['Anek_Latin'] font-semibold text-[20px] leading-[0.93]">
                {handle?.replace('@', '') || "Saiteerth"}
              </div>
              <div className="font-['Anek_Latin'] text-[10px] leading-[0.93]">
                {getTimeAgo(reelData?.upload_date)}
              </div>
            </div>
          </div>
          <img src="/insta.png" className="h-5 w-5" alt="" />
        </div>
      </div>
    </div>
  )
}

const Insta = ({ data }) => {
  // Use reels from data if available, otherwise fallback to empty array
  const reels = data?.reel || [];

  return (
    <div className="px-8 mt-16">
      {/* top header */}
      <div className="flex justify-between items-center max-w-[1600px] my-12  mx-auto">
        <div className="flex gap-2">
          <div className="relative inline-flex flex-col items-center">
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border-2 border-[#80050A] bg-white flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src={data?.logo?.url ? API_BASE + data.logo.url : "/insta-logo.png"}
                alt="Sai Teerth Theme Park"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="absolute -bottom-5 bg-[#80050A] rounded-full px-8 py-2 md:px-12 md:py-3 text-white font-['Anek_Latin'] font-bold text-xl md:text-[28px] leading-none tracking-tight shadow-md">
              {data?.followers || "15k"}
            </div>
          </div>

          <span className="flex flex-col justify-center gap-3 ml-4">
            <a href="https://www.instagram.com/saiteerth/" className="font-['Anek_Latin'] font-bold leading-[0.93] tracking-[-0.02em] text-[39px] md:text-[49px] text-[#80050A]">
              {data?.handle_name || "@saiteerth"}
            </a>
            <div className="font-['Anek_Latin'] font-medium leading-[0.93] tracking-[-0.02em] text-[18px] md:text-[30px] text-[#80050A]">
              {data?.handle_sub || "Sai Teerth Theme Park - Shardi"}
            </div>
          </span>
        </div>
          <a href="https://www.instagram.com/saiteerth/" className="rounded-[50px] max-md:hidden capitalize font-['Anek_Latin']  mt-6 bg-[#FCD503]  hover:text-[25px] p-2 px-8 font-bold text-lg md:text-2xl">
        Follow us now
          </a>

      </div>

      {/* swiper section */}
      <div className="mt-8">
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          grabCursor={true}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4.5 },
            1280: { slidesPerView: 5.5 },
          }}
        >
          {reels.map((item, i) => (
            <SwiperSlide key={item.id || i}>
              <InstaCard handle={data?.handle_name} reelData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Insta