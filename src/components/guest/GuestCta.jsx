import { Anek_Latin } from 'next/font/google';

// Configure the Anek Latin font
const anekLatin = Anek_Latin({ 
  subsets: ['latin'],
  weight: ['400', '700', '800'] 
});

export default function GuestCta() {
  return (
    <section className={`${anekLatin.className} flex justify-center p-6`}>
      <div className="bg-[#CD3F0D] w-full max-w-4xl rounded-[40px] px-2 md:px-8 py-8 md:py-16 flex flex-col items-center text-center text-white shadow-xl">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready for an Unforgettable Experience?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl font-normal max-w-2xl mb-6 leading-snug opacity-95">
          Explore all attractions with peace of mind. Our guest services ensure you 
          enjoy every moment without worries. Lock in your preferred date now
        </p>

        {/* Button */}
       <a href="https://saiteerth.in/book/" className="rounded-[50px] font-['Anek_Latin'] bg-[#FCD503] hover:scale-105 transition-transform p-3 px-10 font-bold text-lg md:text-2xl text-black">
            Book Your Tickets Now
          </a>
        
      </div>
    </section>
  );
}