import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Managers } from "@/components/Managers";
import { AboutUs } from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyChoose />
      <AboutUs />
      <Managers />
    </div>
  );
};

export default Index;