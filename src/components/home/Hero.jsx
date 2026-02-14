import React from 'react'

// We define the data prop to receive the hero_video object from the page
const HeroSec = ({ data }) => {
  // Defensive check: if data or the URL is missing, we can return null or a fallback
  if (!data?.url) return null;

  return (
    <div className='w-full h-[100vh]'>   
      <video 
        src={data.url} // Dynamic URL from Strapi
        autoPlay 
        loop 
        muted 
        playsInline // Recommended for better mobile autoplay support
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  )
}

export default HeroSec