"use client"; // Required for Next.js App Router to handle clicks

import React from 'react';
import { MapPin, Navigation, Footprints } from 'lucide-react';

const SaiTeerthCard = () => {
  // Function to redirect to Google Maps
  const handleGetDirections = () => {
    const destination = "Sai Teerth Devotional Theme Park, Shirdi";
    const encodedDestination = encodeURIComponent(destination);
    // This URL triggers Google Maps to start navigation from 'My Location'
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;
    
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 min-h-[600px]">
      
      {/* LEFT SIDE: Interaction Panel */}
      <div className="w-full md:w-[40%] p-10 flex flex-col justify-between bg-white z-10">
        <div className="space-y-8">
          {/* Header Icon & Title */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center shadow-inner">
              <MapPin className="text-yellow-600 w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black text-gray-800 tracking-tight">Visit Sai Teerth</h2>
          </div>

          {/* Info Badge */}
          <div className="bg-green-50 border border-green-100 rounded-2xl py-4 px-6 flex items-center justify-center gap-3">
            <Footprints className="text-green-600 w-6 h-6" />
            <span className="text-green-800 font-bold text-sm">
              Just 5 min walk from Sai Baba Temple
            </span>
          </div>

          {/* Direction Inputs */}
          <div className="relative border-2 border-gray-50 rounded-[2rem] p-6 bg-gray-50/50">
            {/* Visual connector line */}
            <div className="absolute left-12 top-16 bottom-16 border-l-2 border-dashed border-gray-300"></div>
            
            <div className="space-y-6">
              {/* Current Location Input */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Navigation className="w-6 h-6 text-blue-500 fill-blue-500" />
                </div>
                <input 
                  type="text" 
                  placeholder="Your Current Location" 
                  className="bg-transparent outline-none text-gray-500 font-semibold w-full placeholder-gray-400 cursor-default"
                  defaultValue="Your Current Location"
                  readOnly
                />
              </div>

              {/* Destination Display */}
              <div className="flex items-center gap-4 bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-200">
                <div className="p-2 bg-red-50 rounded-full">
                  <MapPin className="w-6 h-6 text-red-500 fill-red-500" />
                </div>
                <span className="font-extrabold text-gray-800 text-lg">Sai Teerth Theme Park</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10">
          <button 
            onClick={handleGetDirections}
            className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.97] shadow-xl shadow-yellow-100 text-xl cursor-pointer"
          >
            <Navigation className="w-6 h-6 rotate-45 fill-current" />
            Get Directions
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
              Uses your current location
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Live Google Map */}
      <div className="w-full md:w-[60%] relative min-h-[500px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.585148011158!2d74.47155607594537!3d19.772782781577974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc596355555555%3A0xc3c94897f1f1d775!2sSai%20Teerth%20Devotional%20Theme%20Park!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sai Teerth Location"
        />
      </div>
    </div>
  );
};

export default SaiTeerthCard;