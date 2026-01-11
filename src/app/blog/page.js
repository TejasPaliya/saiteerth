import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import Offers from "@/components/home/Offers";
import PlanVisit from "@/components/home/PlanVisit";
import Navbar from "@/components/Navbar";


export default function Blog() {
  return (
    <div className="">
<Navbar></Navbar>
<BlogHero></BlogHero>
<BlogList></BlogList>
<Offers></Offers>
<PlanVisit></PlanVisit>
    </div>
  );
}
