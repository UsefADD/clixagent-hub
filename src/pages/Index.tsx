import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Reviews } from "@/components/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutUs />
      <Reviews />
    </div>
  );
};

export default Index;