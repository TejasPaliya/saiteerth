import AttractionHero from "@/components/attractions/AttractionHero";
import FiveD from "@/components/attractions/FiveD";
import Section from "@/components/attractions/Section";

const { default: Navbar } = require("@/components/Navbar");

export default function Attractions() {
  return (
    <div className="">
<Navbar></Navbar>
<AttractionHero></AttractionHero>
<Section></Section>
<FiveD></FiveD>
    </div>
  );
}
