import React from 'react'

const renderRichText = (blocks) => {
  if (!Array.isArray(blocks)) return blocks;

  return blocks.map((block, index) => {
    if (block.type === 'paragraph') {
      return (
        <p key={index} className="mb-2">
          {block.children?.map((child, i) => {
            if (child.type === 'text') {
              return child.bold ? <strong key={i}>{child.text}</strong> : child.text;
            }
            return null;
          })}
        </p>
      );
    }
    if (block.type === 'list') {
      const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
      const listClass = block.format === 'ordered' ? 'list-decimal list-inside' : 'list-disc list-inside space-y-2';
      return (
        <ListTag key={index} className={`${listClass} mb-2`}>
          {block.children?.map((child, i) => {
            if (child.type === 'list-item') {
              return (
                <li key={i}>
                  {child.children?.map((c, j) => {
                    if (c.type === 'text') {
                      return c.bold ? <strong key={j}>{c.text}</strong> : (c.text || "");
                    }
                    return null;
                  })}
                </li>
              );
            }
            return null;
          })}
        </ListTag>
      );
    }
    if (block.type === 'heading') {
      const HeadingTag = `h${block.level || 2}`;
      return (
        <HeadingTag key={index} className="font-bold mb-2">
          {block.children?.map((child, i) => {
            if (child.type === 'text') {
              return child.bold ? <strong key={i}>{child.text}</strong> : child.text;
            }
            return null;
          })}
        </HeadingTag>
      );
    }
    return null;
  });
};

const OfferSingleHero = ({ title, description, imageUrl, url }) => {
  return (
    <div>
      {/* Dynamic Image from Strapi */}
      <img 
        src={"https://strapi.saiteerth.in"+imageUrl || "/single-hero.png"} 
        className='w-full h-auto p-8 max-md:aspect-square max-xl:aspect-video aspect-[32/9]' 
        alt={title} 
      />

      {/* Dynamic Title */}
      <div className="text-[#AE3232] text-center font-['Anek_Latin'] text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[1.2] md:leading-[78px] mb-4">
        {title}
      </div>

      {/* Dynamic Description */}
      <div className="text-[#444] text-center font-['Anek_Latin'] text-[16px] px-8 leading-[24px] font-normal sm:text-[#696969] sm:text-[22px] md:text-[30px] sm:leading-[39px]">
        {renderRichText(description)}
      </div>

      {/* CTA Button */}
     <div className="flex justify-center mt-8 md:mt-12 pb-16 md:pb-0">
        <a href={url} className="bg-[#FCD503] rounded-[41.5px] px-8 md:px-12 py-3 md:py-4 hover:bg-[#e5aa04] transition-colors w-full md:w-auto max-w-xs md:max-w-none">
          <span className="font-['Anek_Latin',sans-serif] font-bold text-[#000000] text-xl md:text-[29px] uppercase">
            AVAIL THIS OFFER
          </span>
        </a>
      </div>
    </div>
  )
}

export default OfferSingleHero
