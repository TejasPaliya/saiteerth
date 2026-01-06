import React from 'react'

const AttractionHero = () => {
  return (
 <div className="w-full h-[100vh] bg-[url('/attraction-hero.png')] flex flex-col">
  <div className="flex-1 flex-col flex items-center justify-center">
  <div className="font-anek font-extrabold text-white text-center leading-[58px] tracking-[0%] 
                text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
  Lanka Dahan <span className="font-medium">- 5D Show</span>
</div>

<div className="max-w-3xl mx-auto text-white text-center 
                font-anek font-normal text-[19px] leading-[29px] tracking-[0%] mt-4">
  Spectacular 5D experience recounting the adventure of Hanuman in Lanka. Hanuman was the son of Vayu, the God of the wind, and a celestial nymph named Anjana.
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

export default AttractionHero