import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Features } from "@/components/Features";
import { WhyChoose } from "@/components/WhyChoose";
import { Programmes } from "@/components/Programmes";
import { ContactUs } from "@/components/ContactUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <AboutUs />
      <Programmes />
      <WhyChoose />
      <ContactUs />
    </div>
  );
};

export default Index;