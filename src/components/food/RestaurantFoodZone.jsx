"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';

export default function RestaurantFoodZone() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      title: 'Signature Meal',
      content: ['Mega Punjabi Meal', 'Chennai Meal', 'Mega Dahi Combo']
    },
    {
      title: 'Chennai Menia',
      content: ['Mega Punjabi Meal', 'Chennai Meal', 'Mega Dahi Combo']
    },
    {
      title: 'Street Food',
      content: ['Mega Punjabi Meal', 'Chennai Meal', 'Mega Dahi Combo']
    },
    {
      title: 'Drinks & Beverages',
      content: ['Mega Punjabi Meal', 'Chennai Meal', 'Mega Dahi Combo']
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Text & Video */}
        <div className="flex flex-col pr-0 lg:pr-8">
          <p className="text-[#D34E24] font-['Anek_Latin'] max-md:text-center text-sm font-semibold mb-2">
            Main Restaurant
          </p>
          <h2 className="text-4xl font-['Anek_Latin'] md:text-5xl max-md:text-center font-extrabold text-[#7A1517] leading-tight mb-4">
            Restaurant & <br /> Food Zone
          </h2>
          <p className="text-gray-800 text-base mb-8 font-['Anek_Latin']">
            Discover unique travel perspectives from experts <br className="hidden md:block" />
            who've explored Sai Tirth first-hand.
          </p>

          {/* Video Placeholder */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-[6px] border-[#F4B915] shadow-lg">
            {/* Placeholder Image */}
            <img 
              src="food-zone.png" 
              alt="Couple looking at sunset" 
              className="w-full h-full object-cover"
            />
            
            {/* Dark/Reddish Gradient Overlay (to match screenshot vibe) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-[#7A1517]/40"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#111] w-20 h-20 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                <Play className="text-white w-8 h-8 fill-white ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col gap-4 mt-4 lg:mt-0">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300 ${
                  isOpen ? 'bg-[#CD3F0D]' : 'bg-[#FAFAFA]'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="px-6 py-5 flex items-center justify-between">
                  <h3 className={`text-lg font-['Anek_Latin'] font-bold ${isOpen ? 'text-white' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="text-white w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-gray-600 w-5 h-5" />
                  )}
                </div>

                {/* Accordion Content */}
                {isOpen && item.content.length > 0 && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/20 mb-4 pt-4">
                      <ul className="space-y-3">
                        {item.content.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-white/90 font-['Anek_Latin'] text-sm font-medium">
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}