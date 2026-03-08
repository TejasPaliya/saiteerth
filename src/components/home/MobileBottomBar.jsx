import React from 'react';
import { Home, Percent, Ticket, Landmark, Phone } from 'lucide-react';
import Link from 'next/link';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 sm:hidden left-0 right-0 z-50 ">
      <div className="relative flex items-end justify-between bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] h-16 px-6">
        
        {/* Left Side Items */}
        <NavItem icon={<Home size={20} />} label="Home" href="/" />
        <NavItem icon={<Percent size={20} />} label="Offers" href="/offers" />

        {/* Floating Center Button */}
        <div style={{top:"-16px"}} className="relative  flex flex-col items-center">
          <div className="bg-white p-2 rounded-full shadow-md">
            <button className="bg-white text-white p-2 rounded-full shadow-lg hover:bg-red-900 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M27.2383 15.0625H25.4141C25.573 14.9593 25.7236 14.8389 25.8625 14.6999L29.1909 11.3715C29.7128 10.8497 30 10.1562 30 9.41826C30 8.68034 29.7125 7.9866 29.1909 7.4659C27.4198 5.69412 24.3059 2.58018 22.5346 0.809555C22.0132 0.287476 21.3197 0 20.5815 0C19.8438 0 19.1503 0.287247 18.6285 0.809097L15.3001 4.1375C14.7865 4.65111 14.518 5.3183 14.4944 5.99281C13.7922 6.01662 13.136 6.30135 12.6379 6.80031L4.37508 15.0625H2.76169C1.21857 15.0625 0 16.3158 0 17.8242V27.2383C0 28.7814 1.25336 30 2.76169 30H18.7656C19.4719 30 20.1373 29.737 20.6493 29.2577C21.143 29.718 21.8047 30 22.5311 30H27.2383C28.7814 30 30 28.7466 30 27.2383V17.8242C30 16.2811 28.7466 15.0625 27.2383 15.0625ZM13.8812 8.04268C14.2726 7.65083 14.908 7.6506 15.3001 8.04268C15.6434 8.38577 16.1998 8.38577 16.5431 8.04268C16.8862 7.69958 16.8864 7.14317 16.5431 6.79985C16.1506 6.40732 16.151 5.77263 16.5431 5.38033L19.8715 2.05193C20.2643 1.65916 20.8994 1.65962 21.2913 2.05215C23.063 3.82347 26.1765 6.93695 27.9483 8.70918C28.3443 9.10446 28.3365 9.74007 27.9478 10.1285L24.6197 13.4569C24.4299 13.6464 24.1779 13.751 23.9099 13.751C23.6419 13.751 23.3899 13.6464 23.2001 13.4569C22.8571 13.1138 22.3006 13.1138 21.9573 13.4569C21.6142 13.8 21.614 14.3564 21.9573 14.6999C22.067 14.8093 22.148 14.94 22.197 15.0826C21.6026 15.1547 21.0661 15.4161 20.6493 15.8047C20.1366 15.3252 19.4714 15.0625 18.7656 15.0625H13.5178L15.2119 13.3683C15.5553 13.025 15.5553 12.4686 15.2119 12.1252C14.8689 11.7822 14.3122 11.7822 13.9691 12.1252L11.0319 15.0625H6.86119L13.8812 8.04268ZM28.2422 27.2383C28.2422 27.7922 27.7936 28.2422 27.2383 28.2422H22.5311C21.9777 28.2422 21.5273 27.7917 21.5273 27.2383C21.5273 26.7529 21.1338 26.3594 20.6483 26.3594C20.1631 26.3594 19.7694 26.7529 19.7694 27.2383C19.7694 27.7847 19.3277 28.2422 18.7656 28.2422H2.76169C2.20779 28.2422 1.75781 27.7936 1.75781 27.2383V17.8242C1.75781 17.2701 2.20642 16.8203 2.76169 16.8203H18.7656C19.3229 16.8203 19.7697 17.2723 19.7697 17.8242C19.7697 18.3096 20.1631 18.7031 20.6486 18.7031C21.1338 18.7031 21.5275 18.3096 21.5275 17.8242C21.5275 17.2707 21.9777 16.8203 22.5314 16.8203H27.2383C27.7924 16.8203 28.2422 17.2689 28.2422 17.8242V27.2383Z" fill="#892201"/>
</svg>
            </button>
          </div>
          <span className="text-[#8B2318] text-xs font-bold mt-1">Book Ticket</span>
        </div>

        {/* Right Side Items */}
        <NavItem icon={<Landmark size={20} />} label="Attractions" href="/attractions" />
        <NavItem icon={<Phone size={20} />} label="Call Us" href="tel:+123456789" />

      </div>
    </div>
  );
};

// Helper component for navigation items
const NavItem = ({ icon, label, href }) => (
  <Link 
    href={href} 
    className="flex flex-col items-center justify-center mb-1 text-gray-600 hover:text-[#8B2318] transition-colors"
  >
    <div className="p-1">{icon}</div>
    <span className="text-[10px] font-medium">{label}</span>
  </Link>
);

export default MobileBottomBar;