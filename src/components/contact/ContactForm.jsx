"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react'; // Using Lucide for the icons

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    mail: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('http://13.48.85.216:1337/api/contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', number: '', mail: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-16 px-4 font-['Anek_Latin']">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-[#892201]">Let's Connect</h2>
            <p className="text-gray-700 text-2xl max-w-md">
              We're here to help with any questions or requests you have—reach out to us today!
            </p>
            <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#892201] p-3 rounded-full shrink-0">
                <MapPin className="text-white w-10 h-10" />
              </div>
              <p className="text-gray-800 text-2xl leading-tight">
                Near Sun-N-Sand Hotel, Post. Nighoj, Taluka. Rahata, Ahilyanagari (Ahmednagar), Shirdi, Maharashtra 423109
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#892201] p-3 rounded-full shrink-0">
                <Phone className="text-white w-10 h-10" />
              </div>
              <p className="text-gray-800 text-2xl font-medium">+91 97675 40000</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#892201] p-3 rounded-full shrink-0">
                <Mail className="text-white w-10 h-10" />
              </div>
              <p className="text-gray-800 text-2xl font-medium">enquiry@saiteerth.in</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-[#FEB22A] p-8 rounded-[40px] shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                required
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Email Address</label>
              <input 
                type="email" 
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                placeholder="Enter Email Address"
                required
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#892201] mb-1">Message</label>
              <textarea 
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                required
                className="w-full bg-white p-4 rounded-xl border-none focus:ring-2 focus:ring-[#892201] outline-none text-black placeholder:text-gray-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#892201] text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all text-lg disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
            
            {status === 'success' && <p className="text-green-700 font-semibold text-center mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-700 font-semibold text-center mt-2">Failed to send message. Try again.</p>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;