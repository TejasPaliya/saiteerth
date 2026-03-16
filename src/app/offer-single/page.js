import Navbar from "@/components/Navbar";
import Accordion from "@/components/home/Faq";
import AvailNavbar from "@/components/offer-single/AvailNavbar";
import AvailOffer from "@/components/offer-single/AvailOffer";
import AvailSteps from "@/components/offer-single/AvailSteps";
import OfferSingleHero from "@/components/offer-single/OfferSingleHero";

export default function OffersSingle() {
  return (
    <div className="">
<AvailNavbar></AvailNavbar>
<OfferSingleHero></OfferSingleHero>
<AvailOffer></AvailOffer>
<AvailSteps></AvailSteps>
<Accordion></Accordion>
    </div>
  );
}
