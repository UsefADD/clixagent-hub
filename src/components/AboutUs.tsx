import { Building2, Target, Trophy, Users2, Rocket, Shield } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">About ClixAgent</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Success Is Our Mission
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're more than just an affiliate network - we're your partner in building a profitable online business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Building2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Industry Leaders</h3>
            <p className="text-gray-400">
              Founded by marketing veterans with over 15 years of experience in scaling successful affiliate campaigns
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Target className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Premium Network</h3>
            <p className="text-gray-400">
              Carefully curated, high-converting offers from top brands with industry-leading commission rates
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Trophy className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Proven Results</h3>
            <p className="text-gray-400">
              Our top affiliates consistently earn $50K+ monthly using our advanced tools and strategies
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Users2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Elite Community</h3>
            <p className="text-gray-400">
              Join a network of successful affiliates sharing winning strategies and insights
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">50K+</h4>
              <p className="text-gray-400">Active Affiliates</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">$100M+</h4>
              <p className="text-gray-400">Paid to Partners</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-gray-400">Expert Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};