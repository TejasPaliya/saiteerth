import AttractionHero from "@/components/attractions/AttractionHero";
import FiveD from "@/components/attractions/FiveD";
import Section from "@/components/attractions/Section";
import Offers from "@/components/home/Offers";
import Stories from "@/components/home/Stories";

const { default: Navbar } = require("@/components/Navbar");

export default function Attractions() {
  return (
    <div className="">
<Navbar></Navbar>
<AttractionHero title="Lanka Dahan" type="5D Show" description="Spectacular 5D experience recounting the adventure of Hanuman in Lanka. Hanuman was the son of Vayu, the God of the wind, and a celestial nymph named Anjana."></AttractionHero>
<Section></Section>
<FiveD></FiveD>
<Offers></Offers>
<Stories></Stories>
    </div>
  );
}
