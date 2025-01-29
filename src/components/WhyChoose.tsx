import { Shield, Target, Clock, Coins } from "lucide-react";

export const WhyChoose = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "Years of experience in affiliate marketing with proven results",
    },
    {
      icon: Target,
      title: "High Converting Offers",
      description: "Exclusive access to top-performing campaigns",
    },
    {
      icon: Clock,
      title: "Fast Payments",
      description: "Weekly payouts with no minimum threshold",
    },
    {
      icon: Coins,
      title: "Competitive Rates",
      description: "Industry-leading commission structures and bonuses",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Why Choose Us</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose ClixAgent
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Partner with the industry's most innovative affiliate network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 animate-fadeIn group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <benefit.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};