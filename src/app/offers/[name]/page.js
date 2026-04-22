import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import Navbar from "@/components/Navbar";
import Accordion from "@/components/home/Faq";
import AvailNavbar from "@/components/offer-single/AvailNavbar";
import AvailOffer from "@/components/offer-single/AvailOffer";
import AvailSteps from "@/components/offer-single/AvailSteps";
import OfferSingleHero from "@/components/offer-single/OfferSingleHero";
async function getOfferData(name) {
  // We filter where name equals the slug/parameter from the URL
  const res = await fetch(
    `https://strapi.saiteerth.in/api/offers?filters[slug][$eq]=${name}&populate=*`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch offer data");
  }

  const result = await res.json();
  console.log(result.data[0])
  // Return the first match from the data array
  return result.data[0];
}

export default async function Offers({ params }) {
  const { name } = await params; 
  const offerData = await getOfferData(name);

  // Handle 404 case
  if (!offerData) {
    return <div>Offer not found</div>;
  }

  return (
    <div className="">
   <AvailNavbar></AvailNavbar>
<OfferSingleHero 
  title={offerData.name} 
  description={offerData.offer_description} 
  imageUrl={offerData.image?.url} 
  url={offerData.link}
/>
<AvailOffer  details={offerData.details} url={offerData.link} />
<AvailSteps steps={offerData.steps} url={offerData.link}/>
<Accordion data={offerData.faq} />
<MobileBottomBar></MobileBottomBar>
<Footer></Footer>
    </div>
  );
}