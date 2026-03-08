import React from 'react';
import { Heart, Sparkles, Users, CheckCircle2 } from 'lucide-react';

const PhotoTypes = () => {
  const benefits = [
    {
      title: "Comfort & Peace",
      description: "Brings comfort during difficult times and reduces stress",
      icon: <Heart className="w-8 h-8 text-[#CD3F0D]" />,
    },
    {
      title: "Protection",
      description: "Provides sense of guidance and spiritual protection",
      icon: <Sparkles className="w-8 h-8 text-[#CD3F0D]" />,
    },
    {
      title: "Unity",
      description: "Symbols of faith, unity, and compassion for all",
      icon: <Users className="w-8 h-8 text-[#CD3F0D]" />,
    },
  ];

  const facts = [
    "Sai Baba's real name is unknown",
    "Sai Baba is believed to have performed many miracles during his lifetime. He is said to have cured the sick, raised the dead, and multiplied food",
    "Sai Baba's teachings emphasize love, compassion, and service to others. He is often quoted as saying, 'Love all, serve all'",
    "Sai Baba's samadhi (tomb) is located in Shirdi. It is a popular pilgrimage destination for Hindus",
  ];

  return (
    <div className="font-['Anek_Latin'] antialiased text-[#1a202c]">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">
            Why Sai Baba Photos Are Important for Devotees
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Sai Baba photos hold deep emotional and spiritual value. Many devotees believe that looking at Baba's image brings comfort during difficult times. A simple glimpse of his peaceful face can reduce stress, bring clarity, and inspire positive thoughts. For some, keeping <span className="text-[#CD3F0D] font-medium">Sai Baba temple images</span> at home or workplace provides a sense of protection and guidance.
            </p>
            <p>
              Photos of Sai Baba also remind devotees of his message—<span className="text-[#CD3F0D] font-bold">Sabka Malik Ek</span>. His images are symbols of faith, unity, and compassion. They help people feel connected to his teachings, even when they are far from Shirdi.
            </p>
          </div>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-[#CD3F0D] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Facts About Sai Baba</h2>
            <p className="opacity-90">Here are some additional facts about Sai Baba that you may find interesting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {facts.map((fact, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex gap-4 items-start"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-white/60" />
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white/90 text-sm leading-relaxed italic">
              If you are interested in learning more about Sai Baba, we recommend visiting the Shri Saibaba Sansthan Trust website or the Sai Teerth website. These websites have a wealth of information about Sai Baba's life, teachings, and legacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoTypes;