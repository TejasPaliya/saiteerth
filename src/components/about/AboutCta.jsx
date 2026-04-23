import React from 'react';
import { Theater, Sparkles, Heart, Play } from 'lucide-react';

const AboutCta = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white font-['Anek_Latin']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Side */}
        <div className="space-y-8">
          <header>
            <h2 className="text-4xl md:text-5xl lg:text-6xl max-md:text-center font-extrabold text-[#892201] leading-tight mb-6">
            Shirdi’s top tourist destination
            </h2>
            <div className="space-y-6 text-black max-md:text-center text-lg leading-relaxed">
              <p>
            Sai Teerth is one of Shirdi’s top tourist destinations, offering a unique blend of devotion, technology, and immersive storytelling. Situated in the holy town of Shirdi, it brings spiritual experiences to life through 7+ engaging shows and modern attractions. As an indoor, air-conditioned theme park, Sai Teerth combines entertainment and learning, creating a meaningful experience for visitors of all age groups.
              </p>
          
            </div>
          </header>

          {/* Icons/Features Section */}
          <div className="flex  gap-8 pt-4">
            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 bg-[#cc3300] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Theater size={32} />
              </div>
              <span className="text-sm font-semibold text-black text-center uppercase tracking-tight">
                World-Class Shows
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 bg-[#cc3300] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Sparkles size={32} />
              </div>
              <span className="text-sm font-semibold text-black text-center uppercase tracking-tight">
                5D Experiences
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 w-32">
              <div className="w-16 h-16 bg-[#cc3300] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Heart size={32} />
              </div>
              <span className="text-sm font-semibold text-center uppercase tracking-tight">
                Spiritual Journey
              </span>
            </div>
          </div>
        </div>

        {/* Right Media Side */}
        <div className="relative group cursor-pointer">
          {/* Yellow/Orange Border Glow Effect */}
          <div className="absolute -inset-1 bg-[#fbb03b] rounded-[2.5rem] blur-[2px] transition duration-300 group-hover:blur-[4px]"></div>
          
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[2rem] border-4 border-[#fbb03b] bg-gray-200 shadow-2xl">
            {/* Placeholder Image */}
            <img 
              src="/about.png" 
              alt="Sai Teerth Theme Park" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
                <Play className="text-white fill-white ml-1" size={32} />
              </div>
            </div>

            {/* Red Gradient Bottom Overlay (from original image) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#892201]/80 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCta;