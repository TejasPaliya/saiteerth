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
import Vip from "@/components/home/Vip";

async function getHomePageData() {
  const homeUrl = "http://13.48.85.216:1337/api/home?populate[hero_video][populate]=*&populate[stories][populate]=*&populate[samadhi][populate]=*&populate[indoor][populate]=*&populate[eats][populate]=*&populate[youtube][populate]=*&populate[destination][populate]=*&populate[faq][populate]=*&populate[review][populate][comments][populate]=*&populate[instagram][populate][logo][populate]=*&populate[instagram][populate][reel][populate]=*";
  const offersUrl = "http://13.48.85.216:1337/api/offers?populate=*";
  const attractionsUrl = "http://13.48.85.216:1337/api/attractions?populate=*";

  // Fetching all three APIs simultaneously
  const [homeRes, offersRes, attractionsRes] = await Promise.all([
    fetch(homeUrl, { cache: 'no-store' }),
    fetch(offersUrl, { cache: 'no-store' }),
    fetch(attractionsUrl, { cache: 'no-store' })
  ]);

  if (!homeRes.ok || !offersRes.ok || !attractionsRes.ok) {
    throw new Error('Failed to fetch page data');
  }

  const [homeJson, offersJson, attractionsJson] = await Promise.all([
    homeRes.json(),
    offersRes.json(),
    attractionsRes.json()
  ]);

  return {
    homeData: homeJson.data,
    offersData: offersJson.data,
    attractionsData: attractionsJson.data
  };
}

export default async function Home() {
  const { homeData, offersData, attractionsData } = await getHomePageData();

  const { 
    hero_video, stories, samadhi, package_heading, 
    indoor, eats, youtube, destination, instagram, review, faq 
  } = homeData;

  return (
    <div className="">
      <Navbar />
      <HeroSec data={hero_video} />
      <Stories data={stories} attractionsList={attractionsData}/>
      <Samadhi data={samadhi} />
      
      {/* Offers Section */}
      <Offers heading={package_heading} offersList={offersData} />

      {/* Attractions Section (Indoor) */}
      <Indoore data={indoor}  />
      
      <Eat data={eats} />
      <Vip></Vip>
      <Youtube data={youtube} />
  
      <Insta data={instagram} />
      <Testimonials data={review} />
      <Accordion data={faq} />
      
      <PlanVisit />
      <MobileBottomBar />
      <Footer />
    </div>
  );
}