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
        const res = await fetch("https://strapi.saiteerth.in/api/how-to-reach?populate=*", { next: { revalidate: 60 } });
        const json = await res.json();
        faqData = json?.data?.faq || null;
    } catch (error) {
        console.error(error);
    }

    return(
        <>
        <Navbar></Navbar>
        <InfluencerHero heading="How To Reach" description="Plan your journey to Sai Teerth with clear directions and travel options. Choose the route that’s most comfortable and convenient for you."></InfluencerHero>
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