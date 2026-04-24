import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectSection from "../sections/ProjectSection";
import Section from "../components/Section";
import HeroSection from "../components/Hero";
import Partners from "../sections/PartnerSection";
import LabsHero from "../components/Labs";

function LabsPage() {
  return (
    <div>
      <Header>
        <LabsHero />
      </Header>
      <Footer />
    </div>
  );
}

export default LabsPage;
