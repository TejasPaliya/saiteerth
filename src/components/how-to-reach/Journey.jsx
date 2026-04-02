import React from 'react';
import { Plane, TrainFront, Bus, MapPin, Clock, Navigation } from 'lucide-react';

const Journey = () => {
  const travelData = [
    {
      type: 'By Air',
      tag: 'Fastest Route',
      icon: <Plane className="w-8 h-8 text-white" />,
      locationType: 'Airport',
      locationName: 'Sri Sai Baba International Airport at Kakadi',
      distance: '15.1 km',
      time: '20 min drive',
      details: [
        { label: 'Connections', text: 'Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Delhi, Kolkata' },
        { label: 'Transport', text: 'Taxis & AC buses to Shirdi. Budget buses from Pune Airport' }
      ]
    },
    {
      type: 'By Train',
      tag: 'Most Popular',
      icon: <TrainFront className="w-8 h-8 text-white" />,
      locationType: 'Railway Station',
      locationName: 'Sainagar Shirdi on Puntamba-Shirdi link',
      distance: '3 km',
      time: '5-7 min drive',
      details: [
        { label: 'Connections', text: 'Mumbai, Pune, Chennai, Mysore, Tirupati, Delhi - Daily trains' },
        { label: 'Transport', text: 'Trust buses, taxis, auto-rickshaws available at station' }
      ]
    },
    {
      type: 'By Road',
      tag: 'Most Flexible',
      icon: <Bus className="w-8 h-8 text-white" />,
      locationType: 'Bus Stand',
      locationName: 'Shirdi Bus Stand - Interstate & Intrastate',
      distance: '1.9 km',
      time: '4-5 min drive',
      details: [
        { label: 'Bus Options', text: 'AC sleeper, seater, non-AC options from all major cities' },
        { label: 'Routes', text: 'Mumbai via Eastern Express Highway. Well-maintained roads' }
      ]
    }
  ];

  const orangeGradient = "linear-gradient(180deg, #CD3F0D 0%, #80050A 100%)";

  return (
    <section className="bg-[#FFF9F5] py-16 px-4 font-['Anek_Latin']">
      {/* Header Section */}
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-4 border border-gray-100">
          <Navigation size={14} className="text-[#CD3F0D] fill-[#CD3F0D]" />
          <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Travel Options</span>
        </div>
        <h2 className="text-5xl font-extrabold text-[#333] mb-2">
          Choose Your <span className="text-[#80050A]">Journey</span>
        </h2>
        <p className="text-gray-500 font-medium italic">Multiple convenient ways to reach Shirdi</p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {travelData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[40px] overflow-hidden flex flex-col shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]">
            
            {/* Top Gradient Part */}
            <div 
              style={{ background: orangeGradient }} 
              className="pt-12 pb-8 flex flex-col items-center text-white"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 ring-1 ring-white/30">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.type}</h3>
              <p className="text-xs opacity-80 mt-1">{item.tag}</p>
            </div>

            {/* Bottom Content Part */}
            <div className="p-8 flex-grow space-y-6">
              <div className="flex gap-2 items-start">
                <MapPin size={18} className="text-[#CD3F0D] mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-black uppercase leading-none mb-1">{item.locationType}</p>
                  <p className="text-[13px] text-black font-medium leading-snug">{item.locationName}</p>
                </div>
              </div>

              {/* Distance Highlight Box */}
              <div className="bg-[#FFF7F2] rounded-2xl p-4 flex justify-between items-center relative overflow-hidden">
                <div>
                  <p className="text-[11px] font-bold text-black uppercase tracking-tighter">Distance</p>
                  <p className="text-2xl font-extrabold text-[#CD3F0D]">{item.distance}</p>
                  <p className="text-[10px] text-black font-bold">{item.time}</p>
                </div>
                <Clock size={20} className="text-[#CD3F0D] opacity-60" />
              </div>

              {/* Detail Sections */}
              {item.details.map((detail, dIdx) => (
                <div key={dIdx} className="space-y-1">
                  <h4 className="text-[13px] font-extrabold text-black">{detail.label}</h4>
                  <p className="text-xs text-black leading-relaxed font-medium">
                    {detail.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;