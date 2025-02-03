import { useState } from "react";
import { HandshakeIcon, Users, UserRound, Megaphone } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { RegistrationForm } from "./RegistrationForm";

export const Programmes = () => {
  const [showAffiliateForm, setShowAffiliateForm] = useState(false);
  const [showInfluencerForm, setShowInfluencerForm] = useState(false);

  return (
    <section id="programmes-section" className="py-24 bg-gradient-to-b from-black to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full mb-4">
            <span className="text-primary text-sm font-medium">Join Our Network</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're a seasoned marketer or a content creator, we have the perfect programme to help you maximize your earnings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Affiliate Programme Card */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/20">
                <HandshakeIcon className="w-8 h-8 text-primary" />
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Affiliate Programme</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Perfect for traffic owners, media buyers, and website owners. Access premium offers, real-time analytics, and industry-leading commissions.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                High-converting offers across multiple verticals
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Advanced tracking and optimization tools
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Weekly payments with low minimum threshold
              </li>
            </ul>
            <Button size="lg" className="w-full" onClick={() => setShowAffiliateForm(true)}>
              Become an Affiliate
            </Button>
          </div>

          {/* Influencer Programme Card */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/20">
                <UserRound className="w-8 h-8 text-primary" />
              </div>
              <Megaphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Influencer Programme</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Designed for content creators and social media influencers. Monetize your audience with authentic partnerships and exclusive deals.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Exclusive brand partnerships
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Custom promotional materials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Dedicated influencer support team
              </li>
            </ul>
            <Button size="lg" className="w-full" onClick={() => setShowInfluencerForm(true)}>
              Become an Influencer
            </Button>
          </div>
        </div>
      </div>

      {/* Affiliate Registration Dialog */}
      <Dialog open={showAffiliateForm} onOpenChange={setShowAffiliateForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Affiliate Registration</DialogTitle>
          </DialogHeader>
          <RegistrationForm type="affiliate" />
        </DialogContent>
      </Dialog>

      {/* Influencer Registration Dialog */}
      <Dialog open={showInfluencerForm} onOpenChange={setShowInfluencerForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Influencer Registration</DialogTitle>
          </DialogHeader>
          <RegistrationForm type="influencer" />
        </DialogContent>
      </Dialog>
    </section>
  );
};
