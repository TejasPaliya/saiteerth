import React from 'react';

const RegularTicket = ({ tickets }) => {
  if (!tickets || tickets.length === 0) return null;

  return (
    <div>
      <div className="font-['Anek_Latin'] font-bold text-center mt-16 text-[#80050A] leading-[1] text-[40px] sm:text-[50px] md:text-[54px] lg:text-[60px] mx-auto">
        Regular <br className='sm:hidden' /> Tickets Prices
      </div>

      {/* Logic remains flex-wrap, justify-center */}
      <div className='flex flex-wrap justify-center mt-12 px-4'>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            /* Minimal change: 
               Replaced flex-1 with basis-full (mobile), basis-1/2 (tablet), basis-1/3 (desktop)
            */
            className="
              basis-full md:basis-1/2 lg:basis-1/3
              max-w-[600px] 
              aspect-[1.85/1] 
              bg-[url('/ticket.png')] bg-contain bg-center bg-no-repeat
              flex flex-col items-center justify-center
              pt-4 pb-6 px-12
              drop-shadow-xl
            "
          >
            <div className="text-center mb-3 md:mb-6 z-10">
              <h2 className="text-white text-2xl md:text-5xl font-bold tracking-wide drop-shadow-md mb-1">
                {ticket.name}
              </h2>
              <p className="text-white/90 text-sm md:text-xl font-light tracking-wide drop-shadow-sm">
                [{ticket.height}]
              </p>
            </div>

            <div className="flex gap-6 w-full justify-center px-4 md:px-12 z-10">
              <PriceBox title="Mon To Fri" price={ticket.weekday_price} />
              <PriceBox title="Sat, Sun & Holidays" price={ticket.weekend_price} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PriceBox = ({ title, price }) => {
  return (
    <div className="flex flex-col w-full max-w-[180px] rounded-xl overflow-hidden shadow-lg">
      <div className="bg-[#fcb43a] py-2 flex items-center justify-center">
        <span className="text-[#641e0d] font-bold text-xs md:text-sm text-center leading-tight">
          {title}
        </span>
      </div>
      <div className="bg-white py-2 flex items-center justify-center">
        <span className="text-[#7a2b15] font-bold text-2xl md:text-4xl">
          {price}
        </span>
      </div>
    </div>
  );
};

export default RegularTicket;