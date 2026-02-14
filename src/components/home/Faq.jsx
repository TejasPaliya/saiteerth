"use client"
import React, { useState } from "react";

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b" style={isOpen ? { background: '#EAEAEA' } : {}}>
      <button
        className={`w-full text-left p-2 max-md:pb-2 flex justify-between items-center transition-colors duration-200 
        font-['Anek_Latin'] 
        ${isOpen 
          ? "text-black font-bold font-['Anek_Latin']  text-[19px] md:text-[21px] lg:text-[26px] leading-tight" 
          : "text-[#484848] font-semibold text-[19px] font-['Anek_Latin']  leading-[22px] md:text-[22px] lg:text-[26px]"
        }`}
        onClick={onClick}
      >
        {faq.question}
        <span className="w-[44px] h-[44px]">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M21.8235 20.1034L14.4163 27.5112C14.1644 27.7627 13.8478 27.8915 13.4665 27.8976C13.0855 27.9034 12.7631 27.7746 12.4994 27.5112C12.236 27.2475 12.1043 26.928 12.1043 26.5527C12.1043 26.1775 12.236 25.858 12.4994 25.5943L20.6728 17.421C20.8432 17.2509 21.0227 17.1309 21.2116 17.0609C21.4004 16.9908 21.6044 16.9558 21.8235 16.9558C22.0427 16.9558 22.2467 16.9908 22.4355 17.0609C22.6243 17.1309 22.8039 17.2509 22.9743 17.421L31.1476 25.5943C31.3992 25.8462 31.528 26.1628 31.5341 26.5441C31.5399 26.9251 31.411 27.2475 31.1476 27.5112C30.8839 27.7746 30.5645 27.9062 30.1892 27.9062C29.814 27.9062 29.4945 27.7746 29.2308 27.5112L21.8235 20.1034Z" fill="black"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M21.8235 23.544L29.2308 16.1363C29.4827 15.8847 29.7993 15.7559 30.1806 15.7499C30.5616 15.7441 30.8839 15.8729 31.1476 16.1363C31.411 16.4 31.5427 16.7195 31.5427 17.0947C31.5427 17.47 31.411 17.7894 31.1476 18.0531L22.9743 26.2265C22.8039 26.3966 22.6243 26.5166 22.4355 26.5866C22.2467 26.6566 22.0427 26.6916 21.8235 26.6916C21.6044 26.6916 21.4004 26.6566 21.2116 26.5866C21.0227 26.5166 20.8431 26.3966 20.6728 26.2265L12.4994 18.0531C12.2478 17.8013 12.119 17.4847 12.113 17.1034C12.1072 16.7224 12.236 16.4 12.4994 16.1363C12.7631 15.8729 13.0826 15.7412 13.4578 15.7412C13.8331 15.7412 14.1526 15.8729 14.4163 16.1363L21.8235 23.544Z" fill="black"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-2 max-md:pt-0 text-[#484848] font-['Anek_Latin'] font-normal text-[15px] md:text-[13px] lg:text-[15px] lg:leading-normal">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  // Mapping the API data array
  const faqsList = data && data.length > 0 ? data : [];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <div className="text-[#892201] font-['Anek_Latin'] font-bold not-italic text-3xl sm:text-4xl md:text-5xl lg:text-[55px] text-center">
        Frequently Asked Questions
      </div>
      <div className="max-w-6xl mx-auto mt-10 border rounded">
        {faqsList.map((faq, index) => (
          <AccordionItem
            key={faq.id || index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <span className="rounded-[50px] capitalize font-['Anek_Latin'] mt-6 bg-[#FCD503] hover:text-[25px] p-2 px-8 font-bold text-lg md:text-2xl cursor-pointer">
          Explore All FAQs
        </span>
      </div>
    </div>
  );
}