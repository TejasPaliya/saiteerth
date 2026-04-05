import React from "react";

const Section = ({ data }) => {
  if (!data) return null;

  const BASE_URL = "https://strapi.saiteerth.in";

  // Helper to render the point with its dynamic icon
  const Point = ({ text, icon }) => (
    <div className="border-2 flex flex-1 gap-4 max-md:text-[14px] max-md:flex-col p-3 justify-center items-center border-[#CC3D0042] rounded-[20px] bg-[#FFDB9A] font-['Anek_Latin'] font-semibold text-[25px] leading-[35px] tracking-[0%]">
      {icon?.url && (
        <img 
          src={`${BASE_URL}${icon.url}`} 
          alt={text} 
          className="w-[40px] h-[40px] object-contain"
        />
      )}
      {text}
    </div>
  );

  return (
    <div className="flex md:pl-6 mt-8 flex-wrap max-lg:flex-col items-center ">
      <div className="w-1/2 max-lg:w-full h-full flex flex-col justify-bottom gap-6 ">
        <div className="font-['Anek_Latin'] font-medium px-4 max-md:mx-8 max-md:text-center text-[#892201] leading-[1.3] text-[20px] sm:text-[23px] md:text-[26px] lg:text-[36px]">
          {data.description}
        </div>

        <div className="flex flex-col gap-3 px-4">
          <div className="flex gap-3">
            {/* Note: 'first_icom' used here to match your JSON typo */}
            <Point text={data.first_point} icon={data.first_icom} />
            <Point text={data.second_point} icon={data.second_icon} />
          </div>
          <div className="flex gap-3">
            <Point text={data.third_point} icon={data.third_icon} />
            <Point text={data.fourth_point} icon={data.fourth_icon} />
          </div>
        </div>
      </div>
      
      {data.image?.url && (
        <img 
          className="w-1/2 max-lg:w-full aspect-[2/1] object-cover" 
          src={`${BASE_URL}${data.image.url}`} 
          alt="Section visual" 
        />
      )}
    </div>
  );
};

export default Section;