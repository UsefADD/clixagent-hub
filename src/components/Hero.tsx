import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-background px-4">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Welcome to ClixAgents</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            Maximize Your Affiliate Marketing Success
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful affiliates who have transformed their marketing strategy with ClixAgents
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-accent text-foreground rounded-lg font-medium transition-all hover:bg-accent/80">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};