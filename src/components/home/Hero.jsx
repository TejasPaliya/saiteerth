import React from 'react'

const HeroSec = () => {
  return (
    <div className='w-full h-[100vh]'>   
       <video 
      src="/hero.mp4" 
      autoPlay 
      loop 
      muted 
      style={{ width: "100%", height:"100%", objectFit: "cover" }}
    /></div>
  )
}

export default HeroSec