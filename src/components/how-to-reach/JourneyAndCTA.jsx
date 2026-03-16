import React from 'react';
import { Plane, TrainFront, Bus, MapPin, Clock, Navigation, Compass, MoveRight } from 'lucide-react';

const JourneyAndCTA = () => {

  const mainGradient = "linear-gradient(180deg, #CD3F0D 0%, #80050A 100%)";

  return (
    <div className="font-['Anek_Latin'] bg-[#FFFBF7] min-h-screen pb-20">
      
    

      {/* 2. SPIRITUAL JOURNEY CTA SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div 
          style={{ background: mainGradient }} 
          className="rounded-[50px] p-12 md:p-20 text-center text-white shadow-2xl shadow-[#80050A]/30 relative overflow-hidden"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-8">
            <Navigation size={14} className="rotate-45 fill-white" />
            <span className="text-xs font-bold uppercase tracking-widest">Ready to Visit?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
            Plan Your Spiritual Journey <br className="hidden md:block" /> to Shirdi Today
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-lg font-medium mb-12">
            Experience the divine blessings of Sai Baba at the sacred Shirdi temple. Your journey of faith begins here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href='https://maps.app.goo.gl/yYvcYSNkhXZKHvcM9?g_st=iwb' className="bg-white text-[#CD3F0D] px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-3">
              <MapPin size={20} className="fill-[#CD3F0D]/20" />
              Get Directions
              <MoveRight size={20} />
            </a>
            
          
          </div>
        </div>
      </section>

    </div>
  );
};

export default JourneyAndCTA;