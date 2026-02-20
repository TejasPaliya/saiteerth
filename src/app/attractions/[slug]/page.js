import AttractionHero from "@/components/attractions/AttractionHero";
import FiveD from "@/components/attractions/FiveD";
import Section from "@/components/attractions/Section";
import Footer from "@/components/home/Footer";
import Offers from "@/components/home/Offers";
import Stories from "@/components/home/Stories";
import Navbar from "@/components/Navbar";

async function getAttractionPageData(slug) {
  const attractionUrl = `http://13.48.85.216:1337/api/attractions?filters[slug][$eq]=${slug}&populate[attraction_video][populate]=*&populate[section][populate]=*&populate[cta][populate]=*`;
  const offersUrl = "http://13.48.85.216:1337/api/offers?populate=*";
  const attractionsUrl = "http://13.48.85.216:1337/api/attractions?populate=*";

  const [attractionRes, offersRes, attractionsRes] = await Promise.all([
    fetch(attractionUrl, { cache: 'no-store' }),
    fetch(offersUrl, { cache: 'no-store' }),
    fetch(attractionsUrl, { cache: 'no-store' })
  ]);

  if (!attractionRes.ok || !offersRes.ok || !attractionsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [attractionJson, offersJson, attractionsJson] = await Promise.all([
    attractionRes.json(),
    offersRes.json(),
    attractionsRes.json()
  ]);

  return {
    attraction: attractionJson.data[0],
    offersData: offersJson.data,
    attractionsData: attractionsJson.data
  };
}

export default async function Attractions({ params }) {
  const { slug } = await params;   
  const { attraction, offersData, attractionsData } = await getAttractionPageData(slug);

  if (!attraction) {
    return <div>Attraction not found</div>;
  }

  return (
    <div className="">
      <Navbar></Navbar>
      <AttractionHero 
        title={attraction.name}
        type={attraction.show_type}
        description={attraction.show_description}
        videoUrl={"http://13.48.85.216:1337" + attraction.attraction_video?.url}
      />
      <Section data={attraction.section} />
      <FiveD data={attraction.cta} />
      <Footer></Footer>
    </div>
  );
}