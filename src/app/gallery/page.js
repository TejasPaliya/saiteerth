
import GallaryImages from "@/components/gallary/GallaryImages";
import GalleryTabs from "@/components/gallary/GallaryTabs";
import PhotoTips from "@/components/gallary/PhotoTips";
import PhotoTypes from "@/components/gallary/PhotoTypes";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";
import TopDestination from "@/components/home/Dastination";

async function getDestinationData() {
  const homeUrl = "http://13.48.85.216:1337/api/home?populate[destination][populate]=*";
  try {
    const res = await fetch(homeUrl, { cache: 'no-store' });
    if (!res.ok) {
      return { destination: null };
    }
    const json = await res.json();
    return { destination: json.data?.destination || null };
  } catch (error) {
    console.error("Error fetching destination data:", error);
    return { destination: null };
  }
}

export default async function Gallery(){
    const { destination } = await getDestinationData();

    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Attractions Gallery at Sai Teerth Theme Park" description="Plan the perfect group outing with our specialized group packages. From team-building to family gatherings, we've curated everything you need for an amazing day at the park."></InfluencerHero>
        <GalleryTabs></GalleryTabs>
        <TopDestination data={destination} />
        <Footer></Footer>
        <MobileBottomBar></MobileBottomBar>
    </div>);
}