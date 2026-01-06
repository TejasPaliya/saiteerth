import React from 'react'

const BlogHero = () => {
  return (
     <div className="w-full h-[100vh] bg-[url('/attraction-hero.png')] flex flex-col">
  <div className="flex-1 flex-col flex items-center justify-center">
  <div className="font-anek font-extrabold text-white text-center leading-[58px] tracking-[0%] 
                text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
  Offers & Tickets
</div>

<div className="max-w-3xl mx-auto text-white text-center 
                font-anek font-normal text-[19px] leading-[29px] tracking-[0%] mt-4">
Plan the perfect day with exciting ticket combos designed to give you endless fun and incredible savings!
</div>
  </div>

  <img
    src="/bottom-design.png"
    className="w-full"
    alt=""
  />
</div>
  )
}

export default BlogHero