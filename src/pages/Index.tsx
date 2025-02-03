import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Features } from "@/components/Features";
import { WhyChoose } from "@/components/WhyChoose";
import { Reviews } from "@/components/Reviews";
import { Managers } from "@/components/Managers";
import { Programmes } from "@/components/Programmes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <AboutUs />
      <Programmes />
      <WhyChoose />
      <Reviews />
      <Managers />
    </div>
  );
};

export default Index;