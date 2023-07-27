import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";

import "@/style/home.css";

function Home() {
    return (
        <>
            <div className="home-page-body">
                <Navbar />
                <HeroSection />
                <FeaturesSection />
                <Benefits />
                <Footer />

            </div>
        </>
    );
}

export default Home;
