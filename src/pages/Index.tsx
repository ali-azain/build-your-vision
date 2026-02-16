import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
