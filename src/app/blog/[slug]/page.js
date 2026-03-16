import Footer from '@/components/home/Footer';
import MobileBottomBar from '@/components/home/MobileBottomBar';
import Navbar from '@/components/Navbar';
import React from 'react';

// Fetching data from Strapi
async function getBlogData(slug) {
  // Note: Added a small delay/cache-busting if needed for dev
  const res = await fetch(`http://13.48.85.216:1337/api/blogs?populate=*&filters[slug][$eq]=${slug}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const json = await res.json();
  return json.data?.[0]; 
}

export default async function BlogPage({ params }) {
  // FIX: Await params before destructuring
  const { slug } = await params; 
  
  const blog = await getBlogData(slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p className="text-gray-500">The blog you are looking for doesn't exist.</p>
      </div>
    );
  }

  const { heading, content } = blog;

  return (
    <div>
        <Navbar></Navbar>
        <article className=" mt-36 mx-auto px-6 lg:px-12 py-16 font-sans antialiased text-slate-900">
          {/* 1. Main Heading */}
          <h1 className="text-4xl font-['Anek_Latin'] max-w-4xl mx-auto md:text-6xl font-black text-center mb-12 tracking-tight">
            {heading}
          </h1>
          {/* 2. Featured Image (Static for now, as per your screenshot) */}
          <div className="relative w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-xl border border-gray-100">
            <img
              src={"http://13.48.85.216:1337"+blog.image.url}
              alt="Sai Teerth Theme Park"
              className="w-full h-full object-cover"
            />
          </div>
          {/* 3. Content Area */}
          <div className="space-y-8">
            {content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-lg leading-relaxed text-slate-700 first-letter:text-3xl first-letter:font-bold first-letter:mr-1">
                    {block.children.map((child, i) => (
                      <span key={i} className={child.bold ? 'font-bold' : ''}>
                        {child.text}
                      </span>
                    ))}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-extrabold text-[#8B1D1D] pt-6">
                    {block.children.map((child, i) => child.text)}
                  </h2>
                );
              }
        
              return null;
            })}
          </div>
        </article>
        <Footer></Footer>
        <MobileBottomBar></MobileBottomBar>
    </div>
  );
}