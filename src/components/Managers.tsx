import { Users, Award, TrendingUp } from "lucide-react";

export const Managers = () => {
  const managers = [
    {
      name: "Elite Performance",
      description: "Top-tier campaign managers dedicated to maximizing your ROI",
      icon: Award,
      stats: "95% Success Rate",
    },
    {
      name: "Expert Support",
      description: "24/7 dedicated team to optimize your campaigns",
      icon: Users,
      stats: "< 2hr Response Time",
    },
    {
      name: "Growth Focus",
      description: "Strategic scaling with proven methodologies",
      icon: TrendingUp,
      stats: "3x Average Growth",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Expert Campaign Management</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Elite Managers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Work with industry veterans who understand what it takes to scale campaigns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managers.map((manager, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 animate-fadeIn border border-gray-800 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <manager.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{manager.name}</h3>
              <p className="text-gray-400 mb-6">{manager.description}</p>
              <div className="text-primary font-bold text-xl">{manager.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};