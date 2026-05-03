import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const OfferCard = ({ offer }) => {
  const imageUrl = offer?.card_image?.url || "/offers.png";

  // Helper to create a URL-friendly string from the name if slug is missing
  // Example: "Small Group Offer" -> "small-group-offer"
  const slugPath = offer.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  
  // We use documentId as a backup to ensure the link is always unique/valid
  const detailUrl = `/offers/${slugPath || offer.documentId}`;

  return (
    <div className="max-w-[400px] w-full shadow-[-2px_17px_16px_4px_rgba(0,0,0,0.20)] rounded-[20px] p-1 bg-white flex flex-col h-full">
      <img
        src={"https://strapi.saiteerth.in"+imageUrl}
        alt={offer.name}
        className="w-full aspect-[415/237] rounded-[20px_20px_0_0] object-cover"
      />
      <div className="p-4 bg-white flex flex-col flex-1">
        <div className="text-[#80050A] font-semibold text-xl sm:text-[28px]">
          {offer.name}
        </div>
        
        <div className="mt-2 text-black font-normal text-sm h-[60px] overflow-hidden flex flex-col gap-0.5">
          {offer?.point?.length > 0 ? (
            offer.point.slice(0, 3).map((p, idx) => (
              <div key={p.id || idx} className="flex gap-1.5 items-start">
                <span className="text-[#80050A] leading-tight">•</span>
                <span className="line-clamp-1 leading-tight">{p.point}</span>
              </div>
            ))
          ) : (
            <span className="line-clamp-3 leading-tight">{offer?.description || "No details available"}</span>
          )}
        </div>

        <div className="flex gap-3 mt-4">
          {/* Action Button */}
          <Link href={offer.link} className="bg-[#80050A] flex-1 rounded-[12px] p-2 text-center font-semibold text-white cursor-pointer hover:bg-[#a0060d] transition-colors">
            Book Now
          </Link>

          {/* View More Link */}
          <Link 
            href={detailUrl} 
            className="bg-[#FEB22A] flex-1 rounded-[12px] p-2 text-center font-semibold text-black cursor-pointer hover:bg-[#ffc14d] transition-colors"
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
    <div>
           <div className="font-['Anek_Latin'] font-bold text-center mt-16 text-[#80050A] leading-[1] text-[40px] sm:text-[50px] md:text-[54px] lg:text-[60px] mx-auto">
        Offers and Packages
      </div>
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch max-w-7xl mx-auto">
          {offers.map((item) => (
            <OfferCard key={item.id} offer={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferGrid;