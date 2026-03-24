
import AboutCardGrid from "@/components/about/AboutCardGrid";
import AboutCSR from "@/components/about/AboutCSR";
import AboutCta from "@/components/about/AboutCta";
import AboutMalpani from "@/components/about/AboutMalpani";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function About(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="About Us" description="After enjoying the amazing shows at Sai Teerth, head to our restaurants for a delightful dining experience. We offer a variety of delicious and hygienic food and beverages to suit all tastes."></InfluencerHero>
        <AboutCta></AboutCta>
        <AboutCardGrid></AboutCardGrid>
        <AboutMalpani></AboutMalpani>
        <AboutCSR></AboutCSR>
        <Footer></Footer>
        <MobileBottomBar></MobileBottomBar>
    </div>);
}