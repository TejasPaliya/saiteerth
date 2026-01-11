
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSec from "@/components/home/Hero";
import Offers from "@/components/home/Offers";
import Stories from "@/components/home/Stories";
import Indoore from "@/components/home/Indoor";
import Youtube from "@/components/home/YT";
import Eat from "@/components/home/Eats";
import Accordion from "@/components/home/Faq";
import TopDestination from "@/components/home/Dastination";
import Testimonials from "@/components/home/Testimonials";
import PlanVisit from "@/components/home/PlanVisit";
import Samadhi from "@/components/home/Samadhi";
import MobileBottomBar from "@/components/home/MobileBottomBar";
export default function Home() {
  return (
    <div className="">
<Navbar></Navbar>
<HeroSec></HeroSec>
<Stories></Stories>
<Samadhi></Samadhi>
<Offers></Offers>

<Indoore></Indoore>
<Eat></Eat>
<Youtube></Youtube>
<TopDestination></TopDestination>
<Testimonials></Testimonials>
<Accordion></Accordion>
<PlanVisit></PlanVisit>
<MobileBottomBar></MobileBottomBar>
    </div>
  );
}
