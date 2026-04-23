import GuestCta from "@/components/guest/GuestCta";
import ServiceGrid from "@/components/guest/ServiceGrid";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function Guest(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Guest Facilities" description="Explore facilities designed to make your visit smooth and enjoyable. Everything you need for a comfortable day at the park."></InfluencerHero>
        <ServiceGrid></ServiceGrid>
        <GuestCta></GuestCta>
        <MobileBottomBar></MobileBottomBar>
        <Footer></Footer>
    </div>);
}