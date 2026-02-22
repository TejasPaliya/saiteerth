import React from 'react'

const InfluencerHero = () => {
  // Static data defined within the component
  const content = {
    title: "The Grand Canyon",
    type: "National Park",
    description: "Plan the perfect group outing with our specialized group packages. From team-building to family gatherings, we've curated everything you need for an amazing day at the park.",
    videoUrl: "/hero.mp4"
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex flex-col">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src={content.videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-black/80" // Switched to Tailwind opacity for cleaner code
      ></div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center lg:mt-40 z-10 mx-4">
        
        <h1 className="font-['Anek_Latin'] font-extrabold text-white text-center leading-[1.16] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[58px]">
          {content.title} <span className="font-semibold">- {content.type}</span>
        </h1>

        <p className="max-w-3xl mx-auto text-white text-center font-['Anek_Latin'] font-normal text-[18px] sm:text-[20px] md:text-[23px] lg:text-[27px] leading-[1.1] mt-4">
          {content.description}
        </p>
      </div>

      {/* Bottom Design Element */}
      <img
        src="/bottom-design.png"
        className="w-full z-10"
        alt="Decorative bottom border"
      />
    </div>
  )
}

export default InfluencerHero