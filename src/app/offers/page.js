import PlanVisit from "@/components/home/PlanVisit";
import Navbar from "@/components/Navbar";
import Notes from "@/components/offers/Notes";
import OfferGrid from "@/components/offers/OfferGrid";
import OfferHero from "@/components/offers/OfferHero";
import RegularTicket from "@/components/offers/RegularTicket";

export default function Offers() {
  return (
    <div className="">
<Navbar></Navbar>
<OfferHero></OfferHero>
<RegularTicket></RegularTicket>
<OfferGrid></OfferGrid>

<Notes></Notes>
<PlanVisit></PlanVisit>
    </div>
  );
}
