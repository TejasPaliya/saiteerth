import AttractionHero from "@/components/attractions/AttractionHero"
import FoodGrid from "@/components/food/FoodGrid"
import RestaurantFoodZone from "@/components/food/RestaurantFoodZone"
import Footer from "@/components/home/Footer"
import MobileBottomBar from "@/components/home/MobileBottomBar"
import InfluencerHero from "@/components/influencer/InfluencerHero"
import Navbar from "@/components/Navbar"
export default function Food(){
    return(
        <div>
            <Navbar></Navbar>
            <InfluencerHero heading="Foods & Beverages" description="After enjoying the amazing shows at Sai Teerth, head to our restaurants for a delightful dining experience. We offer a variety of delicious and hygienic food and beverages to suit all tastes."></InfluencerHero>
        <RestaurantFoodZone></RestaurantFoodZone>
        <FoodGrid></FoodGrid>
        <Footer></Footer>
        <MobileBottomBar></MobileBottomBar>
        </div>
    )
}