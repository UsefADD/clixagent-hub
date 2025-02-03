import { Star, Quote, TrendingUp, DollarSign } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Expert",
      content: "ClixAgent transformed my affiliate business. Their high-converting offers and instant payment system helped me scale from $3K to $25K monthly in just 6 months.",
      rating: 5,
      metric: "$25K/month",
    },
    {
      name: "Michael Chen",
      role: "Affiliate Marketing Veteran",
      content: "The support team is incredible. They're available 24/7 and actually help optimize campaigns. Made over $100K in my first year with their premium offers.",
      rating: 5,
      metric: "$100K/year",
    },
    {
      name: "Emma Rodriguez",
      role: "Social Media Influencer",
      content: "Best decision for my business. Their analytics tools and optimization suggestions helped me achieve a 300% ROI increase across all my campaigns.",
      rating: 5,
      metric: "300% ROI",
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Success Stories</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Real Results from Real Affiliates
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of successful affiliates who are already crushing it with ClixAgent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{review.content}</p>
              <div className="border-t border-gray-700/50 pt-6">
                <p className="font-bold text-white mb-1">{review.name}</p>
                <p className="text-gray-400 text-sm mb-4">{review.role}</p>
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-bold">{review.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20">
            <DollarSign className="w-12 h-12 text-primary" />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Earning?</h3>
              <p className="text-gray-400">Join now and get instant access to premium offers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};