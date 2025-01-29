import { CheckCircle, Zap, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing marketing tools and platforms",
  },
  {
    icon: Zap,
    title: "Instant Tracking",
    description: "Real-time analytics and performance tracking for all your campaigns",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversions",
    description: "Optimize your campaigns with data-driven insights and recommendations",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Guaranteed secure transactions and timely affiliate payments",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ClixAgents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our cutting-edge affiliate marketing platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};