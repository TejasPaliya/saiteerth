import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import Cities from "@/components/how-to-reach/Cities";
import Journey from "@/components/how-to-reach/Journey";
import JourneyAndCTA from "@/components/how-to-reach/JourneyAndCTA";
import Nearby from "@/components/how-to-reach/Nearby";
import SaiTeerthCard from "@/components/how-to-reach/SaiTeerthCard";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default async function HowToReach(){
    let faqData = null;
    try {
        const res = await fetch("http://13.48.85.216:1337/api/how-to-reach?populate=*", { next: { revalidate: 60 } });
        const json = await res.json();
        faqData = json?.data?.faq || null;
    } catch (error) {
        console.error(error);
    }

    return(
        <>
        <Navbar></Navbar>
        <InfluencerHero heading="How To Reach" description="Plan the perfect day with exciting ticket combos designed to give you endless fun and incredible savings!"></InfluencerHero>
        <Nearby></Nearby>
        <SaiTeerthCard></SaiTeerthCard>
        <Cities></Cities>
        <Journey></Journey>
        <InfluencerFaq faqData={faqData}></InfluencerFaq>
        <JourneyAndCTA></JourneyAndCTA>
        <MobileBottomBar></MobileBottomBar>
        <Footer></Footer>
        </>
    );
}