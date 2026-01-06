import React from 'react'

const FiveD = () => {
  return (
    <div className='flex w-full  justify-evenly mx-auto max-lg:flex-col gap-6 p-4'>
        <img src="/5d.png" className='w-1/2 max-lg:w-full max-w-2xl' alt="" />
        <div className='flex flex-col w-1/2 max-lg:w-full justify-center gap-6 items-start'>
            <div className='font-anek font-bold text-[69px] leading-[77px] tracking-[0%] text-[#892201]'>Your 5D Experience Awaits</div>
            <div className='font-anek font-normal text-[25px] leading-[35px] tracking-[0%] text-[#5D5D5D]'>Dont just watch the movie, feel it. Our state-of-the-art 5D theater puts you right in the middle of the epic Ramayana. Advanced motion seats, wind, water jets, and stunning special effects create a fun and unforgettable adventure for audiences of all ages. A crowd favourite for children.  <br/> Our cutting-edge 5D theater creates a truly immersive experience. This fun and exciting show brings the Ramayana and its characters to life. Its the perfect entertainment for the whole family. </div>
            <span className="bg-yellow-400  my-6 text-black font-extrabold py-3 px-10 rounded-full uppercase tracking-tight shadow-sm hover:bg-yellow-500 transition-colors duration-200">
                Explore All FAQs
              </span>
        </div>
    </div>
  )
}

export default FiveD