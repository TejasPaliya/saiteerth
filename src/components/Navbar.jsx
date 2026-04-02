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
            <Link href="https://saiteerth.in/book/" className={`rounded-[50px] font-bold text-[16px] border border-[#FCD503] p-2 px-4 transition-all ${
                scrolled ? "bg-[#FCD503] text-black shadow-md" : "bg-[#FCD503] text-black shadow-[0_0_24.3px_0_rgba(255,255,255,0.66)]"
              }`}>
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="https://saiteerth.in/book/" className={`rounded-[50px] font-bold text-[14px] border border-[#FCD503] ${scrolled ? "bg-[#FCD503] text-black" : "bg-[#FCD503] text-black"} p-1 px-3`}>
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
      <div className={`fixed top-0 right-0 h-full w-[80vw] bg-white z-[70] transition-transform duration-300 ease-out ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <img src="/logo.png" className="w-[110px] h-auto" alt="logo" />
          <button onClick={() => setDrawerOpen(false)}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5ZM21.3 23.1L16 17.8L10.7 23.1L8.9 21.3L14.2 16L8.9 10.7L10.7 8.9L16 14.2L21.3 8.9L23.1 10.7L17.8 16L23.1 21.3L21.3 23.1Z" fill="black"/></svg>
          </button>
        </div>

        <div className="flex flex-col overflow-y-auto h-[calc(100vh-100px)]">
          {/* Attractions Accordion */}
          <div className="border-b">
            <div 
              onClick={() => setMobileSubMenu(mobileSubMenu === 'attractions' ? null : 'attractions')}
              className="flex justify-between items-center p-4 pb-4 cursor-pointer hover:bg-gray-50"
            >
              <span className="font-semibold text-[15px] text-[#000000] uppercase">Attractions</span>
              <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'attractions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${mobileSubMenu === 'attractions' ? 'max-h-96' : 'max-h-0'}`}>
              {menuData.attractions.map((link, idx) => (
                <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="block p-2 pl-8 text-[#80050A] font-medium border-b border-gray-100 last:border-none">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Plan Your Visit Accordion */}
          <div className="border-b">
            <div 
              onClick={() => setMobileSubMenu(mobileSubMenu === 'reach' ? null : 'reach')}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            >
              <span className="font-semibold text-[15px] text-[#000000] uppercase">Plan Your Visit</span>
              <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'reach' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${mobileSubMenu === 'reach' ? 'max-h-60' : 'max-h-0'}`}>
              {menuData.reach.map((link, idx) => (
                <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="block p-2 pl-8 text-[#80050A] font-medium border-b border-gray-100 last:border-none">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Accordion */}
          <div className="border-b">
            <div 
              onClick={() => setMobileSubMenu(mobileSubMenu === 'quickLinks' ? null : 'quickLinks')}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            >
              <span className="font-semibold text-[15px] text-[#000000] uppercase">Quick Links</span>
              <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'quickLinks' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${mobileSubMenu === 'quickLinks' ? 'max-h-60' : 'max-h-0'}`}>
              {menuData.quickLinks.map((link, idx) => (
                <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="block p-2 pl-8 text-[#80050A] font-medium border-b border-gray-100 last:border-none">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Single Link Items */}
          {[
            { label: 'TICKETS & OFFERS', href: '/offers' },
            { label: 'ABOUT US', href: '/about-sai-teerth' },
            { label: 'CONTACT US', href: '/contact-us' },
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              onClick={() => setDrawerOpen(false)}
              className="p-4 border-b font-semibold text-[15px] text-[#000000] block hover:bg-gray-50 uppercase"
            >
              {item.label}
            </Link>
          ))}
          
          <div className="mt-auto p-4">
            <img src="/drawer.png" className="w-full rounded-lg" alt="nav illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;