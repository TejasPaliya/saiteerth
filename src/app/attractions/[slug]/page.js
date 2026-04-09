import AttractionHero from "@/components/attractions/AttractionHero";
import FiveD from "@/components/attractions/FiveD";
import Section from "@/components/attractions/Section";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import Offers from "@/components/home/Offers";
import Stories from "@/components/home/Stories";
import Navbar from "@/components/Navbar";

async function getAttractionPageData(slug) {
  const attractionUrl = `https://strapi.saiteerth.in/api/attractions?filters[slug][$eq]=${slug}&populate[attraction_video][populate]=*&populate[section][populate]=*&populate[cta][populate]=*`;
  const offersUrl = "https://strapi.saiteerth.in/api/offers?populate=*";
  const attractionsUrl = "https://strapi.saiteerth.in/api/attractions?populate=*";

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
        videoUrl={"https://strapi.saiteerth.in" + attraction.attraction_video?.url}
      />
      <Section data={attraction.section} />
      <FiveD data={attraction.cta} />
      <Stories attractionsList={attractionsData}></Stories>
          <div className="flex justify-center py-2 pb-6">
            <a href="https://saiteerth.in/book-now?theme=sai-teerth&location_id=5&destination_id=10" className="rounded-[50px] font-['Anek_Latin'] mx-auto mt-6 bg-[#FCD503] hover:scale-105 transition-transform p-2 px-8 font-bold text-lg md:text-2xl">
            Explore More offers
                    </a>
          </div>
      <Footer></Footer>
      <MobileBottomBar></MobileBottomBar>
    </div>
  );
}