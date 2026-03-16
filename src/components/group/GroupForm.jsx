import React from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  MapPin,
  Tag,
  Send 
} from 'lucide-react';

export default function GroupForm() {
  // Styles based on your provided theme
  const textGradientStyle = {
    background: 'linear-gradient(180deg, #CD3F0D 0%, #80050A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  const buttonStyle = {
    borderRadius: '26843500px',
    background: 'linear-gradient(180deg, #CD3F0D 0%, #80050A 100%)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className=" relative bg-[#CD3F0D] overflow-hidden flex flex-col items-center py-16 pb-0 pt-4 px-4 font-sans">
      
      {/* Curved Background Shape (Cream) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[300px] md:h-[400px] bg-[#FFF5E2] rounded-b-[50%_90%] z-0 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center mt-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl md:text-5xl font-['Anek_Latin'] font-extrabold mb-2 tracking-tight" 
            style={textGradientStyle}
          >
            Group Enquiry Form
          </h1>
          <p className="text-gray-600 font-medium font-['Anek_Latin'] text-sm md:text-base">
            Fill out the details and we'll get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2rem] p-6 md:p-10 w-full shadow-2xl">
          <form className="space-y-5">
            
            {/* Event Type (Full Width) */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                <Tag size={16} className="text-[#CD3F0D]" /> Event Type *
              </label>
              <div className="relative">
                <select
                  required
                  className="w-full bg-[#F4F5F7] text-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Select, School/ College, Corporate</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="corporate">Corporate</option>
                  <option value="others">Others</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                   <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
              </div>
            </div>

            {/* Grid 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <User size={16} className="text-[#CD3F0D]" /> Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Mail size={16} className="text-[#CD3F0D]" /> Email *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent"
                />
              </div>
            </div>

            {/* Grid 2: Mobile & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Phone size={16} className="text-[#CD3F0D]" /> Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit number"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <MapPin size={16} className="text-[#CD3F0D]" /> City *
                </label>
                <input
                  type="text"
                  placeholder="Your city"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent"
                />
              </div>
            </div>

            {/* Grid 3: Visit Date & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Calendar size={16} className="text-[#CD3F0D]" /> Visit Date *
                </label>
                <input
                  type="date"
                  className="w-full bg-[#F4F5F7] text-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Users size={16} className="text-[#CD3F0D]" /> Guests (Min. 20) *
                </label>
                <input
                  type="number"
                  min="20"
                  placeholder="Minimum 20"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                style={buttonStyle}
                className="w-full flex items-center justify-center gap-2 text-white font-bold text-lg py-4 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg"
              >
                Submit Enquiry <Send size={20} className="ml-1" />
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}