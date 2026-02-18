import PlanVisit from "@/components/home/PlanVisit";
import Navbar from "@/components/Navbar";
import Notes from "@/components/offers/Notes";
import OfferGrid from "@/components/offers/OfferGrid";
import OfferHero from "@/components/offers/OfferHero";
import RegularTicket from "@/components/offers/RegularTicket";

async function getPageData() {
  const [allOfferRes, offersRes] = await Promise.all([
    fetch("http://13.48.85.216:1337/api/all-offer?populate=*", { cache: "no-store" }),
    fetch("http://13.48.85.216:1337/api/offers?populate=*", { cache: "no-store" })
  ]);

  const allOfferData = await allOfferRes.json();
  const offersListData = await offersRes.json();

  return {
    pageConfig: allOfferData.data,
    offersList: offersListData.data
  };
}

export default async function Offers() {
  const { pageConfig, offersList } = await getPageData();

  return (
    <div>
      <Navbar />
      
      <OfferHero 
        videoSrc={pageConfig?.video?.[0]?.url} 
        description={pageConfig?.description} 
      />
      <RegularTicket tickets={pageConfig?.tickets} />
      {/* Passing the list of 10% off offers etc here */}
      <OfferGrid offers={offersList} />
      
      
      
      <Notes 
        notes={pageConfig?.notes} 
        terms={pageConfig?.terms} 
      />
      
      <PlanVisit />
    </div>
  );
}