import React from 'react';

const InfluencerTerms = () => {
  const terms = [
    "Children below 3.3 feet tall can enter for free.",
    "An extra 18% tax will be added to your bill.",
    "Food, beverages and shopping are not included in the ticket price. You will need to pay extra for these.",
    "Once you buy a ticket, you cannot get your money back.",
    "Alcohol and drunk visitors are not allowed in the park.",
    "Show times may change based on the crowd. / शो के समय भीड़ के आधार पर बदले जा सकते हैं।",
    "You can bring your phone, but you cannot take pictures or videos of the attractions.",
    "It usually takes about 3 hours to see everything in the park.",
    "You can store your bags for Rs.50 at our dedicated baggage counter.",
    "Parking will be available at extra cost.",
    "Smoking is prohibited inside the park."
  ];

  return (
    <div className="min-h-screen hidden bg-[#CD3F0D] flex flex-col items-center justify-center p-6 font-['Anek_Latin'] text-white">
      <div className=" w-full">
        <h1 className="text-3xl md:text-[60px] font-['Anek_Latin'] font-bold text-center mb-10 tracking-wide">
          Terms & Conditions
        </h1>

        <ul className=" mb-12 md:px-6">
          {terms.map((term, index) => (
            <li key={index} className="flex items-center gap-3 text-lg md:text-[29px] ">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
              <span>{term}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
            <a href="https://saiteerth.in/book/" className="rounded-[50px] font-['Anek_Latin'] bg-[#FCD503] hover:scale-105 transition-transform p-3 px-10 font-bold text-lg md:text-2xl text-black">
            Book Your Tickets Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfluencerTerms;