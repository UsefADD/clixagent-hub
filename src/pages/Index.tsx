import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhyChoose } from "@/components/WhyChoose";
import { Managers } from "@/components/Managers";
import { InfoSections } from "@/components/InfoSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <WhyChoose />
      <Managers />
      <InfoSections />
    </div>
  );
};

export default Index;