import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react'; // Using Lucide for the icons

const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-4 font-['Anek_Latin']">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-[#892201]">Let's Connect</h2>
            <p className="text-gray-700 text-lg max-w-md">
              We're here to help with any questions or requests you have—reach out to us today!
            </p>
            <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#892201] p-3 rounded-full shrink-0">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-800 leading-tight">
                Near Sun-N-Sand Hotel, Post. Nighoj, Taluka. Rahata, Ahilyanagari (Ahmednagar), Shirdi, Maharashtra 423109
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#892201] p-3 rounded-full shrink-0">
                <Phone className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-800 font-medium">+91 97675 40000</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#892201] p-3 rounded-full shrink-0">
                <Mail className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-800 font-medium">enquiry@saiteerth.in</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-[#FEB22A] p-8 rounded-[40px] shadow-lg">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter Full Name"
         
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter Phone Number"
             
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter Email Address"
               
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Message</label>
              <textarea 
                rows="4"
                placeholder="Enter Message"
               
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#892201] text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all text-lg"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;