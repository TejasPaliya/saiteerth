import GuestCta from "@/components/guest/GuestCta";
import ServiceGrid from "@/components/guest/ServiceGrid";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function Guest(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Guest Facilities" description="After enjoying the amazing shows at Sai Teerth, head to our restaurants for a delightful dining experience. We offer a variety of delicious and hygienic food and beverages to suit all tastes."></InfluencerHero>
        <ServiceGrid></ServiceGrid>
        <GuestCta></GuestCta>
        <MobileBottomBar></MobileBottomBar>
        <Footer></Footer>
    </div>);
}