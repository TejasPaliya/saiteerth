import React from 'react';
import { CheckCircle2, Heart, MapPin, BookOpen } from 'lucide-react';

const GallaryImages = () => {
  const mainGallery = [
    { title: "Samadhi Mandir", subtitle: "Holy Shrine", featured: true },
    { title: "Shirdi Temple", subtitle: "Sacred Place", featured: false },
    { title: "Darshan Pictures", subtitle: "Divine Moments", featured: false },
    { title: "Sai Baba HD", subtitle: "High Quality", featured: false },
  ];

  const features = [
    "Daily prayer images",
    "Meditation photos",
    "Mobile wallpapers",
    "Temple moments",
  ];

  return (
    <div className="font-['Anek_Latin'] bg-white min-h-screen p-6 md:p-12 lg:p-20 text-[#1a1a1a]">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Shirdi Sai Baba Photos & Devotional Image Gallery
        </h1>
        <p className="text-gray-500 text-lg">
          Sai Baba darshan pictures that capture peaceful moments from the temple.
        </p>
      </header>

      {/* Top Image Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {mainGallery.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
              {item.featured && (
                <span className="absolute top-3 left-3 z-10 bg-[#CD3F0D] text-white text-[10px] font-bold px-2 py-1 rounded shadow-md">
                  Featured
                </span>
              )}
              <img
                src={`/s1.png`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </section>

      {/* About Section & Bento Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FFF0EB] text-[#CD3F0D] px-3 py-1 rounded-full text-xs font-semibold mb-6">
            <Heart size={14} fill="#CD3F0D" />
            For Devotees
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            What Devotees Can Find in This Sai Baba Image Gallery
          </h2>
          <div className="text-gray-600 space-y-4 mb-8 leading-relaxed">
            <p>
              Many people cannot visit Shirdi often, so having access to{" "}
              <span className="text-[#CD3F0D] font-medium">Sai Baba HD images</span>, 
              Shirdi spiritual photos, and Sai Baba darshan pictures helps them stay connected. 
              The gallery brings together the most peaceful, divine, and inspiring images.
            </p>
            <p>
              In this gallery, devotees can explore photos that reflect Baba's teachings of 
              love, kindness, and simplicity. Each picture is chosen to offer a sense of peace.
            </p>
          </div>

          {/* Icon List */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-[#CD3F0D]" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Bento-style Grid */}
 <div className="grid grid-cols-2 gap-4 h-[500px]">
  {/* Card 1: Image (Replaced Love & Kindness text) */}
  <div className="rounded-2xl overflow-hidden shadow-sm">
    <img 
      src="/s2.png" 
      alt="Devotional Image 1" 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Card 2: Image (Standard height now) */}
  <div className="rounded-2xl overflow-hidden shadow-sm">
    <img 
      src="/s3.png" 
      alt="Sai Baba Portrait" 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Card 3: Image */}
  <div className="rounded-2xl overflow-hidden shadow-sm">
    <img 
      src="/s4.png" 
      alt="Shrine Detail" 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Card 4: Location Card (Keeping the pop of color) */}
  <div className="bg-[#CD3F0D] rounded-2xl flex flex-col items-center justify-center text-center text-white p-6 shadow-md">
    <div className="bg-white/20 p-3 rounded-full mb-4 ring-4 ring-white/10">
      <MapPin size={32} />
    </div>
    <h4 className="font-bold text-lg">Shirdi</h4>
    <p className="text-xs text-orange-100 opacity-80 mt-1 tracking-wide">
      Maharashtra, India
    </p>
  </div>
</div>
      </section>
    </div>
  );
};

export default GallaryImages;