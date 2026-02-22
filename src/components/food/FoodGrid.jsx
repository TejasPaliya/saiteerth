"use client";
import React, { useState } from 'react';
import Head from 'next/head';

const kiosks = [
  {
    title: "Kiosk at Gate No 2",
    description: "A quick-stop snack kiosk at Gate No 2 offering popcorn, chips, cold drinks, cotton candy, ice cream, coffee, milkshakes, and more.",
    menu: ["Mega Punjabi Meal", "Chennai Meal", "Mega Dahi Combo", "Mega Punjabi Meal", "Chennai Meal", "Mega Dahi Combo"]
  },
  {
    title: "Chaat Counter",
    description: "A quick-serve chaat station offering vada pav, pakodas, pani puri, dahi puri, iced bhel, and Banarasi samosa chaat.",
    menu: ["Vada Pav", "Kanda Bhaji", "Pani Puri", "Dahi Puri", "Samosa Chaat"]
  },
  {
    title: "Kiosk at Sabka Malik Ek",
    description: "A refreshment counter offering popcorn, chips, cold drinks, cotton candy, biscuits, ice cream, water bottles, and coffee.",
    menu: ["Popcorn", "Chips", "Cold Drinks", "Ice Cream", "Coffee"]
  },
  {
    title: "Kiosk at Lanka Dahan",
    description: "A multi-snack kiosk with popcorn, chips, cold drinks, cotton candy, biscuits, ice cream, coffee, and water bottles.",
    menu: ["Cotton Candy", "Biscuits", "Water Bottles", "Tea", "Coffee"]
  },
  {
    title: "Live Cotton Candy Counter",
    description: "A live-preparation stall serving fresh cotton candy, popcorn, potato twisters, and softy ice cream.",
    menu: ["Fresh Cotton Candy", "Potato Twister", "Softy Ice Cream", "Popcorn"]
  },
  {
    title: "Kiosk at Restaurant",
    description: "A snack and beverage counter inside the restaurant serving popcorn, chips, cold drinks, biscuits, ice cream, coffee, and milkshakes.",
    menu: ["Milkshake", "Cold Coffee", "Sandwich", "Chips", "Cold Drinks"]
  },
];

export default function FoodGrid() {
  const [selectedKiosk, setSelectedKiosk] = useState(null);
  const placeholderImage = "/food-grid.png";

  return (
    <div className={`min-h-screen bg-[#CD3F0D] p-6 md:p-12 font-['Anek_Latin'] ${selectedKiosk ? 'overflow-hidden' : ''}`}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Tasty Treats Await
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light">
            Discover unique travel perspectives from experts who've explored Sai Tirth first-hand.
          </p>
        </header>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kiosks.map((kiosk, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-full shadow-xl"
            >
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src={placeholderImage} 
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

        {/* Bottom Booking Button */}
        <div className="flex justify-center mt-16">
          <a href="https://saiteerth.in/book/" className="rounded-[50px] font-['Anek_Latin'] bg-[#FCD503] hover:scale-105 transition-transform p-3 px-10 font-bold text-lg md:text-2xl text-black">
            Book Your Tickets Now
          </a>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedKiosk && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="bg-[#D9D9D9] w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
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

            {/* Modal List */}
            <div className="flex flex-col">
              {selectedKiosk.menu.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 px-8 flex items-center gap-3 text-lg  text-black
                    ${idx % 2 === 0 ? 'bg-[#E5E5E5]' : 'bg-[#D9D9D9]'}`}
                >
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
            
            {/* Visual spacer at bottom to match screenshot rounded corners */}
            <div className="h-4 bg-[#D9D9D9]"></div>
          </div>
        </div>
      )}
    </div>
  );
}