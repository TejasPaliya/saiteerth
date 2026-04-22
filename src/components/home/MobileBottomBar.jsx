'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileBottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 sm:hidden left-0 right-0 z-50">
      <div className="relative flex items-end justify-between bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] h-16 px-6">
        
        {/* Left Side Items */}
        <NavItem 
          label="Home" 
          href="/" 
          iconNormal="/bottom/home normal.svg"
          iconHover="/bottom/home hover.svg"
          isActive={pathname === '/'}
        />
        
        <NavItem 
          label="Offers" 
          href="/offers" 
          iconNormal="/bottom/offer normal.svg"
          iconHover="/bottom/offer hover.svg"
          isActive={pathname?.startsWith('/offers')}
        />

        {/* Floating Center Button */}
        <a style={{ top: "-8px" }} href='https://saiteerth.in/book-now?theme=sai-teerth&location_id=5&destination_id=10' className="relative flex flex-col items-center">
          <div className="bg-white p-2 rounded-full shadow-md">
            <button className="bg-white text-red p-3 rounded-full transition-colors flex items-center justify-center">
              <img src="/bottom/book_normal.svg" alt="Book Tickets" className="w-[31px] h-[27px]" />
            </button>
          </div>
          <span className="text-[#8B2318] text-xs font-bold mt-1">Book Tickets</span>
        </a>

        {/* Right Side Items */}
        <NavItem 
          label="Attractions" 
          href="/attractions" 
          iconNormal="/bottom/all attraction normal.svg"
          iconHover="/bottom/all attraction hover.svg"
          isActive={pathname?.startsWith('/attractions')}
        />

        <NavItem 
          label="Call Us" 
          href="tel:+919768540000" 
          iconNormal="/bottom/call_normal.svg"
          isActive={false}
        />

      </div>
    </div>
  );
};

// Helper component for navigation items
const NavItem = ({ iconNormal, iconHover, label, href, isActive }) => (
  <Link 
    href={href} 
    className="flex flex-col items-center justify-center mb-1 text-[#8B2318] hover:text-[#8B2318] transition-colors group"
  >
    <div className="p-1 h-[26px] flex items-center justify-center">
      <img 
        src={isActive ? (iconHover || iconNormal) : iconNormal} 
        alt={label} 
        className={`h-full w-auto ${iconHover ? 'group-hover:hidden block' : ''}`}
      />
      {iconHover && (
        <img 
          src={iconHover} 
          alt={label} 
          className="h-full w-auto hidden group-hover:block"
        />
      )}
    </div>
    <span className="text-[10px] font-medium">{label}</span>
  </Link>
);

export default MobileBottomBar;