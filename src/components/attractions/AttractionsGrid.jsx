"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AttractionGrid({ attractionsList = [] }) {
  const [activeTab, setActiveTab] = useState("All Shows");

  const tabs = [
    "All Shows",
    "5D Shows",
    "Robotic Show",
    "Temple Rides",
    "Movies",
    "Other Activity",
  ];

  // Filtering logic: "All Shows" shows everything, others filter by show_type
  const filteredItems = activeTab === "All Shows" 
    ? attractionsList 
    : attractionsList.filter(item => item.show_type === activeTab);

  const STRAPI_BASE_URL = "http://13.48.85.216:1337";

  return (
    <div className="mx-auto p-4 sm:p-6 md:px-12 bg-[#fff9ef]">
      {/* Categories Bar */}
      <div className="flex justify-center ">
        <div className="bg-[#ffdb99] px-2 py-2 rounded-xl flex flex-wrap items-center justify-center gap-1 md:gap-4 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2 rounded-xl text-sm md:text-base font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#892201] text-white shadow-md" 
                  : "text-[#4a3728] hover:bg-[#f5cc84]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      <div className="bg-[#fdf6e9] border-[3px] border-[#892201] rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-black group cursor-pointer shadow-lg"
            >
              <video
                src={`${STRAPI_BASE_URL}${item.attraction_video?.url}`}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay with Title and Icon */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg drop-shadow-sm leading-tight">
                        {item.name}
                    </span>
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                        {item.show_type}
                    </span>
                  </div>
                  <div className="bg-[#a32e14] p-2 rounded-full transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={18} className="text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
            <p className="text-center text-[#4a3728] py-10 font-medium">No shows found in this category.</p>
        )}
      </div>
    </div>
  );
}