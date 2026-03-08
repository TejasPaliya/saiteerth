import React from 'react';
import Image from 'next/image';
import { TrendingUp, Users, Target, Lightbulb } from 'lucide-react';

const AboutMalpani = () => {
  return (
    <section className="bg-[#FFFBF8] font-['Anek_Latin'] py-16 px-4 md:px-8 lg:px-24 text-[#333]">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: About Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#892201]">
              About Malpani Group
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Malpani Group is a well-diversified business house active in renewable 
                energy, FMCG products, amusement and water parks, real estate, hotels, 
                etc. Malpani Group's success story is no ordinary one.
              </p>
              <p>
                Our unceasing commitment to the satisfaction of our customers as well 
                as the society by way of sharing the rewards with all has been and always 
                will be the secret to our phenomenal growth.
              </p>
              <p>
                Our activities have given the small town of Sangamner as well as its 
                surrounding areas a new modern face. Along with developing the 
                Infrastructure of Sangamner, we have managed to create social 
                awareness, encourage education, and inspire people to dream big and 
                aspire more without disturbing the rural roots.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-[#FDF2EE] px-4 py-2 rounded-xl border border-[#FDE0D5]">
                <TrendingUp size={20} className="text-[#CD3F0D]" />
                <span className="font-semibold text-sm text-[#892201]">Phenomenal Growth</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FDF2EE] px-4 py-2 rounded-xl border border-[#FDE0D5]">
                <Users size={20} className="text-[#CD3F0D]" />
                <span className="font-semibold text-sm text-[#892201]">Community First</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Styled Border */}
     <div className="relative group">
  <div className="relative z-10 overflow-hidden rounded-[40px] border-[10px] border-[#892201]">
    <div className="aspect-[5/5] relative bg-gray-200">
      <Image 
        src="/api/placeholder/600/750" 
        alt="Malpani Group Leadership"
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        priority
      />
    </div>
  </div>
</div>
        </div>

        {/* Bottom Section: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="bg-[#CD3F0D] p-4 rounded-2xl mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#CD3F0D] mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To improve the quality of rural life through professional, 
              material and spiritual advancement.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="bg-[#CD3F0D] p-4 rounded-2xl mb-6">
              <Lightbulb size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#CD3F0D] mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              "Spreading plenty through transparent practices. Presenting 
              the customer with a wider choice of products."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMalpani;