import Navbar from "@/components/Navbar";
import AvailFaq from "@/components/offer-single/AvailFaq";
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
<AvailFaq></AvailFaq>
    </div>
  );
}
