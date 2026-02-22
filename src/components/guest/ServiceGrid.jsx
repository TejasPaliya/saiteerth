import React from 'react';

const services = [
  {
    title: "Baggage Counter",
    description: "We provide a secure baggage counter where you can store your belongings safely for just Rs. 50 per bag.",
  },
  {
    title: "Merchandise Shop",
    description: "We offer a variety of souvenirs and gifts in our merchandise shop. We sell T-shirts, teddies, chocolates, mugs, bottles, key chains, and much more, so you ",
    hasReadMore: true,
  },
  {
    title: "Wheelchairs on Request",
    description: "We provide wheelchairs for guests with mobility needs upon request. We design our park with ramps and wide pathways to ensure all attractions are easily accessible.",
  },
  {
    title: "First Aid",
    description: "We offer first aid services at the reception to ensure your safety. We handle any minor medical needs, ensuring you have a safe and enjoyable visit.",
  },
  {
    title: "Handicap-Friendly Space",
    description: "We provide a secure baggage counter where you can store your belongings safely for just Rs. 50 per bag.", 
  },
  {
    title: "Elevators for Easy Access",
    description: "We have elevators that provide easy access to all areas of the park, ensuring guests of all ages and abilities can enjoy the attractions comfortably.",
  },
];

const ServiceCard = ({ title, description, hasReadMore }) => (
  <div className="flex flex-col rounded-[2rem] overflow-hidden bg-[#ECECEC] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
    {/* Placeholder Image */}
    <div className="h-56 w-full">
      <img
        src="/food-grid.png"
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Text Content */}
    <div className="p-7 flex flex-col gap-3">
      <h3 className="text-[#CD3F0D] text-2xl font-bold font-['Anek_Latin']">
        {title}
      </h3>
      <p className="text-gray-600 text-[15px] leading-relaxed font-['Anek_Latin']">
        {description}
        {hasReadMore && (
          <span className="text-[#CD3F0D] font-bold cursor-pointer ml-1">
            Read More
          </span>
        )}
      </p>
    </div>
  </div>
);

export default function ServiceGrid() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title}
            description={service.description}
            hasReadMore={service.hasReadMore}
          />
        ))}
      </div>
    </section>
  );
}