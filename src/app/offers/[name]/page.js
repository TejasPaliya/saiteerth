import Navbar from "@/components/Navbar";
import AvailFaq from "@/components/offer-single/AvailFaq";
import AvailNavbar from "@/components/offer-single/AvailNavbar";
import AvailOffer from "@/components/offer-single/AvailOffer";
import AvailSteps from "@/components/offer-single/AvailSteps";
import OfferSingleHero from "@/components/offer-single/OfferSingleHero";
async function getOfferData(name) {
  // We filter where name equals the slug/parameter from the URL
  const res = await fetch(
    `https://diplomatic-car-77fe18c25d.strapiapp.com/api/offers?filters[name][$eq]=${name}&populate=*`,
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
  description={offerData.description} 
  imageUrl={offerData.image?.url} 
/>
<AvailOffer details={offerData.details} />
<AvailSteps steps={offerData.steps} />
<AvailFaq faqs={offerData.faq} />
    </div>
  );
}