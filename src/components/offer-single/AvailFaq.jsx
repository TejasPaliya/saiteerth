"use client"
import React, { useState } from "react";

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b" style={{
      background: isOpen 
        ? "linear-gradient(rgba(130, 6, 6, 0.53), rgba(130, 6, 6, 0.53)), url('/avail-bg.png')" 
        : "url('/avail-bg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <button
        className={`w-full text-left p-2 max-md:pb-2 flex justify-between items-center transition-colors duration-200 
        font-['Anek_Latin'] 
        ${isOpen 
          ? "text-white font-bold text-[19px] md:text-[21px] lg:text-[26px] leading-tight" 
          : "text-[#DEDEDE] font-semibold text-[19px] leading-[22px] md:text-[22px] lg:text-[26px]"
        }`}
        onClick={onClick}
      >
        {faq.question}
        <span className="w-[44px] h-[44px]">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M21.8235 20.1034L14.4163 27.5112..." fill="white"/> {/* Changed fill to white for visibility when open */}
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M21.8235 23.544L29.2308 16.1363..." fill="#DEDEDE"/> {/* Changed fill to match text color */}
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-2 max-md:pt-0 text-[#DEDEDE] font-['Poppins'] font-normal text-[15px] md:text-[18px] lg:text-[21px] lg:leading-normal">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

const AvailFaq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Safety check: if there are no FAQs in Strapi, hide the section
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="text-[#892201] font-['Anek_Latin'] font-bold not-italic text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center">
        Frequently Asked Questions
      </div>
      <div className="max-w-6xl mx-auto mt-10 border rounded overflow-hidden">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-yellow-400 mx-auto my-6 text-black font-extrabold py-3 px-10 rounded-full uppercase tracking-tight shadow-sm hover:bg-yellow-500 transition-colors duration-200">
          Explore All FAQs
        </button>
      </div>
    </div>
  )
}

export default AvailFaq;