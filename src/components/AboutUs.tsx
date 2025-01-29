import { Building2, Target, Trophy, Users2 } from "lucide-react";

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
            Leading the Future of Affiliate Marketing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're revolutionizing the affiliate marketing industry with cutting-edge technology and unmatched support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Building2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Legacy</h3>
            <p className="text-gray-400">
              Founded by industry veterans with over a decade of experience in affiliate marketing and digital advertising
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Target className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-400">
              Empowering affiliates with innovative tools and exclusive opportunities to maximize their earning potential
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Trophy className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Success</h3>
            <p className="text-gray-400">
              Proven track record of helping affiliates scale their campaigns and achieve unprecedented ROI
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <Users2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-white">Our Community</h3>
            <p className="text-gray-400">
              A thriving network of successful affiliates sharing insights and strategies for mutual growth
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">10K+</h4>
              <p className="text-gray-400">Active Affiliates</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">$50M+</h4>
              <p className="text-gray-400">Paid to Partners</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-primary mb-2">99.9%</h4>
              <p className="text-gray-400">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};