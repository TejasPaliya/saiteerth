import React from 'react';

const services = [
  {
    title: "First Aid",
    description: "We offer first aid services at the reception to ensure your safety. We handle any minor medical needs, ensuring you have a safe and enjoyable visit.",
    image: "/g4.png"
  },
  {
    title: "Handicap-Friendly Space",
    description: "We welcome guests of all abilities and provide accessible pathways and seating areas to make exploring the park comfortable for everyone.",
    image: "/g3.png"
  },
  {
    title: "Elevators for Easy Access",
    description: "We have elevators that provide easy access to all areas of the park, ensuring guests of all ages and abilities can enjoy the attractions comfortably.",
    image: "/g6.png"
  },
  {
    title: "Food Courts and Kiosks",
    description: "We serve a variety of culinary delights at our food courts and kiosks. We offer fresh beverages, chaat, Punjabi meals, Chinese meals, and more for a satisfying lunch or snack. We also provide ice creams, cold drinks, popcorn, chips, and other treats to satisfy your cravings.",
    image: "/g2.png",

  },
  {
    title: "Baggage Counter",
    description: "We provide a secure baggage counter where you can store your belongings safely for just Rs. 50 per bag.",
    image: "/g1.png"
  },
  {
    title: "Photography Counter",
    description: "We provide professional photographers to help you capture your memories. We offer numerous photo points where you can get your pictures clicked to cherish your visit forever.",
    image: "/g5.png"
  }
];

const ServiceCard = ({ title, description, image, hasReadMore }) => (
  <div className="flex flex-col rounded-[2rem] overflow-hidden bg-[#ECECEC] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
    <div className="h-56 w-full">
      <img
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-7 flex flex-col gap-3">
      <h3 className="text-[#CD3F0D] text-2xl font-bold font-['Anek_Latin']">
        {title}
      </h3>
      <p className="text-gray-600 text-[15px] leading-relaxed font-['Anek_Latin']">
        {description}
        {hasReadMore && (
          <span className="text-[#CD3F0D] font-bold cursor-pointer ml-1 hover:underline">
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
            image={service.image} 
            hasReadMore={service.hasReadMore}
          />
        ))}
      </div>
    </section>
  );
}