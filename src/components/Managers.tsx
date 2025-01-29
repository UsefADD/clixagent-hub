import { MessageSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { BrandTelegram, BrandSkype } from "lucide-react";

export const Managers = () => {
  const managers = [
    {
      name: "John Smith",
      role: "Senior Campaign Manager",
      description: "Specializing in high-ROI campaigns with 5+ years experience",
      telegram: "@john_smith",
      skype: "john.smith.clix",
      photo: "/placeholder.svg", // Replace with actual photo path
    },
    {
      name: "Sarah Johnson",
      role: "Media Buying Expert",
      description: "Expert in scaling profitable campaigns across multiple verticals",
      telegram: "@sarah_j",
      skype: "sarah.johnson.clix",
      photo: "/placeholder.svg", // Replace with actual photo path
    },
    {
      name: "Mike Wilson",
      role: "Technical Support Lead",
      description: "24/7 technical assistance for seamless campaign optimization",
      telegram: "@mike_wilson",
      skype: "mike.wilson.clix",
      photo: "/placeholder.svg", // Replace with actual photo path
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
              <Avatar className="w-24 h-24 mx-auto mb-6">
                <AvatarImage src={manager.photo} alt={manager.name} />
                <AvatarFallback>{manager.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold mb-2">{manager.name}</h3>
              <p className="text-primary mb-3">{manager.role}</p>
              <p className="text-gray-400 mb-6">{manager.description}</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <BrandTelegram className="w-5 h-5" />
                  <span>{manager.telegram}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <BrandSkype className="w-5 h-5" />
                  <span>{manager.skype}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};