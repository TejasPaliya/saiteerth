import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import CollaborationSection from "@/components/influencer/CollaborationSection";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerForm from "@/components/influencer/InfluencerForm";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import InfluencerTerms from "@/components/influencer/InfluencerTerms";
import Navbar from "@/components/Navbar";

export default function Influencer(){
  return (
    <>
    <Navbar></Navbar>
    <InfluencerHero heading="Are You A Content Creator?" description="Interested in collaborating with us? Fill out the form below and we’ll reach out to you."></InfluencerHero>
      <CollaborationSection />
      
      <InfluencerForm />
      <InfluencerTerms></InfluencerTerms>
      <InfluencerFaq></InfluencerFaq>
      <MobileBottomBar></MobileBottomBar>
      <Footer></Footer>
    </>
  );
}
