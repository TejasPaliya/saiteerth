import React from 'react'
import Marquee from 'react-fast-marquee'

const TopDestination = ({ data }) => {
  // Use the destination data from API, or a fallback array if empty
  const destinations = data && data.length > 0 ? data : [1, 2, 3, 4, 5];

  // Define your character limit here
  const charLimit = 20;

  return (
    <div>
      <div
        className="text-[#892201] font-['Anek_Latin'] font-bold not-italic text-3xl sm:text-4xl mt-8 md:text-5xl lg:text-[55px] text-center"
      >
         Shirdi's Top Tourist Destinations
      </div>
      <div className='mt-6 md:mt-12'>
          <Marquee>
            <div className='gap-6 md:gap-8 flex ml-3 md:ml-5'>
                {destinations.map((item, index) => {
                  // Logic for truncation
                  const title = item.title || "Wet'nJoy Water Park";
                  const displayTitle = title.length > charLimit 
                    ? title.slice(0, charLimit) + "..." 
                    : title;

                  return (
                    <div 
                      key={item.id || index} 
                      className="w-[200px] md:w-[250px] lg:w-[300px] aspect-[332/422] rounded-4xl relative overflow-hidden flex flex-col justify-end items-center p-3 h-full "
                    >
                      {/* Background Video/Image from API */}
                      {item.image?.url ? (
                        <img 
                          src={"http://13.48.85.216:1337" + item.image.url} 
                          className="absolute inset-0 w-full h-full object-cover -z-10"
                          alt={title}
                        />
                      ) : (
                        <div className="absolute inset-0 w-full h-full bg-[url('/dest.png')] bg-cover bg-center -z-10" />
                      )}
                      
                      <div className='text-[#892201] font-semibold not-italic text-base sm:text-[20px] md:text-[21px] rounded-4xl px-4 py-2 bg-white whitespace-nowrap'>
                        {displayTitle}
                      </div>
                    </div>
                  )
                })}
            </div>
          </Marquee>
      </div>
    </div>
  )
}

export default TopDestination