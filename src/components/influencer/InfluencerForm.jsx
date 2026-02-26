import React from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Link as LinkIcon, 
  MessageSquare, 
  Send 
} from 'lucide-react';

export default function InfluencerForm() {
  // Custom styles provided in the prompt
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
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)',
  };

  return (
    <div className="min-h-screen relative bg-[#CD3F0D] overflow-hidden flex flex-col items-center py-16 pt-4 px-4 font-sans">
      
      {/* Curved Background Shape (Cream) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[400px] md:h-[500px] bg-[#FFF5E2] rounded-b-[50%_120%] z-0 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center mt-4">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 
            className="text-4xl md:text-[60px] font-['Anek_Latin']  font-extrabold mb-3 tracking-tight" 
            style={textGradientStyle}
          >
            Apply for Collaboration
          </h1>
          <p className="text-gray-600 font-medium font-['Anek_Latin']  text-sm md:text-base">
            Fill out the form below and join our influencer community
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 w-full shadow-2xl">
          <form className="space-y-6">
            
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                <User size={16} className="text-[#CD3F0D]" /> Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20"
              />
            </div>

            {/* Two Column Grid: Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Phone size={16} className="text-[#CD3F0D]" /> Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Mail size={16} className="text-[#CD3F0D]" /> Email ID *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20"
                />
              </div>
            </div>

            {/* Two Column Grid: DOB & Followers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Note: In standard form flows, putting a line separator between rows is optional, 
                  but the image shows a blue guiding line. You can uncomment this if needed 
              <div className="absolute top-0 -left-10 w-[calc(100%+5rem)] h-[2px] bg-blue-500/50 hidden md:block"></div> 
              */}
              
              <div className="flex flex-col gap-2 z-10">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Calendar size={16} className="text-[#CD3F0D]" /> Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full bg-[#F4F5F7] text-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20"
                />
              </div>

              <div className="flex flex-col gap-2 z-10">
                <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                  <Users size={16} className="text-[#CD3F0D]" /> Subscribers / Followers *
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-[#F4F5F7] text-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20 appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Select follower range</option>
                    <option value="1k-10k">1K - 10K</option>
                    <option value="10k-50k">10K - 50K</option>
                    <option value="50k-100k">50K - 100K</option>
                    <option value="100k+">100K+</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                     <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Link */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                <LinkIcon size={16} className="text-[#CD3F0D]" /> Instagram / YouTube Profile Link *
              </label>
              <input
                type="url"
                placeholder="https://instagram.com/yourprofile"
                className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20"
              />
            </div>

            {/* Message / Proposal */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
                <MessageSquare size={16} className="text-[#CD3F0D]" /> Message / Proposal
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your content style and collaboration ideas..."
                className="w-full bg-[#F4F5F7] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#CD3F0D]/40 transition-all border border-transparent focus:border-[#CD3F0D]/20 resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 accent-[#CD3F0D] bg-[#F4F5F7] border-gray-300 rounded cursor-pointer transition-colors"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 font-semibold cursor-pointer select-none">
                I agree to the Terms & Conditions *
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 pb-2">
              <button
                type="submit"
                style={buttonStyle}
                className="w-full flex items-center justify-center gap-2 text-white font-medium text-[1.05rem] py-4 transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Submit Application <Send size={18} className="ml-1" />
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}