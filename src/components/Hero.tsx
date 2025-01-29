import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">The #1 Affiliate Marketing Platform</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Turn Your Traffic Into <br />
            Profitable Conversions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful affiliates who have transformed their marketing strategy with ClixAgents
          </p>
          <div className="flex items-center justify-center gap-6 pt-8">
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/20 flex items-center gap-2">
              Start Earning Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};