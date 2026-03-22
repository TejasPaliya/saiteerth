import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import CollaborationSection from "@/components/influencer/CollaborationSection";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerForm from "@/components/influencer/InfluencerForm";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import InfluencerTerms from "@/components/influencer/InfluencerTerms";
import Navbar from "@/components/Navbar";

export default async function Influencer(){
  let faqData = null;
  try {
    const res = await fetch("http://13.48.85.216:1337/api/influencer?populate=*", { next: { revalidate: 60 } });
    const json = await res.json();
    faqData = json?.data?.faq || null;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
    <Navbar></Navbar>
    <InfluencerHero heading="Are You A Content Creator?" description="Interested in collaborating with us? Fill out the form below and we’ll reach out to you."></InfluencerHero>
      <CollaborationSection />
      
      <InfluencerForm />
      <InfluencerTerms></InfluencerTerms>
      <InfluencerFaq faqData={faqData}></InfluencerFaq>
      <MobileBottomBar></MobileBottomBar>
      <Footer></Footer>
    </>
  );
}
