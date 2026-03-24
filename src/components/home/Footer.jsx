"use client"
import React, { useState } from 'react';
import Link from 'next/link';

/** * PLACEHOLDER DATA */
const PLACEHOLDER_IMG = "/footer-bg.png";
const LOGO_PLACEHOLDER = "/logo.png";
const BUILDING_PLACEHOLDER = "/footer-building.png";

// --- Sub-components (Icons) ---

function InstagramIcon() {
  return (
    <a href='https://www.instagram.com/saiteerth/' className="size-6 md:size-8 hover:opacity-80 transition-opacity cursor-pointer">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M13.9649 2.87151C11.9252 2.96733 10.5331 3.29313 9.31613 3.77087C8.05676 4.2623 6.98903 4.92073 5.9254 5.98709C4.86315 7.05345 4.20882 8.12255 3.7215 9.3833C3.24923 10.603 2.93028 11.9965 2.83993 14.0375C2.74959 16.0771 2.73042 16.7342 2.74001 21.9373C2.74959 27.1405 2.77286 27.7934 2.87142 29.8386C2.96861 31.8768 3.29304 33.269 3.77078 34.4873C4.26221 35.7467 4.92064 36.8144 5.987 37.878C7.05336 38.9403 8.12109 39.5932 9.38594 40.0819C10.6043 40.5528 11.9991 40.8745 14.0388 40.9635C16.0784 41.0525 16.7355 41.073 21.9386 41.0634C27.1418 41.0538 27.7961 41.0306 29.8412 40.9334C31.8863 40.8362 33.2703 40.5104 34.4886 40.034C35.7479 39.5412 36.817 38.8841 37.8793 37.8164C38.9415 36.7487 39.5959 35.6796 40.0818 34.4175C40.5541 33.1992 40.8744 31.8043 40.9634 29.766C41.0524 27.7209 41.0743 27.0679 41.0633 21.8634C41.0524 16.6589 41.0305 16.0073 40.9333 13.9636C40.8361 11.9198 40.5117 10.5318 40.0339 9.31348C39.5411 8.05411 38.8841 6.98638 37.8177 5.92276C36.7513 4.85913 35.6809 4.20617 34.4187 3.72022C33.1991 3.24795 31.8055 2.92627 29.7659 2.83866C27.7263 2.75105 27.0692 2.72778 21.8647 2.73736C16.6602 2.74694 16.0086 2.77021 13.9649 2.86877M14.1894 37.5139C12.3208 37.4331 11.3065 37.1224 10.6303 36.8623C9.73501 36.5173 9.09711 36.0998 8.42362 35.4332C7.75013 34.7665 7.33535 34.1259 6.98629 33.232C6.72346 32.5558 6.40725 31.5428 6.31964 29.6743C6.22519 27.6552 6.20465 27.0488 6.1937 21.9319C6.18275 16.815 6.20192 16.2099 6.29089 14.1895C6.37029 12.3223 6.6824 11.3066 6.94248 10.6304C7.28744 9.73373 7.70358 9.0972 8.3716 8.42371C9.03962 7.75022 9.67889 7.33545 10.5728 6.98638C11.2476 6.72218 12.262 6.40871 14.1291 6.31973C16.1496 6.22391 16.756 6.20475 21.8715 6.19379C26.9871 6.18284 27.5949 6.20201 29.6167 6.29099C31.4839 6.37175 32.4996 6.68112 33.1744 6.94257C34.0697 7.28753 34.7076 7.70231 35.3811 8.37169C36.0546 9.04108 36.4693 9.67761 36.8198 10.5742C37.084 11.2477 37.3974 12.2607 37.4851 14.1292C37.5809 16.1497 37.6028 16.7561 37.6124 21.8716C37.6219 26.9872 37.6041 27.5949 37.5152 29.6141C37.433 31.4826 37.1237 32.4969 36.8636 33.1745C36.5186 34.0698 36.1025 34.7077 35.4331 35.3812C34.7637 36.0547 34.1258 36.4694 33.2319 36.8185C32.5571 37.0813 31.5427 37.3962 29.6769 37.4851C27.6565 37.5796 27.05 37.6001 21.9331 37.6111C16.8163 37.622 16.2098 37.6015 14.1894 37.5139ZM29.8125 11.6584C29.8152 12.9287 30.846 13.9567 32.1163 13.954C33.3866 13.9513 34.4146 12.9205 34.4119 11.6502C34.4092 10.3798 33.3784 9.35181 32.1081 9.35455C30.8377 9.35729 29.8111 10.3881 29.8125 11.6584ZM12.0621 21.9196C12.0731 27.354 16.4864 31.7509 21.9208 31.7399C27.3553 31.729 31.7535 27.3157 31.7439 21.8812C31.733 16.4467 27.3183 12.0485 21.8839 12.0595C16.4494 12.0704 12.0512 16.4851 12.0621 21.9196ZM15.5158 21.9127C15.509 18.3851 18.3631 15.5186 21.8921 15.5118C25.4197 15.505 28.2861 18.3591 28.293 21.8881C28.2998 25.4157 25.4457 28.2821 21.9167 28.289C18.3891 28.2958 15.5227 25.4431 15.5158 21.9154" fill="#FFF7F7"/>
      </svg>
    </a>
  );
}

function YouTubeIcon() {
  return (
    <a href='https://www.youtube.com/channel/UC8eFsCw6PtGZAZT8fA6jWdg' className="size-6 md:size-8 hover:opacity-80 transition-opacity cursor-pointer">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g clipPath="url(#clip0_340_1852)">
          <path d="M42.8885 11.2896C42.3848 9.3923 40.9009 7.89884 39.016 7.39099C35.5992 6.46973 21.9022 6.46973 21.9022 6.46973C21.9022 6.46973 8.20373 6.46973 4.78836 7.39099C2.90341 7.89747 1.41953 9.3923 0.915784 11.2896C0 14.7282 0 21.9012 0 21.9012C0 21.9012 0 29.0755 0.915784 32.5128C1.41953 34.41 2.90341 35.9035 4.78836 36.41C8.2051 37.3312 21.9022 37.3312 21.9022 37.3312C21.9022 37.3312 35.6006 37.3312 39.016 36.41C40.9009 35.9035 42.3848 34.4087 42.8885 32.5128C43.8043 29.0741 43.8043 21.9012 43.8043 21.9012C43.8043 21.9012 43.8043 14.7282 42.8885 11.2896ZM17.4218 28.4143V15.388L28.8712 21.9012L17.4218 28.4143Z" fill="#FFF7F7"/>
        </g>
        <defs>
          <clipPath id="clip0_340_1852">
            <rect width="43.8043" height="43.8043" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function FacebookIcon() {
  return (
    <a href='https://www.facebook.com/saiteerth/' className="size-6 md:size-8 hover:opacity-80 transition-opacity cursor-pointer">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M21.9022 2.7373C11.3179 2.7373 2.73776 11.3175 2.73776 21.9017C2.73776 30.8898 8.92512 38.431 17.2726 40.5021V27.7578H13.3206V21.9017H17.2726V19.3788C17.2726 12.8561 20.2239 9.83224 26.6289 9.83224C27.8431 9.83224 29.9375 10.0704 30.7944 10.3086V15.6171C30.3427 15.5692 29.557 15.546 28.5809 15.546C25.438 15.546 24.2238 16.7369 24.2238 19.8306V21.9017H30.4837L29.4078 27.7578H24.2238V40.9251C33.7129 39.7793 41.0666 31.6988 41.0666 21.9017C41.0666 11.3175 32.4864 2.7373 21.9022 2.7373Z" fill="#FFF7F7"/>
      </svg>
    </a>
  );
}

function XIcon() {
  return (
    <div className="size-6 md:size-8 hover:opacity-80 transition-opacity cursor-pointer">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M25.2139 19.1765L38.1786 4.10645H35.1068L23.8491 17.1916L14.8583 4.10645H4.48898L18.0848 23.8937L4.48898 39.6975H7.56076L19.4482 25.8786L28.9427 39.6975H39.3134L25.2139 19.1765ZM21.006 24.0675L19.6289 22.0977L8.66819 6.41986H13.3867L22.2325 19.0725L23.6096 21.0423L35.1082 37.4894H30.3897L21.0073 24.0689L21.006 24.0675Z" fill="#FFF7F7"/>
      </svg>
    </div>
  );
}

function ChevronIcon({ isOpen }) {
  return (
    <div className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
      <svg className="block size-full" fill="none" stroke="white" strokeWidth="4" viewBox="0 0 60 60">
        <path d="M20 15l15 15-15 15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function AccordionSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/20 last:border-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-sans text-lg font-bold text-white">
          {title}
        </h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-4" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
}

// --- Main Footer Component ---

const footerData = {
  attractions: [
    { name: "Dwarkamai", href: "/attractions/dwarkamai" },
    { name: "Lanka Dahan", href: "/attractions/lanka-dahan" },
    { name: "Sabka Malik Ek", href: "/attractions/sabka-malik-ek" },
    { name: "Teerth Yatra", href: "/attractions/teerth-yatra" },
    { name: "Mushak Maharaj", href: "/attractions/mushak-maharaj" },
    { name: "Kaliya Mardan", href: "/attractions/kaliya-mardan" },
    { name: "Laser Show", href: "/attractions/laser-show" },
    { name: "Saibaba Mosaic", href: "/attractions/saibaba-mosaic" },
  ],
  plan: [
    { name: "Foods & Beverages", href: "/foods-and-beverages" },
    { name: "Guest Facility", href: "/guest-facility-at-saiteerth" },
    { name: "How to Reach", href: "/how-to-reach" },

  ],
  quick: [
    { name: "Gallery", href: "/gallery" },
    { name: "Web Stories", href: "#" },
    { name: "Blogs", href: "/blog" },
    { name: "Influencer Collaboration", href: "/influencer" },
  ]
};

const Footer = () => {
  return (
    <footer className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between font-sans">
      
      {/* 1. Background Image (Lowest Layer) */}
      <div className="absolute inset-0 blur-[6px] pointer-events-none z-0">
        <img 
          alt="" 
          className="absolute h-full w-full object-cover" 
          src={PLACEHOLDER_IMG} 
        />
        <div className="absolute inset-0" />
      </div>

      {/* 2. Building Image (Highest Layer for Overlap Effect) 
          Z-30 ensures it sits ON TOP of the bottom of the orange card */}
      <div className="absolute -bottom-24 max-md:hidden left-0 w-full z-30 pointer-events-none">
        <img 
          alt="Building" 
          className="w-full object-cover align-bottom" 
          src={BUILDING_PLACEHOLDER} 
        />
      </div>

      {/* 3. Main Content Container (Middle Layer) */}
      <div className="relative z-20 w-full h-full flex items-center justify-center pt-12 lg:pt-24 pb-48 lg:pb-32  md:mb-54 2xl:mb-64">
        
        {/* Desktop Layout */}
        <div className="hidden lg:block w-full max-w-[1315px] px-8">
          <div className="relative bg-[#CD3F0D] rounded-[40px] px-16 py-12 shadow-2xl">
            
            {/* Header Row */}
            <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/20">
              <h2 className="text-[32px] leading-tight text-white font-medium">
                Come with us to experience Sai's divine journey!
              </h2>
              <div className="flex gap-6 items-center">
                <InstagramIcon />
                <YouTubeIcon />
                <FacebookIcon />
                <XIcon />
              </div>
            </div>

            {/* 5-Column Grid */}
            <div className="grid grid-cols-5 gap-8 text-white mb-12">
              
              {/* Col 1: Logo & Contacts */}
              <div className="col-span-1 space-y-6">
                <img alt="Sai Teerth Logo" className="w-[180px]" src={LOGO_PLACEHOLDER} />
                <div className="text-sm opacity-90 leading-relaxed">
                  <p className="mb-4">
                    Near Sun-N-Sand Hotel,<br/>
                    Post Nighoj, Shirdi, Taluka<br/>
                    Rahata, Ahmednagar,<br/>
                    Maharashtra- 423109
                  </p>
                  <div className="space-y-1">
                    <p>+91 9767840000</p>
                    <p>+91 9767540000</p>
                  </div>
                  <div className="mt-4 space-y-1">
                    <p>enquiry@saiteerth.in</p>
                    <p>care@saiteerth.in</p>
                  </div>
                </div>
              </div>

              {/* Col 2: Attractions */}
              <div className="col-span-1">
                <h3 className="font-bold text-lg mb-6">Attractions</h3>
                <ul className="text-sm space-y-3 opacity-90">
                  {footerData.attractions.map(item => (
                    <li key={item.name} className="hover:text-white cursor-pointer transition-colors">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Plan Your Visit & Legal */}
              <div className="col-span-1">
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-6">Plan Your Visit</h3>
                  <ul className="text-sm space-y-3 opacity-90">
                    {footerData.plan.map(item => (
                      <li key={item.name} className="hover:text-white cursor-pointer transition-colors">
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Legal</h3>
                  <div className="text-sm space-y-3 opacity-90 flex flex-col">
                    <Link href="/terms-and-conditions" className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</Link>
                    <Link href="/rules-and-regulations" className="hover:text-white cursor-pointer transition-colors">Rules & Regulations</Link>
                    <a href="https://www.imagicaaworld.com/investor-relations/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">Investor Relations</a>
                  </div>
                </div>
              </div>

              {/* Col 4: About Us & Contact Header */}
              <div className="col-span-1">
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-6">About us</h3>
                  <ul className="text-sm space-y-3 opacity-90">
                    <li className="cursor-pointer hover:text-white"><Link href="/about-sai-teerth">SaiTeerth- Theme park</Link></li>
                    <li className="cursor-pointer hover:text-white"><Link href="https://www.shirdi.wetnjoy.in/">Wet'n Joy shirdi waterpark</Link></li>
                  
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-6">Contact Us</h3>
                  <div className="text-sm space-y-3 opacity-90">
                    <p className="cursor-pointer hover:text-white">enquiry@saiteerth.in</p>
                    <p className="cursor-pointer hover:text-white">care@saiteerth.in</p>
                  </div>
                </div>
              </div>

             
            </div>

            {/* Bottom Footer Row */}
            <div className="flex justify-between items-center text-xs text-white opacity-80 pt-4">
              <p>© 2025 Imagicaaworld Entertainment Ltd. All rights reserved.</p>
              <p className="cursor-pointer hover:opacity-100"><Link href="/privacy-policy">Privacy Policy</Link></p>
            </div>

          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full px-6"> 
          <div className="bg-[#CD3F0D]/95 rounded-[30px] p-8 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Come with us to experience<br />Sai's divine journey!</h2>
            
            <div className="flex justify-center gap-6 mb-8">
              <InstagramIcon /> <YouTubeIcon /> <FacebookIcon /> <XIcon />
            </div>

            <div className="flex justify-center mb-8">
              <img alt="Logo" className="w-40" src={LOGO_PLACEHOLDER} />
            </div>

            <div className="space-y-2 mb-8 text-center text-sm opacity-90">
              <p>Shirdi, Maharashtra- 423109</p>
              <p>+91 9767840000</p>
              <p>enquiry@saiteerth.in</p>
            </div>

            <div className="space-y-2">
              <AccordionSection title="Attractions">
                <ul className="text-white/80 space-y-2 text-sm pl-2">
                  {footerData.attractions.map(item => (
                    <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
                  ))}
                </ul>
              </AccordionSection>

              <AccordionSection title="Plan Your Visit">
                 <ul className="text-white/80 space-y-2 text-sm pl-2">
                  {footerData.plan.map(item => (
                    <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
                  ))}
                </ul>
              </AccordionSection>
              
               <AccordionSection title="Legal & About">
                 <div className="text-white/80 space-y-2 text-sm pl-2 flex flex-col">
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  <Link href="/rules-and-regulations">Rules & Regulations</Link>
                  <span>About Malpani Group</span>
                  <a href="https://www.imagicaaworld.com/investor-relations/" target="_blank" rel="noopener noreferrer">Investor Relations</a>
                </div>
              </AccordionSection>
            </div>

            <div className="flex flex-col items-center gap-2 mt-8 text-xs opacity-60">
              <p>© 2025 Imagicaaworld Entertainment Ltd.</p>
              <p><Link href="/privacy-policy">Privacy Policy</Link></p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;