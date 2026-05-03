
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import Footer from "@/components/home/Footer";
import MobileBottomBar from "@/components/home/MobileBottomBar";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default async function Contact(){
    let faqData = null;
    try {
        const res = await fetch("https://strapi.saiteerth.in/api/contact?populate=*", { next: { revalidate: 60 } });
        const json = await res.json();
        faqData = json?.data?.faq || null;
    } catch (error) {
        console.error(error);
    }

    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Contact Us" description="Have questions or need help planning your visit? Reach out to us anytime for assistance."></InfluencerHero>
        <ContactForm> </ContactForm>
<ContactMap></ContactMap>
        <InfluencerFaq faqData={faqData}></InfluencerFaq>
        <Footer></Footer>
        <MobileBottomBar></MobileBottomBar>
    </div>);
}