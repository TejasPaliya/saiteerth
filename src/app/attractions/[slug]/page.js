import AttractionHero from "@/components/attractions/AttractionHero";
import FiveD from "@/components/attractions/FiveD";
import Section from "@/components/attractions/Section";
import Offers from "@/components/home/Offers";
import Stories from "@/components/home/Stories";

const { default: Navbar } = require("@/components/Navbar");
async function getAttractionData(slug) {
    console.log("slug:",slug)
    
  // We filter by slug using Strapi's filters[slug] query parameter
  const res = await fetch(
    `http://13.48.85.216:1337/api/attractions?filters[slug][$eq]=${slug}&populate[attraction_video][populate]=*&populate[section][populate]=*&populate[cta][populate]=*`,
    { cache: 'no-store' } // This ensures Server Side Rendering (SSR) on every request
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  console.log(result.data[0])
  // Return the first item from the data array
  return result.data[0];

}
export default async function Attractions({ params }) {
   const { slug } = await params;   
  const attraction = await getAttractionData(slug);

  // Handle case where attraction is not found
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
        videoUrl={"http://13.48.85.216:1337"+attraction.attraction_video?.url}
      />
<Section data={attraction.section} />
<FiveD data={attraction.cta} />

    </div>
  );
}
