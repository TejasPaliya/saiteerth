
import ContactDetails from "@/components/group/ContactDetails";
import GroupForm from "@/components/group/GroupForm";
import GroupGrid from "@/components/group/GroupGrid";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function Group(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Create Unforgettable Group Experiences" description="Plan the perfect group outing with our specialized group packages. From team-building to family gatherings, we've curated everything you need for an amazing day at the park."></InfluencerHero>
        
        <ContactDetails></ContactDetails>
        <GroupForm></GroupForm>
        <GroupGrid></GroupGrid>
        <InfluencerFaq></InfluencerFaq>
          <MobileBottomBar></MobileBottomBar>
        <Footer></Footer>
    </div>);
}