
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/home/Footer";
import InfluencerFaq from "@/components/influencer/InfluencerFaq";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import Navbar from "@/components/Navbar";

export default function Contact(){
    return (<div>
        <Navbar></Navbar>
        <InfluencerHero heading="Contact Us" description="If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !"></InfluencerHero>
        <ContactForm> </ContactForm>
        <InfluencerFaq></InfluencerFaq>
        <Footer></Footer>
    </div>);
}