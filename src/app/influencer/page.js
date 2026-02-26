import Footer from "@/components/home/Footer";
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
    <InfluencerHero heading="Create Unforgettable Group Experiences" description="Plan the perfect group outing with our specialized group packages. From team-building to family gatherings, we've curated everything you need for an amazing day at the park."></InfluencerHero>
      <CollaborationSection />
      
      <InfluencerForm />
      <InfluencerTerms></InfluencerTerms>
      <InfluencerFaq></InfluencerFaq>
      <Footer></Footer>
    </>
  );
}
