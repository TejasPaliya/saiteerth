import React from 'react';

const cardData = [
  {
    title: "Souvenir Shop",
    description: "Visitors can purchase souvenirs and gifts to remember their spiritual journey",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M23.3333 9.33325H4.66667C4.02233 9.33325 3.5 9.85559 3.5 10.4999V12.8333C3.5 13.4776 4.02233 13.9999 4.66667 13.9999H23.3333C23.9777 13.9999 24.5 13.4776 24.5 12.8333V10.4999C24.5 9.85559 23.9777 9.33325 23.3333 9.33325Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 9.33325V24.4999" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.1667 14V22.1667C22.1667 22.7855 21.9209 23.379 21.4833 23.8166C21.0457 24.2542 20.4522 24.5 19.8334 24.5H8.16671C7.54787 24.5 6.95438 24.2542 6.51679 23.8166C6.07921 23.379 5.83337 22.7855 5.83337 22.1667V14" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.75004 9.33335C7.97649 9.33335 7.23463 9.02606 6.68765 8.47908C6.14066 7.9321 5.83337 7.19024 5.83337 6.41669C5.83337 5.64314 6.14066 4.90127 6.68765 4.35429C7.23463 3.80731 7.97649 3.50002 8.75004 3.50002C9.87551 3.48041 10.9784 4.02649 11.9149 5.06704C12.8514 6.10759 13.578 7.59433 14 9.33335C14.4221 7.59433 15.1487 6.10759 16.0852 5.06704C17.0217 4.02649 18.1246 3.48041 19.25 3.50002C20.0236 3.50002 20.7655 3.80731 21.3124 4.35429C21.8594 4.90127 22.1667 5.64314 22.1667 6.41669C22.1667 7.19024 21.8594 7.9321 21.3124 8.47908C20.7655 9.02606 20.0236 9.33335 19.25 9.33335" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Spacious Parking",
    description: "A spacious parking lot for visitors who are driving to the park",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M22.1666 19.8334H24.4999C25.1999 19.8334 25.6666 19.3667 25.6666 18.6667V15.1667C25.6666 14.1167 24.8499 13.1834 23.9166 12.9501C21.8166 12.3667 18.6666 11.6667 18.6666 11.6667C18.6666 11.6667 17.1499 10.0334 16.0999 8.98341C15.5166 8.51675 14.8166 8.16675 13.9999 8.16675H5.83325C5.13325 8.16675 4.54992 8.63341 4.19992 9.21675L2.56659 12.6001C2.4121 13.0507 2.33325 13.5237 2.33325 14.0001V18.6667C2.33325 19.3667 2.79992 19.8334 3.49992 19.8334H5.83325" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.16659 22.1667C9.45525 22.1667 10.4999 21.122 10.4999 19.8333C10.4999 18.5447 9.45525 17.5 8.16659 17.5C6.87792 17.5 5.83325 18.5447 5.83325 19.8333C5.83325 21.122 6.87792 22.1667 8.16659 22.1667Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 19.8333H17.5" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.8333 22.1667C21.122 22.1667 22.1667 21.122 22.1667 19.8333C22.1667 18.5447 21.122 17.5 19.8333 17.5C18.5447 17.5 17.5 18.5447 17.5 19.8333C17.5 21.122 18.5447 22.1667 19.8333 22.1667Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Sai Teerth Chariot Wheel",
    description: "The tallest wheel in Maharashtra and the second tallest in India",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M13.9999 25.6666C20.4432 25.6666 25.6666 20.4432 25.6666 13.9999C25.6666 7.5566 20.4432 2.33325 13.9999 2.33325C7.5566 2.33325 2.33325 7.5566 2.33325 13.9999C2.33325 20.4432 7.5566 25.6666 13.9999 25.6666Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 14.0001C7 12.0168 7.81667 10.2668 9.1 9.1001" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.0001 16.3334C15.2887 16.3334 16.3334 15.2887 16.3334 14.0001C16.3334 12.7114 15.2887 11.6667 14.0001 11.6667C12.7114 11.6667 11.6667 12.7114 11.6667 14.0001C11.6667 15.2887 12.7114 16.3334 14.0001 16.3334Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.9999 14C20.9999 15.9833 20.1832 17.7333 18.8999 18.9" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Sai Palkhi",
    description: "A popular attraction for pilgrims and tourists, reminder of Sai Baba's legacy",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M22.1667 16.3333C23.905 14.63 25.6667 12.5883 25.6667 9.91667C25.6667 8.21486 24.9907 6.58276 23.7873 5.3794C22.584 4.17604 20.9518 3.5 19.25 3.5C17.1967 3.5 15.75 4.08333 14 5.83333C12.25 4.08333 10.8034 3.5 8.75004 3.5C7.04823 3.5 5.41613 4.17604 4.21277 5.3794C3.00941 6.58276 2.33337 8.21486 2.33337 9.91667C2.33337 12.6 4.08337 14.6417 5.83337 16.3333L14 24.5L22.1667 16.3333Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Symbol of Hope",
    description: "A symbol of hope and faith for those seeking the guidance and blessings of Sai Baba",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M11.5933 18.0833C11.4891 17.6795 11.2787 17.3111 10.9838 17.0162C10.689 16.7214 10.3205 16.511 9.91676 16.4068L2.75926 14.5611C2.63715 14.5265 2.52967 14.4529 2.45314 14.3517C2.37661 14.2504 2.33521 14.1269 2.33521 14C2.33521 13.873 2.37661 13.7496 2.45314 13.6483C2.52967 13.547 2.63715 13.4735 2.75926 13.4388L9.91676 11.592C10.3204 11.4879 10.6887 11.2776 10.9836 10.983C11.2784 10.6884 11.4889 10.3202 11.5933 9.91663L13.4389 2.75913C13.4732 2.63654 13.5467 2.52853 13.6481 2.45159C13.7496 2.37465 13.8734 2.33301 14.0007 2.33301C14.128 2.33301 14.2518 2.37465 14.3532 2.45159C14.4546 2.52853 14.5281 2.63654 14.5624 2.75913L16.4069 9.91663C16.5111 10.3204 16.7215 10.6888 17.0164 10.9837C17.3112 11.2785 17.6797 11.489 18.0834 11.5931L25.2409 13.4376C25.364 13.4716 25.4726 13.545 25.5499 13.6466C25.6273 13.7481 25.6691 13.8723 25.6691 14C25.6691 14.1276 25.6273 14.2518 25.5499 14.3534C25.4726 14.455 25.364 14.5283 25.2409 14.5623L18.0834 16.4068C17.6797 16.511 17.3112 16.7214 17.0164 17.0162C16.7215 17.3111 16.5111 17.6795 16.4069 18.0833L14.5613 25.2408C14.5269 25.3634 14.4535 25.4714 14.3521 25.5483C14.2506 25.6253 14.1268 25.6669 13.9995 25.6669C13.8722 25.6669 13.7484 25.6253 13.647 25.5483C13.5455 25.4714 13.4721 25.3634 13.4378 25.2408L11.5933 18.0833Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.3333 3.5V8.16667" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.6667 5.83325H21" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.66675 19.8333V22.1666" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83333 21H3.5" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Learn About Sai Baba",
    description: "A great place to learn about Sai Baba's life, teachings, and the magic of his miracles",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M18.6666 24.5V22.1667C18.6666 20.929 18.1749 19.742 17.2997 18.8668C16.4246 17.9917 15.2376 17.5 13.9999 17.5H6.99992C5.76224 17.5 4.57526 17.9917 3.70009 18.8668C2.82492 19.742 2.33325 20.929 2.33325 22.1667V24.5" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.4999 12.8333C13.0772 12.8333 15.1666 10.744 15.1666 8.16667C15.1666 5.58934 13.0772 3.5 10.4999 3.5C7.92259 3.5 5.83325 5.58934 5.83325 8.16667C5.83325 10.744 7.92259 12.8333 10.4999 12.8333Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.6667 24.4999V22.1666C25.666 21.1326 25.3218 20.1282 24.6883 19.311C24.0549 18.4938 23.1679 17.9101 22.1667 17.6516" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6667 3.65161C19.6706 3.90863 20.5603 4.49243 21.1957 5.31097C21.831 6.12952 22.1759 7.13625 22.1759 8.17244C22.1759 9.20864 21.831 10.2154 21.1957 11.0339C20.5603 11.8525 19.6706 12.4363 18.6667 12.6933" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Must-Visit Destination",
    description: "Perfect for anyone interested in Hinduism or spiritual experiences",
    icon: (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M2.33337 10.4999C3.26163 10.4999 4.15187 10.8687 4.80825 11.525C5.46462 12.1814 5.83337 13.0717 5.83337 13.9999C5.83337 14.9282 5.46462 15.8184 4.80825 16.4748C4.15187 17.1312 3.26163 17.4999 2.33337 17.4999V19.8333C2.33337 20.4521 2.57921 21.0456 3.01679 21.4832C3.45438 21.9208 4.04787 22.1666 4.66671 22.1666H23.3334C23.9522 22.1666 24.5457 21.9208 24.9833 21.4832C25.4209 21.0456 25.6667 20.4521 25.6667 19.8333V17.4999C24.7384 17.4999 23.8482 17.1312 23.1918 16.4748C22.5355 15.8184 22.1667 14.9282 22.1667 13.9999C22.1667 13.0717 22.5355 12.1814 23.1918 11.525C23.8482 10.8687 24.7384 10.4999 25.6667 10.4999V8.16659C25.6667 7.54775 25.4209 6.95425 24.9833 6.51667C24.5457 6.07908 23.9522 5.83325 23.3334 5.83325H4.66671C4.04787 5.83325 3.45438 6.07908 3.01679 6.51667C2.57921 6.95425 2.33337 7.54775 2.33337 8.16659V10.4999Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.1666 5.83325V8.16659" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.1666 19.8333V22.1666" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.1666 12.8333V15.1666" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    title: "Fun & Educational",
    description: "A must-visit for a fun and educational day out for the whole family",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M2.33325 11.6666C2.33325 11.6666 5.83325 8.16659 5.83325 2.33325" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.6667 11.6666C25.6667 11.6666 22.1667 8.16659 22.1667 2.33325" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.6666 2.33325C11.6666 7.46659 7.46659 11.6666 2.33325 11.6666" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.3333 2.33325C16.3333 7.46659 20.5333 11.6666 25.6666 11.6666" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.33325 11.6667C2.33325 11.6667 4.66659 14.0001 4.66659 17.5001" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.6666 11.6667C25.6666 11.6667 23.3333 14.0001 23.3333 17.5001" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33325 17.5H18.6666" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.33325 25.6667V24.5001C2.33325 23.8812 2.57908 23.2878 3.01667 22.8502C3.45425 22.4126 4.04775 22.1667 4.66659 22.1667H9.33325C9.95209 22.1667 10.5456 22.4126 10.9832 22.8502C11.4208 23.2878 11.6666 23.8812 11.6666 24.5001V25.6667" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.3333 25.6667V24.5001C16.3333 23.8812 16.5791 23.2878 17.0167 22.8502C17.4543 22.4126 18.0477 22.1667 18.6666 22.1667H23.3333C23.9521 22.1667 24.5456 22.4126 24.9832 22.8502C25.4208 23.2878 25.6666 23.8812 25.6666 24.5001V25.6667" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-[2rem] p-8 flex flex-col items-start min-h-[220px] transition-transform hover:scale-[1.02]">
    <div className="bg-[#CD3F0D] p-3 rounded-2xl text-white mb-6">
      {icon}
    </div>
    <h3 className="text-gray-900 text-xl font-bold mb-3 font-['Anek_Latin']">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed font-['Anek_Latin']">
      {description}
    </p>
  </div>
);

export default function AboutCardGrid() {
  return (
    <section className="bg-[#CD3F0D] py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 font-['Anek_Latin']">
            Other Park Features
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-['Anek_Latin']">
            In addition to the main attractions, Sai Teerth offers a complete experience with world-class facilities and amenities
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <FeatureCard 
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}