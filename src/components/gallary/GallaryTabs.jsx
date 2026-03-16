"use client";
import React, { useState } from 'react';

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState('AMBIANCE');

  const tabs = [
    'AMBIANCE',
    'TEERTH YATRA',
    'LANKA DAHAN',
    'SABKA MALIK EK',
    'DWARKAMAI',
  ];

  // Content mapping for each tab
  const tabData = {
    'AMBIANCE': {
      description: "Sai Teerth, located in the holy town of Shirdi, is India's first devotional theme park dedicated to the revered saint Sai Baba. The park boasts an impressive ambiance with exceptional architectural design and finishing that is well-managed, clean and highly innovative.",
      images: [
        '/i11.png',
        '/i12.png',
        '/i13.png',
        '/i14.png',
        '/i15.png',
        '/i16.png',
      ]
    },
    'TEERTH YATRA': {
      description: "Embark on a divine journey across India's most famous pilgrimage sites. Experience the spiritual essence of the 12 Jyotirlingas and Char Dham in one spectacular robotic show.",
      images: [
         '/i21.png',
        '/i22.png',
        '/i23.png',
        '/i24.png',
        '/i25.png',
        '/i26.png',
      
      ]
    },
    'LANKA DAHAN': {
      description: "Witness the epic 5D experience of Hanuman's heroics in Lanka. Feel the heat, the wind, and the thrill of the battle in this state-of-the-art cinematic attraction.",
      images: [
        '/i31.png',
        '/i32.png',
        '/i33.png',
      ]
    },
    'SABKA MALIK EK': {
      description: "A soul-stirring hour-long show portraying the life and teachings of Sai Baba. This production uses giant screens and incredible acoustics to bring history to life.",
      images: [

         '/i41.png',
        '/i42.png',
      ]
    },
    'DWARKAMAI': {
      description: "Step into a world-class animatronics show where Sai Baba himself speaks to the devotees. A truly immersive experience that bridges the gap between the past and present.",
      images: [
      '/i51.png',
        '/i52.png',
        '/i53.png',
      ]
    }
  };

  return (
    <section className="font-['Anek_Latin'] bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Badge */}
        <span className="inline-block bg-[#FFD700] text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-widest mb-4 text-black">
          India's First Devotional Theme Park
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Attractions at <span className="text-[#5A0308]">Sai Teerth</span> Theme Park
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-10 font-medium">
          Sai Teerth blends devotion, technology, and entertainment, offering a 
          must-visit experience for families and devotees. Explore ambiance, attractions, and shows.
        </p>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-around items-center min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-xs font-bold transition-all duration-300 border-b-4 ${
                  activeTab === tab
                    ? 'border-[#CD3F0D] text-[#CD3F0D]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-xl border border-gray-50 transition-all duration-500">
          <div className="text-left mb-10 animate-fadeIn">
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-medium">
              {tabData[activeTab].description}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabData[activeTab].images.map((src, index) => (
              <div 
                key={`${activeTab}-${index}`} 
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md transition-all duration-500 hover:shadow-2xl animate-scaleIn"
              >
                <img
                  src={src}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; scale: 0.95; }
          to { opacity: 1; scale: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.4s ease-out forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default GalleryTabs;