import React from 'react';
import { Navigation, ArrowRight } from 'lucide-react';

const Cities = () => {
  const cities = [
    { name: 'Mumbai', distance: '266 km', initial: 'M', color: 'bg-gradient-to-b from-[#CD3F0D] to-[#80050A]' },
    { name: 'Pune', distance: '207 km', initial: 'P', color: 'bg-gradient-to-b from-[#FBBC05] to-[#FCD503]' },
    { name: 'Nashik', distance: '90 km', initial: 'N', color: 'bg-gradient-to-b from-[#CD3F0D] to-[#80050A]' },
    { name: 'Ahmednagar', distance: '83 km', initial: 'A', color: 'bg-gradient-to-b from-[#FBBC05] to-[#FCD503]' },
  ];

  return (
    <div className="flex font-['Anek_Latin'] flex-col md:flex-row gap-6 p-8 bg-gray-50 items-stretch md:px-12 mx-auto font-sans">
      
      {/* Left Overview Card */}
      <div 
        className="flex-1 p-10 rounded-[40px] text-white flex flex-col justify-center"
        style={{ background: 'linear-gradient(180deg, #CD3F0D 0%, #80050A 100%)' }}
      >
        <div className="inline-flex items-center gap-2 bg-white/20 w-fit px-4 py-1.5 rounded-full text-sm mb-6">
          <Navigation size={14} className="rotate-45" />
          <span className="font-medium">Overview</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Planning Your Trip to Shirdi?
        </h2>
        
        <p className="text-white/90 text-sm leading-relaxed mb-4">
          Here are the essential details to make your visit easy and convenient.
        </p>
        
        <p className="text-white/90 text-sm leading-relaxed">
          Shirdi is located in <span className="font-bold text-white">Ahmednagar district of Maharashtra</span>. 
          The town receives visitors throughout the year and is accessible from all major cities.
        </p>
      </div>

      {/* Right Major Cities Card */}
      <div className="flex-1 bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Major Cities</h3>
        
        <div className="space-y-4">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 bg-gray-50/50 rounded-2xl group cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${city.color}`}>
                  {city.initial}
                </div>
                <span className="font-semibold text-gray-700">{city.name}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-bold text-sm">{city.distance}</span>
                <ArrowRight size={16} className="text-[#CD3F0D]" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-[#FFF9F2] rounded-xl border-l-4 border-[#CD3F0D]">
          <p className="text-[12px] text-gray-600 leading-snug">
            Well connected to other parts of India by <span className="font-bold">air, road, and rail</span>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Cities;