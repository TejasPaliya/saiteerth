
import GallaryImages from "@/components/gallary/GallaryImages";
import GalleryTabs from "@/components/gallary/GallaryTabs";
import PhotoTips from "@/components/gallary/PhotoTips";
import PhotoTypes from "@/components/gallary/PhotoTypes";
import Footer from "@/components/home/Footer";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function Group(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Attractions Gallery at Sai Teerth Theme Park" description="Plan the perfect group outing with our specialized group packages. From team-building to family gatherings, we've curated everything you need for an amazing day at the park."></InfluencerHero>
        <GalleryTabs></GalleryTabs>
        <GallaryImages></GallaryImages>
        <PhotoTypes></PhotoTypes>
        <PhotoTips></PhotoTips>
        <Footer></Footer>
    </div>);
}