import React from 'react';
import { FaMapMarkerAlt, FaTrain, FaBus, FaPlane, FaLandmark } from 'react-icons/fa';
import { FaRegClock, FaWater } from 'react-icons/fa6';
import { TbRoute } from "react-icons/tb";

const Nearby = () => {
  // Define custom colors based on your prompt
  const orangePrimary = '#CD3F0D';
  // The specific shadow from the prompt matches Tailwind's shadow-2xl closely,
  // but we can define an arbitrary one if strictly needed. Using shadow-2xl for simplicity here.

  const distanceCards = [
    {
      icon: <FaTrain className="text-2xl text-white" />,
      title: 'Railway Station',
      distance: '2.3 km',
      time: '5 min drive',
    },
    {
      icon: <FaBus className="text-xl text-white" />,
      title: 'Bus Stand',
      distance: '1.9 km',
      time: '4 min drive',
    },
    {
      icon: <FaPlane className="text-xl text-white" />,
      title: 'Airport',
      distance: '15.1 km',
      time: '20 min drive',
    },
    {
      icon: <FaLandmark className="text-xl text-white" />,
      title: 'Sai Baba Mandir',
      distance: '1 km',
      time: 'Walking distance',
    },
  ];

  return (
    <section className="relative font-['Anek_Latin'] w-full min-h-[800px] overflow-hidden font-sans flex flex-col items-center justify-start pt-12 pb-20">
      
      {/* --- Background Layers --- */}
      
      {/* 1. Placeholder Background Image (Replace url with your actual map image later) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }}
      ></div>

      {/* 2. The requested white gradient overlay */}
      {/* background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%); */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none"></div>


      {/* --- Content --- */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-6xl px-4">
        
        {/* Top Label */}
        <div className="flex items-center gap-2 bg-[#FFF4E8] px-4 py-2 rounded-full mb-4 shadow-sm">
          <TbRoute className="text-[#CD3F0D]" />
          <span className="text-sm font-semibold text-gray-700">Key Distances</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center font-['Anek_Latin']">
          Everything is <span style={{ color: orangePrimary }}>Nearby</span>
        </h2>

        {/* Central Circle - Sai Teerth */}
        {/* Implementation of specific gradient and shadow specs */}
        <div className="relative mb-12 flex justify-center w-full">
            <div 
                className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full text-white relative z-30 shadow-2xl"
                style={{
                    // The exact gradient requested
                    background: `linear-gradient(180deg, ${orangePrimary} 0%, #80050A 100%)`,
                    // The exact box-shadow requested (Tailwind's shadow-2xl is very similar: 0 25px 50px -12px rgb(0 0 0 / 0.25))
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
            >
                <FaMapMarkerAlt className="text-3xl mb-2" />
                <h3 className="text-xl md:text-2xl font-bold leading-tight">Sai Teerth</h3>
                <p className="text-xs md:text-sm opacity-90 font-light">Your Destination</p>
            </div>
            
            {/* Decorative lines extending from center circle (optional, based on image) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl pointer-events-none hidden md:block">
                 {/* Left Line */}
                <div className="absolute right-[60%] top-[60%] h-px w-24 bg-orange-400/30 origin-right rotate-[-20deg]"></div>
                 {/* Right Line */}
                 <div className="absolute left-[60%] top-[60%] h-px w-24 bg-orange-400/30 origin-left rotate-[20deg]"></div>
            </div>

        </div>


        {/* Distances Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 relative z-20">
          {distanceCards.map((card, index) => (
            <div key={index} className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-start transition-transform hover:-translate-y-1">
              {/* Icon Container */}
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: orangePrimary }}
              >
                {card.icon}
              </div>
              
              <h4 className="text-lg font-bold text-gray-800 mb-3">{card.title}</h4>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold text-gray-900" style={{color: orangePrimary}}>
                    {card.distance.split(' ')[0]}
                </span>
                <span className="text-lg font-semibold text-gray-700">
                    {card.distance.split(' ')[1]}
                </span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#FFF4E8] px-3 py-2 rounded-xl w-full">
                <FaRegClock className="text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">{card.time}</span>
              </div>
            </div>
          ))}
        </div>


        {/* Bottom Wide Card - Wet'n'Joy */}
        <div className="w-full max-w-xl bg-[#FFF9F3] rounded-[32px] p-4 md:p-6 shadow-md flex items-center justify-between relative z-20 border border-orange-100">
             <div className="flex items-center gap-4">
                 {/* Icon Box */}
                <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: orangePrimary }}
                >
                    <FaWater className="text-2xl md:text-3xl text-white" />
                </div>
                <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">Wet n Joy Water Park</h4>
                    <p className="text-sm text-gray-500">Entertainment nearby</p>
                </div>
             </div>
             
             <div className="text-right shrink-0 pl-4">
                 <span className="block text-2xl md:text-3xl font-extrabold" style={{color: orangePrimary}}>100m</span>
                 <span className="text-xs text-gray-500 font-medium">Next door</span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Nearby;