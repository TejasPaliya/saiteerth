import AttractionHero from "@/components/attractions/AttractionHero"
import FoodGrid from "@/components/food/FoodGrid"
import RestaurantFoodZone from "@/components/food/RestaurantFoodZone"
import Footer from "@/components/home/Footer"
import InfluencerHero from "@/components/influencer/InfluencerHero"
import Navbar from "@/components/Navbar"
export default function Food(){
    return(
        <div>
            <Navbar></Navbar>
            <InfluencerHero></InfluencerHero>
        <RestaurantFoodZone></RestaurantFoodZone>
        <FoodGrid></FoodGrid>
        <Footer></Footer>
        </div>
    )
}