import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const OfferCard = ({ offer }) => {
  const imageUrl = offer?.image?.url || "/offers.png";

  // Helper to create a URL-friendly string from the name if slug is missing
  // Example: "Small Group Offer" -> "small-group-offer"
  const slugPath = offer.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  
  // We use documentId as a backup to ensure the link is always unique/valid
  const detailUrl = `/offers/${slugPath || offer.documentId}`;

  return (
    <div className="max-w-[400px] w-full shadow-[-2px_17px_16px_4px_rgba(0,0,0,0.20)] rounded-[20px] p-1 bg-white flex flex-col h-full">
      <img
        src={imageUrl}
        alt={offer.name}
        className="w-full aspect-[415/237] rounded-[20px_20px_0_0] object-cover"
      />
      <div className="p-4 bg-white flex flex-col flex-1">
        <div className="text-[#80050A] font-semibold text-xl sm:text-[28px]">
          {offer.name}
        </div>
        
        <ul className="list-disc ml-4 text-[#474747] text-sm sm:text-base mt-2 flex-1">
          {offer?.point?.map((item) => (
            <li key={item.id}>{item.point}</li>
          ))}
        </ul>

        <div className="flex gap-3 mt-4">
          {/* Action Button */}
          <button className="bg-[#80050A] flex-1 rounded-[12px] p-2 text-center font-semibold text-white cursor-pointer hover:bg-[#a0060d] transition-colors">
            Book Now
          </button>

          {/* View More Link */}
          <Link 
            href={detailUrl} 
            className="bg-[#FEB22A] flex-1 rounded-[12px] p-2 text-center font-semibold text-[#7F050A] cursor-pointer hover:bg-[#ffc14d] transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

const OfferGrid = ({ offers }) => {
  if (!offers || offers.length === 0) return null;

  return (
    <div className="px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch max-w-7xl mx-auto">
        {offers.map((item) => (
          <OfferCard key={item.id} offer={item} />
        ))}
      </div>
    </div>
  );
};

export default OfferGrid;