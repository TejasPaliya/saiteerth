import AttractionHero from "@/components/attractions/AttractionHero";
import Accordion from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import PlanVisit from "@/components/home/PlanVisit";
import Navbar from "@/components/Navbar";
import Offers from "@/components/home/Offers";
import Stories from "@/components/home/Stories";
import AttractionGrid from "@/components/attractions/AttractionsGrid";

async function getAttractionsPageData() {
  const allAttractionUrl = "http://13.48.85.216:1337/api/all-attraction?populate=*";
  const offersUrl = "http://13.48.85.216:1337/api/offers?populate=*";
  const attractionsUrl = "http://13.48.85.216:1337/api/attractions?populate=*";

  const [allAttrRes, offersRes, attractionsRes] = await Promise.all([
    fetch(allAttractionUrl, { cache: "no-store" }),
    fetch(offersUrl, { cache: "no-store" }),
    fetch(attractionsUrl, { cache: "no-store" }),
  ]);

  if (!allAttrRes.ok || !offersRes.ok || !attractionsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [allAttrJson, offersJson, attractionsJson] = await Promise.all([
    allAttrRes.json(),
    offersRes.json(),
    attractionsRes.json(),
  ]);

  return {
    pageData: allAttrJson.data,
    offersData: offersJson.data,
    attractionsData: attractionsJson.data,
  };
}

export default async function Attractions() {
  const { pageData, offersData, attractionsData } = await getAttractionsPageData();

  return (
    <div className="min-h-screen">
      <Navbar />

      <AttractionHero
        title={pageData.heading}
        type="Featured Attraction"
        description={pageData.description}
        videoUrl={pageData.video?.url}
      />

<AttractionGrid attractionsList={attractionsData} />

      {/* Passing fetched offers to Offers */}
      <Offers offersList={offersData} />

      <Accordion data={pageData.faq} />
      <PlanVisit />
      <Footer />
    </div>
  );
}