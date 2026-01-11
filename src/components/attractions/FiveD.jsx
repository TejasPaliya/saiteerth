import React from 'react'

const FiveD = () => {
  return (
    <div className="flex w-full justify-evenly mx-auto max-lg:flex-col gap-6 p-4  bg-[url('/5d-bg.png')] bg-bottom   bg-no-repeat bg-[length:100%_100%] ">
      
      <img
        src="/5d.png"
        className="w-1/2 max-lg:w-full max-lg:aspect-square max-w-xl"
        alt=""
      />

      <div className="flex flex-col w-1/2 max-lg:w-full justify-center gap-6 items-start">
        
        <div className="font-['Anek_Latin'] font-bold max-md:text-center text-[#892201] leading-[1.13] text-[40px] sm:text-[45px] md:text-[50px] lg:text-[69px]">Get Spectacular 5D Experience</div>
<div className="font-['Anek_Latin'] max-md:text-center font-normal text-[#5D5D5D] leading-[1.4] text-[16px] sm:text-[18px] md:text-[21px] lg:text-[25px]">Dont just watch the movie, feel it. Our state-of-the-art 5D theater puts you right in the middle of the epic Ramayana. Advanced motion seats, wind, water jets, and stunning special effects create a fun and unforgettable adventure for audiences of all ages. A crowd favourite for children.<br />Our cutting-edge 5D theater creates a truly immersive experience. This fun and exciting show brings the Ramayana and its characters to life. Its the perfect entertainment for the whole family.</div>

        <span className="bg-yellow-400 max-md:mx-auto my-6 text-black font-extrabold py-3 px-10 rounded-full uppercase tracking-tight shadow-sm hover:bg-yellow-500 transition-colors duration-200 cursor-pointer">
          Plan Your Visit Now
        </span>

      </div>
    </div>
  )
}

export default FiveD
