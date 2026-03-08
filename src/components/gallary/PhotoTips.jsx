import React from 'react';

const PhotoTips = () => {
  const categories = [
    { 
      title: "Sai Baba HD Images", 
      desc: "High clarity and detail images for worship and meditation", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CD3F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
      )
    },
    { 
      title: "Shirdi Spiritual Photos", 
      desc: "Photos taken around the Sai Mandir and sacred places", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CD3F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      )
    },
    { 
      title: "Sai Baba Darshan Pictures", 
      desc: "Peaceful moments captured from the temple", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CD3F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
      )
    },
    { 
      title: "Sai Baba Temple Images", 
      desc: "Showing the shrine, Samadhi Mandir, and surrounding areas.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CD3F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M10 21V11a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v10"/><path d="M4 21V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11"/><path d="m12 2-8 6h16l-8-6Z"/></svg>
      )
    },
    { 
      title: "Sai Teerth Attractions", 
      desc: "Photos of statues, murals, and devotional setups", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CD3F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M21 17v4"/><path d="M19 19h4"/></svg>
      )
    },
    { 
      title: "Paintings & Sculptures", 
      desc: "Well-crafted artistic representations looking real", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CD3F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
  ];

  const ritualSteps = [
    "Find a clean glass or cup",
    "Fill the glass or cup with fresh water",
    "Add a few drops of udi (sacred ash) to the water",
    "Offer the water to Sai Baba with love and devotion",
    "Drink the water as prasad (blessed food)"
  ];

  return (
    <div className="bg-white text-[#333] font-['Anek_Latin'] py-16 px-4 md:px-8">
      {/* Categories Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Shirdi Sai Baba Images Available</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          The gallery offers a wide range of images so devotees can choose what connects with them the most. Some of the popular categories include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left bg-white">
              <div className="w-12 h-12 bg-[#FFF1ED] rounded-lg flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
            <p className="text-gray-600 leading-relaxed">
                Each category helps devotees experience Shirdi in a simple visual form. Whether someone wants a calm meditation image or a powerful darshan photo, the gallery brings Shirdi's divine energy closer to them.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
                The <span className="font-bold" style={{ color: '#CD3F0D' }}>Gallery of Sai Baba images</span> is thus, a valuable resource for anyone interested in learning more about this important Hindu saint. The photos provide a glimpse into Sai Baba's life and teachings, and they offer a visual reminder of his enduring legacy.
            </p>
        </div>
      </section>

      {/* Ritual Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FFF1ED] mb-6" style={{ color: '#CD3F0D' }}>
             <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
             Sacred Ritual
          </span>
          <h2 className="text-4xl font-bold mb-6">Tips for Offering Water to Sai Baba</h2>
          <p className="text-gray-600 mb-8">
            Water holds spiritual significance in offering devotion to Sai Baba. Follow these simple steps to perform this sacred ritual with love and devotion.
          </p>
          
          <div className="space-y-5">
            {ritualSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                    style={{ backgroundColor: '#CD3F0D' }}
                >
                  {idx + 1}
                </span>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card Component */}
        <div className="flex-1 w-full">
          <div className="bg-[#F9EBE6] rounded-[2.5rem] p-12 text-center aspect-square flex flex-col items-center justify-center">
             <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-xl" style={{ backgroundColor: '#CD3F0D' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
             </div>
             <h3 className="text-2xl font-bold mb-4">Sacred Udi</h3>
             <p className="text-gray-600 leading-relaxed text-lg">
                Adding sacred ash (udi) to the water creates a blessed offering. This simple ritual brings spiritual purification and connects you with Baba's divine grace.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoTips;