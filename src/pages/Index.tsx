import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Managers } from "@/components/Managers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Managers />
    </div>
  );
};

export default Index;