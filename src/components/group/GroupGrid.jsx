import React from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Headphones, 
  Package, 
  Clock 
} from 'lucide-react'; // Using Lucide for the icons

const features = [
  {
    title: "Group Discounts",
    description: "Enjoy exclusive pricing for groups of 20 or more visitors.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Flexible Scheduling",
    description: "Book your preferred date with flexible time slots available.",
    icon: <Calendar className="w-6 h-6 text-white" />,
  },
  {
    title: "Competitive Pricing",
    description: "Best group rates with transparent pricing and no hidden charges.",
    icon: <DollarSign className="w-6 h-6 text-white" />,
  },
  {
    title: "Expert Coordination",
    description: "Dedicated team member to coordinate your entire group experience.",
    icon: <Headphones className="w-6 h-6 text-white" />,
  },
  {
    title: "Customizable Packages",
    description: "Tailor packages based on your group size and specific requirements.",
    icon: <Package className="w-6 h-6 text-white" />,
  },
  {
    title: "Quick Response",
    description: "Get confirmation and details within 24 hours of enquiry.",
    icon: <Clock className="w-6 h-6 text-white" />,
  },
];

const GroupGrid = () => {
  return (
    <section className="font-['Anek_Latin'] min-h-screen py-16 pt-12 px-4 flex flex-col items-center justify-center bg-[linear-gradient(180deg,#CD3F0D_0%,#80050A_100%)]">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Choose Our Park
        </h2>
        <p className="text-white text-lg opacity-90">
          We offer comprehensive group packages designed to make your visit memorable.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-[16px] shadow-lg flex flex-col items-start space-y-4"
          >
            {/* Icon Container */}
            <div className="bg-[#CD3F0D] p-3 rounded-[12px] flex items-center justify-center">
              {feature.icon}
            </div>
            
            <h3 className="text-[#CD3F0D] text-xl font-bold">
              {feature.title}
            </h3>
            
            <p className="text-black text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupGrid;