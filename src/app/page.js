import Navbar from "@/components/Navbar";
import HeroSec from "@/components/home/Hero";
import Stories from "@/components/home/Stories";
import Samadhi from "@/components/home/Samadhi";
import Offers from "@/components/home/Offers";
import Indoore from "@/components/home/Indoor";
import Eat from "@/components/home/Eats";
import Youtube from "@/components/home/YT";
import TopDestination from "@/components/home/Dastination";
import Insta from "@/components/home/Insta";
import Testimonials from "@/components/home/Testimonials";
import Accordion from "@/components/home/Faq";
import PlanVisit from "@/components/home/PlanVisit";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import Footer from "@/components/home/Footer";

async function getHomePageData() {
  const url = "https://diplomatic-car-77fe18c25d.strapiapp.com/api/home?populate[hero_video][populate]=*&populate[stories][populate]=*&populate[samadhi][populate]=*&populate[indoor][populate]=*&populate[eats][populate]=*&populate[youtube][populate]=*&populate[instagram][populate]=*&populate[review][populate]=*&populate[destination][populate]=*&populate[faq][populate]=*";

  const res = await fetch(url, {
    // This ensures Server Side Rendering by disabling static caching
    cache: 'no-store' 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch home page data');
  }

  const json = await res.json();
  return json.data;
}

export default async function Home() {
  const data = await getHomePageData();

  // We extract specific sections from the data object
  const { 
    hero_video, 
    stories, 
    samadhi, 
    package_heading, 
    indoor, 
    eats, 
    youtube, 
    destination, 
    instagram, 
    review, 
    faq 
  } = data;

  return (
    <div className="">
      <Navbar />
      
      {/* Hero section with video data */}
      <HeroSec data={hero_video} />
      
      {/* Stories section */}
      <Stories data={stories} />
      
      {/* Samadhi section */}
      <Samadhi data={samadhi} />
      
      {/* Offers section using package_heading */}
      <Offers heading={package_heading} />

      {/* Indoor AC Park section */}
      <Indoore data={indoor} />
      
      {/* Eats/Dining section */}
      <Eat data={eats} />
      
      {/* YouTube section */}
      <Youtube data={youtube} />
      
      {/* Top Destinations section */}
      <TopDestination data={destination} />
      
      {/* Instagram Feed section */}
      <Insta data={instagram} />
      
      {/* Testimonials/Reviews section */}
      <Testimonials data={review} />
      
      {/* FAQ Accordion section */}
      <Accordion data={faq} />
      
      <PlanVisit />
      <MobileBottomBar />
      <Footer />
    </div>
  );
}