import { Rocket, Settings, Users } from "lucide-react";

export const InfoSections = () => {
  const sections = [
    {
      id: "what-we-do",
      title: "What We Do",
      description: "We connect advertisers with top-performing affiliates, providing exclusive offers and industry-leading payouts. Our platform ensures maximum ROI through advanced tracking and optimization tools.",
      icon: Rocket,
      bgColor: "bg-gray-900",
    },
    {
      id: "how-we-work",
      title: "How We Work",
      description: "Our process is simple: we provide you with high-converting offers, dedicated support, and real-time analytics. We work closely with you to optimize campaigns and scale profitable results.",
      icon: Settings,
      bgColor: "bg-black",
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      description: "We're a team of affiliate marketing veterans who understand what it takes to succeed. Our experience and dedication help partners achieve and exceed their revenue goals.",
      icon: Users,
      bgColor: "bg-gray-900",
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <section key={section.id} className={`py-24 ${section.bgColor}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fadeIn">
              <div className="mb-6">
                <section.icon className="w-16 h-16 text-primary mx-auto" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {section.title}
              </h2>
              <p className="text-xl text-gray-400">
                {section.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};