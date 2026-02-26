import Footer from "@/components/home/Footer";
import Cities from "@/components/how-to-reach/Cities";
import Journey from "@/components/how-to-reach/Journey";
import JourneyAndCTA from "@/components/how-to-reach/JourneyAndCTA";
import Nearby from "@/components/how-to-reach/Nearby";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function HowToReach(){
    return(
        <>
        <Navbar></Navbar>
        <InfluencerHero heading="How To Reach" description="Plan the perfect day with exciting ticket combos designed to give you endless fun and incredible savings!"></InfluencerHero>
        <Nearby></Nearby>
        <Cities></Cities>
        <Journey></Journey>
        <InfluencerFaq></InfluencerFaq>
        <JourneyAndCTA></JourneyAndCTA>
        <Footer></Footer>
        </>
    );
}