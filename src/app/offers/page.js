import Navbar from "@/components/Navbar";
import Notes from "@/components/offers/Notes";
import OfferHero from "@/components/offers/OfferHero";
import RegularTicket from "@/components/offers/RegularTicket";

export default function Offers() {
  return (
    <div className="">
<Navbar></Navbar>
<OfferHero></OfferHero>
<RegularTicket></RegularTicket>
<Notes></Notes>
    </div>
  );
}
