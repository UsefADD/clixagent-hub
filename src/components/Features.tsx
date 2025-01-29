import { CheckCircle, Zap, TrendingUp, Shield, DollarSign, Users, BarChart, Award } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "High Payouts",
    description: "Industry-leading commission rates with fast, reliable payments",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 dedicated support team to help you maximize earnings",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Advanced tracking and reporting for data-driven decisions",
  },
  {
    icon: Award,
    title: "Top Offers",
    description: "Exclusive access to premium, high-converting offers",
  },
  {
    icon: Zap,
    title: "Instant Approval",
    description: "Quick application process to start earning immediately",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Advanced security measures to protect your earnings",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Marketing resources and tools for scaling your business",
  },
  {
    icon: CheckCircle,
    title: "Reliable Tracking",
    description: "Advanced tracking system with 99.9% uptime guarantee",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Top Affiliates Choose ClixAgents
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the platform that empowers affiliates to achieve unprecedented success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 animate-fadeIn border border-gray-700/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};