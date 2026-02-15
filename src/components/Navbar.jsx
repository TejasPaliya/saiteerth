"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Track which mobile accordion is open
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const menuData = {
    attractions: [
      { name: "Kaliya Mardan", href: "/attractions/kaliya" },
      { name: "Lanka Dahan", href: "/attractions/lanka-dahan" },
       { name: "Dwarkamai", href: "/attractions/dwarkamai" },
        { name: "Teerth Yatra", href: "/attractions/teerth-yatra" },
          { name: "Sabka Malik Ek", href: "/attractions/sabka-malik-ek" },
   
    ],
    offers: [
        { name: "All Offers", href: "/offers" },
      { name: "Offer1", href: "/offers/offer1" },
      { name: "Offer2", href: "/offers/offer2" },
      { name: "Offer3", href: "/offers/offer3" },
      { name: "Offer4", href: "/offers/offer4" },
      { name: "Offer5", href: "/offers/offer5" },
      { name: "Offer5", href: "/offers/offer6" },

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

  // Shared Desktop Link Component with Dropdown
  const DesktopDropdown = ({ title, links, href }) => (
    <div className="group relative py-4">
      <Link href={href} className={`${textColor} font-bold text-[18px] flex items-center gap-1 uppercase`}>
        {title}
        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      {/* Dropdown Menu */}
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
          <div className="hidden lg:flex justify-between items-center gap-6">
            <DesktopDropdown title="Attraction" links={menuData.attractions} href="/attractions" />
            <DesktopDropdown title="Tickets & Offers" links={menuData.offers} href="/offers" />
            <span className={`${textColor} font-bold text-[18px] cursor-pointer`}>PLAN YOUR VISIT</span>
          </div>

          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" className="w-[140px] md:w-[177px] h-auto" alt="logo" />
          </Link>

          {/* Desktop Right */}
          <div className="hidden lg:flex justify-between items-center gap-6">
            <span className={`${textColor} font-bold text-[18px] cursor-pointer`}>ABOUT US</span>
            <span className={`${textColor} font-bold text-[18px] cursor-pointer`}>CONTACT US</span>
            <span className={`${textColor} font-bold text-[18px] cursor-pointer`}>QUICK LINKS</span>
            <button className={`rounded-[50px] font-bold text-[16px] border border-[#FEB22A] p-2 px-4 transition-all ${
                scrolled ? "bg-[#FEB22A] text-black shadow-md" : "bg-[#C47E00] text-white shadow-[0_0_24.3px_0_rgba(255,255,255,0.66)]"
              }`}>
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button className={`rounded-[50px] font-bold text-[14px] border border-[#FEB22A] ${scrolled ? "bg-[#FEB22A] text-black" : "bg-[#C47E00] text-white"} p-1 px-3`}>
              BOOK NOW
            </button>
            <button onClick={() => setDrawerOpen(true)}>
              <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
                <path d="M34.5938 11.25H1.40625M34.5938 1.40625H1.40625M34.5938 23.9062H1.40625" stroke={scrolled ? "#000" : "#fff"} strokeWidth="3" />
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
          {/* Mobile Menu Items */}
          {[
            { id: 'attractions', label: 'ATTRACTIONS', links: menuData.attractions },
            { id: 'offers', label: 'TICKETS & OFFERS', links: menuData.offers }
          ].map((item) => (
            <div key={item.id} className="border-b">
              <div 
                onClick={() => setMobileSubMenu(mobileSubMenu === item.id ? null : item.id)}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
              >
                <span className="font-semibold text-[20px] text-[#616060]">{item.label}</span>
                <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${mobileSubMenu === item.id ? 'max-h-60' : 'max-h-0'}`}>
                {item.links.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setDrawerOpen(false)} className="block p-3 pl-8 text-[#80050A] font-medium border-b border-gray-100 last:border-none">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Simple Mobile Links */}
          {['PLAN YOUR VISIT', 'ABOUT US', 'CONTACT US', 'QUICK LINKS'].map((link) => (
            <div key={link} className="p-4 border-b font-semibold text-[20px] text-[#616060]">{link}</div>
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