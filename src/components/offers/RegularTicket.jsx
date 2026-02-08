import React from 'react'

const RegularTicket = () => {
  return (
    <div>
        <div className="font-['Anek_Latin'] font-bold text-center mt-16 text-[#80050A] leading-[1] text-[40px] sm:text-[50px] md:text-[54px] lg:text-[60px] mx-auto">Regular <br className='sm:hidden'/> Tickets Prices</div>


        <div className=' flex flex-wrap justify-center mt-12'>

    <div className="
        flex-1 max-w-[600px] 
        aspect-[1.85/1] 
        bg-[url('/ticket.png')] bg-contain bg-center bg-no-repeat
        flex flex-col items-center justify-center
        pt-4 pb-6 px-12
        drop-shadow-xl
      ">
        
        <div className="text-center mb-3 md:mb-6 z-10">
          <h2 className="text-white text-2xl md:text-5xl font-bold tracking-wide drop-shadow-md mb-1">
            Regular Adult
          </h2>
          <p className="text-white/90 text-sm md:text-xl font-light tracking-wide drop-shadow-sm">
            [Height Above 4 6]
          </p>
        </div>

        <div className="flex gap-6 w-full justify-center px-4 md:px-12 z-10">
          <PriceBox title="Mon To Fri" price="₹599*" />
          <PriceBox title="Sat, Sun & Holidays" price="₹599*" />
        </div>
      </div>

      <div className="
        flex-1 max-w-[600px] 
        aspect-[1.85/1] 
        bg-[url('/ticket.png')] bg-contain bg-center bg-no-repeat
        flex flex-col items-center justify-center
        pt-4 pb-6 px-12
        drop-shadow-xl
      ">
        
        <div className="text-center mb-3 md:mb-6 z-10">
          <h2 className="text-white text-2xl md:text-5xl font-bold tracking-wide drop-shadow-md mb-1">
            Regular Adult
          </h2>
          <p className="text-white/90 text-sm md:text-xl font-light tracking-wide drop-shadow-sm">
            [Height Above 4 6]
          </p>
        </div>

        <div className="flex gap-6 w-full justify-center px-4 md:px-12 z-10">
          <PriceBox title="Mon To Fri" price="₹599*" />
          <PriceBox title="Sat, Sun & Holidays" price="₹599*" />
        </div>
      </div>

      <div className="
        flex-1 max-w-[600px] 
        aspect-[1.85/1] 
        bg-[url('/ticket.png')] bg-contain bg-center bg-no-repeat
        flex flex-col items-center justify-center
        pt-4 pb-6 px-12
        drop-shadow-xl
      ">
        
        <div className="text-center mb-3 md:mb-6 z-10">
          <h2 className="text-white text-2xl md:text-5xl font-bold tracking-wide drop-shadow-md mb-1">
            Regular Adult
          </h2>
          <p className="text-white/90 text-sm md:text-xl font-light tracking-wide drop-shadow-sm">
            [Height Above 4 6]
          </p>
        </div>

        <div className="flex gap-6 w-full justify-center px-4 md:px-12 z-10">
          <PriceBox title="Mon To Fri" price="₹599*" />
          <PriceBox title="Sat, Sun & Holidays" price="₹599*" />
        </div>
      </div>

        </div>
    </div>
  )
}

const PriceBox = ({ title, price }) => {
  return (
    <div className="flex flex-col w-full max-w-[180px] rounded-xl overflow-hidden shadow-lg">
      <div className="bg-[#fcb43a] py-2  flex items-center justify-center">
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
  )
}

export default RegularTicket
