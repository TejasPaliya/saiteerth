"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Track which mobile accordion is open: null, 'attractions', 'reach', or 'quickLinks'
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const menuData = {
    attractions: [
      { name: "All Attractions", href: "/attractions" },
      { name: "Lanka Dahan", href: "/attractions/lanka-dahan" },
      { name: "Kaliya Mardan", href: "/attractions/kaliya-mardan" },
      { name: "Sabka Malik Ek", href: "/attractions/sabka-malik-ek" },
      { name: "Teerth Yatra", href: "/attractions/teerth-yatra" },
      { name: "Dwarkamai", href: "/attractions/dwarkamai" },
      { name: "Mushak Maharaj", href: "/attractions/mushak-maharaj" },
      { name: "Laser Show", href: "/attractions/laser-show" },
      { name: "Saibaba Mosaic", href: "/attractions/saibaba-mosaic" },
    ],
    reach: [
      { name: "How To Reach", href: "/how-to-reach" },
      { name: "Foods & Beverages", href: "/foods-and-beverages" },
      { name: "Guest Facilities", href: "/guest-facility-at-saiteerth" },
     
    ],
    quickLinks: [
      { name: "Blog", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
       { name: "Group Enquiries", href: "/group-enquiry" },
        { name: "Influencers", href: "/influencer" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-black" : "text-white";

  // Desktop Dropdown Component
  const DesktopDropdown = ({ title, links, href }) => (
    <div className="group relative py-4">
      <Link href={href} className={`${textColor} font-bold text-[18px] flex items-center gap-1 uppercase`}>
        {title}
        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} className="block px-4 py-2 text-gray-800 hover:bg-[#80050A] hover:text-white font-semibold">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "backdrop-blur-sm bg-[linear-gradient(180deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.718173)_43.27%,rgba(0,0,0,0)_100%)]"
        }`}>
        <div className="flex justify-between items-center max-w-[1500px] m-auto w-full md:px-8">
          
          {/* Desktop Left */}
          <div className="hidden lg:flex justify-between items-center gap-8">
            <DesktopDropdown title="Attractions" links={menuData.attractions} href="/attractions" />
            <Link href="/offers" className={`${textColor} font-bold text-[18px] uppercase`}>
              TICKETS & OFFERS
            </Link>
            {/* Plan Your Visit Dropdown */}
            <DesktopDropdown title="PLAN YOUR VISIT" links={menuData.reach} href="/how-to-reach" />
          </div>

          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" className="w-[120px] md:w-[177px] h-auto" alt="logo" />
          </Link>

          {/* Desktop Right */}
          <div className="hidden lg:flex justify-between items-center gap-6">
            <a href="/about-sai-teerth" className={`${textColor} font-bold text-[18px] cursor-pointer uppercase`}>ABOUT US</a>
            <a href="/contact-us" className={`${textColor} font-bold text-[18px] cursor-pointer uppercase`}>CONTACT US</a>
            <DesktopDropdown title="QUICK LINKS" links={menuData.quickLinks} href="#" />
            <Link href="https://saiteerth.in/book-now?theme=sai-teerth&location_id=5&destination_id=10" className={`rounded-[50px] font-bold text-[16px] border border-[#FCD503] p-2 px-4 transition-all ${
                scrolled ? "bg-[#FCD503] text-black shadow-md" : "bg-[#FCD503] text-black shadow-[0_0_24.3px_0_rgba(255,255,255,0.66)]"
              }`}>
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="https://saiteerth.in/book-now?theme=sai-teerth&location_id=5&destination_id=10" className={`rounded-[50px] font-bold text-[14px] border border-[#FCD503] ${scrolled ? "bg-[#FCD503] text-black" : "bg-[#FCD503] text-black"} p-1 px-3`}>
              BOOK NOW
            </Link>
            <button onClick={() => setDrawerOpen(true)}>
           <svg fill="none" height="40" viewBox="0 0 100 100" width="40" xmlns="http://www.w3.org/2000/svg">
  <path d="m12.5 25c0-2.3012 1.8655-4.1667 4.1667-4.1667h66.6666c2.3012 0 4.1667 1.8655 4.1667 4.1667s-1.8655 4.1666-4.1667 4.1666h-66.6666c-2.3012 0-4.1667-1.8654-4.1667-4.1666zm0 25c0-2.3012 1.8655-4.1667 4.1667-4.1667h66.6666c2.3012 0 4.1667 1.8655 4.1667 4.1667s-1.8655 4.1666-4.1667 4.1666h-66.6666c-2.3012 0-4.1667-1.8654-4.1667-4.1666zm0 25c0-2.3012 1.8655-4.1667 4.1667-4.1667h66.6666c2.3012 0 4.1667 1.8655 4.1667 4.1667s-1.8655 4.1666-4.1667 4.1666h-66.6666c-2.3012 0-4.1667-1.8654-4.1667-4.1666z" fill={!scrolled?"white":"black"}/>
</svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div onClick={() => setDrawerOpen(false)} className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />

      {/* Right Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[80vw] bg-white z-[70] transition-transform duration-300 ease-out flex flex-col ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 flex justify-between items-center bg-[#FDF0EC] border-b shadow-sm">
          <img src="/logo.png" className="w-[110px] h-auto" alt="logo" />
          <button onClick={() => setDrawerOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5ZM21.3 23.1L16 17.8L10.7 23.1L8.9 21.3L14.2 16L8.9 10.7L10.7 8.9L16 14.2L21.3 8.9L23.1 10.7L17.8 16L23.1 21.3L21.3 23.1Z" fill="black"/></svg>
          </button>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Attractions Accordion */}
          <div className="border-b-[3px] border-white">
            <div 
              style={{ background: "linear-gradient(90deg, #A41F24 40%, rgba(164,31,36,0.7) 100%), url('/drawer.png') right center/cover" }}
              onClick={() => setMobileSubMenu(mobileSubMenu === 'attractions' ? null : 'attractions')}
              className="flex justify-between items-center p-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                <span className="font-bold text-[16px] text-white">Attractions</span>
              </div>
              <svg className={`w-5 h-5 text-white transition-transform ${mobileSubMenu === 'attractions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`bg-[#981419] overflow-hidden transition-all duration-300 ${mobileSubMenu === 'attractions' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 p-4 pl-6">
                {menuData.attractions.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="flex items-start gap-2 text-white text-[14px] font-medium">
                    <span className="text-[#FCD503] text-[20px] leading-none mt-[-2px]">•</span> 
                    <span className="leading-tight">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Your Visit Accordion */}
          <div className="border-b-[3px] border-white">
            <div 
              style={{ background: "linear-gradient(90deg, #D48C17 40%, rgba(212,140,23,0.7) 100%), url('/drawer.png') right center/cover" }}
              onClick={() => setMobileSubMenu(mobileSubMenu === 'reach' ? null : 'reach')}
              className="flex justify-between items-center p-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <span className="font-bold text-[16px] text-white">Plan Your Visit</span>
              </div>
              <svg className={`w-5 h-5 text-white transition-transform ${mobileSubMenu === 'reach' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`bg-[#D48C17] overflow-hidden transition-all duration-300 ${mobileSubMenu === 'reach' ? 'max-h-60' : 'max-h-0'}`}>
              <div className="flex flex-col gap-y-4 p-4 pl-6">
                {menuData.reach.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="flex items-start gap-2 text-white text-[15px] font-medium">
                    <span className="text-white text-[20px] leading-none mt-[-2px]">•</span> 
                    <span className="leading-tight">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Tickets & Offers */}
          <div className="border-b-[3px] border-white">
            <Link 
              href="/offers"
              onClick={() => setDrawerOpen(false)}
              style={{ background: "linear-gradient(90deg, #A41F24 50%, rgba(164,31,36,0.7) 100%), url('/drawer.png') right center/cover" }}
              className="flex justify-between items-center p-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                <span className="font-bold text-[16px] text-white">Tickets & Offers</span>
              </div>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick Links Accordion */}
          <div className="border-b-[3px] border-white">
            <div 
              style={{ background: "linear-gradient(90deg, #D48C17 40%, rgba(212,140,23,0.7) 100%), url('/drawer.png') right center/cover" }}
              onClick={() => setMobileSubMenu(mobileSubMenu === 'quickLinks' ? null : 'quickLinks')}
              className="flex justify-between items-center p-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                <span className="font-bold text-[16px] text-white">Quick Links</span>
              </div>
              <svg className={`w-5 h-5 text-white transition-transform ${mobileSubMenu === 'quickLinks' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`bg-[#D48C17] overflow-hidden transition-all duration-300 ${mobileSubMenu === 'quickLinks' ? 'max-h-60' : 'max-h-0'}`}>
              <div className="flex flex-col gap-y-4 p-4 pl-6">
                {menuData.quickLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="flex items-start gap-2 text-white text-[15px] font-medium">
                    <span className="text-white text-[20px] leading-none mt-[-2px]">•</span> 
                    <span className="leading-tight">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact / Info Card */}
          <div className="p-4 pt-4 pb-2">
            <div className="bg-[#EAEAEA] rounded-xl p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Link href="/contact-us" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2 text-[#4A4A4A] text-[15px] font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Contact Us
                </Link>
                <Link href="/about-sai-teerth" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2 text-[#4A4A4A] text-[15px] font-medium pr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  About Us
                </Link>
              </div>
              <div className="flex items-center gap-2 text-[#4A4A4A] text-[15px] font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Park Timing: 10 AM - 06 PM
              </div>
            </div>
          </div>

          <div className="mt-auto block relative w-full flex-1">
            <img src="/drawer.png" className="w-full h-auto mt-2 object-cover" alt="nav illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;