import GuestCta from "@/components/guest/GuestCta";
import ServiceGrid from "@/components/guest/ServiceGrid";
import Footer from "@/components/home/Footer";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function Guest(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero></InfluencerHero>
        <ServiceGrid></ServiceGrid>
        <GuestCta></GuestCta>
        <Footer></Footer>
    </div>);
}