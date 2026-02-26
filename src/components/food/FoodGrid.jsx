"use client";
import React, { useState } from 'react';
import Head from 'next/head';

const kiosks = [
  {
    title: "Kiosk at gate no 2",
    image: "/f1.png",
    description: "A convenient stop at the entrance for quick snacks and refreshing beverages to start your journey.",
    menu: ["Popcorn", "Chips", "Cold Drinks", "Cotton Candy", "Zuby Lollies", "Biscuits", "Ice cream", "Water Bottles", "Coffee", "Cold Coffee", "Milkshake"]
  },
  {
    title: "Chaat Counter",
    image: "/f2.png",
    description: "Indulge in authentic Indian street food flavors, featuring spicy chaats and crispy savory snacks.",
    menu: ["Tea", "Coffee", "Vada Pav", "Onion Pakoda", "Pani Puri", "Dahi Batata Puri", "Iced Bhel Puri", "Banarasi Samosa Chaat"]
  },
  {
    title: "Kiosk at Sabka Malik Ek",
    image: "/f3.png",
    description: "Located near the central landmark, this counter offers a wide variety of chilled treats and snacks.",
    menu: ["Popcorn", "Chips", "Cold Drinks", "Cotton Candy", "Zuby Lollies", "Biscuits", "Ice Cream", "Water Bottles", "Coffee", "Cold Coffee", "Milkshake"]
  },
  {
    title: "Kiosk at Lanka Dahan",
    image: "/f4.png",
    description: "The perfect pit-stop for a refreshment break after experiencing the epic Lanka Dahan attraction.",
    menu: ["Popcorn", "Chips", "Cold Drinks", "Cotton Candy", "Zuby Lollies", "Biscuits", "Ice cream", "Water Bottles", "Coffee", "Cold Coffee", "Milkshake"]
  },
  {
    title: "Live Cotton Candy Counter",
    image: "/f5.png",
    description: "Watch the magic happen as we spin fresh, fluffy cotton candy and serve up cool softy ice creams.",
    menu: ["Popcorn", "Cotton Candy", "Potato Twister", "Softy Ice Cream"]
  },
  {
    title: "Kiosk at Food Zone",
    image: "/f6.png",
    description: "A hub of snacking options within the main dining area for those looking for a light bite between meals.",
    menu: ["Popcorn", "Chips", "Cold Drinks", "Cotton Candy", "Zuby Lollies", "Biscuits", "Ice cream", "Water Bottles", "Coffee", "Cold Coffee", "Milkshake"]
  },
];

export default function FoodGrid() {
  const [selectedKiosk, setSelectedKiosk] = useState(null);

  return (
    <div className={`min-h-screen bg-[#CD3F0D] p-6 md:p-12 font-['Anek_Latin'] ${selectedKiosk ? 'overflow-hidden' : ''}`}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Tasty Treats Await
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light">
            Savor the flavors of Sai Teerth with our curated selection of snacks and refreshments.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kiosks.map((kiosk, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-xl"
            >
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src={kiosk.image} 
                  alt={kiosk.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-[#CD3F0D] text-2xl font-bold mb-3 leading-tight">
                  {kiosk.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow leading-relaxed">
                  {kiosk.description}
                </p>
                
                <button 
                  onClick={() => setSelectedKiosk(kiosk)}
                  className="bg-[#80050A] text-white py-3 px-8 rounded-full font-semibold hover:opacity-90 transition-opacity w-full mt-auto"
                >
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="https://saiteerth.in/book/" className="rounded-[50px] font-['Anek_Latin'] bg-[#FCD503] hover:scale-105 transition-transform p-3 px-10 font-bold text-lg md:text-2xl text-black">
            Book Your Tickets Now
          </a>
        </div>
      </div>

      {selectedKiosk && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#D9D9D9] w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="bg-[#CD3F0D] p-5 flex justify-between items-center">
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {selectedKiosk.title} - Menu
              </h3>
              <button 
                onClick={() => setSelectedKiosk(null)}
                className="text-white text-2xl font-bold hover:opacity-70 transition-opacity"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col max-h-[70vh] overflow-y-auto">
              {selectedKiosk.menu.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 px-8 flex items-center gap-3 text-lg text-black
                    ${idx % 2 === 0 ? 'bg-[#E5E5E5]' : 'bg-[#D9D9D9]'}`}
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
            
            <div className="h-4 bg-[#D9D9D9]"></div>
          </div>
        </div>
      )}
    </div>
  );
}