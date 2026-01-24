import { mockSponsors } from "@/data/mock-data";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { motion } from "framer-motion";
import { AnimatedBeamDemo } from "@/components/ui/sponsorhero";
import LightRays from "@/components/ui/sponsorhero";
import { useRef } from "react";

export default function Sponsors() {
  const sponsors = mockSponsors;
  const isLoading = false;

  // Refs for AnimatedBeam
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // Group sponsors by tier
  const tiers = ["Platinum", "Gold", "Silver"];
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    const tier = sponsor.tier;
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Plain Black Background */}
      <div className="relative h-screen overflow-hidden bg-black">
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              POWERED BY THOSE WHO BUILD THE FUTURE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-md md:text-lg text-white/80 mb-8"
            >
            Meet those who are powering the future!
            </motion.p>
          </div>
        </div>
      </div>

      {/* Animated Beam Section */}
      <div className="relative h-screen bg-black overflow-hidden">
        {/* Section Title */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black via-black/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Partners
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Industry leaders and innovators powering the next generation of technology. 
                Explore our premium partners who make Tech Symposium possible.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Animated Beam Demo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl h-96">
            <AnimatedBeamDemo />
          </div>
        </div>
      </div>

      {/* Sponsors Content */}
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

      {isLoading ? (
        <div className="space-y-12 animate-pulse">
          <div className="h-40 bg-card rounded-2xl w-full" />
          <div className="h-40 bg-card rounded-2xl w-full" />
        </div>
      ) : (
        <div className="space-y-24">
          {tiers.map((tier) => {
            const tierSponsors = groupedSponsors[tier];
            if (!tierSponsors?.length) return null;

            return (
              <div key={tier} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-display text-white uppercase tracking-widest">
                    {tier} Partners
                  </h3>
                  <div className="h-[1px] bg-white/10 flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierSponsors.map((sponsor, idx) => (
                    <EventCard 
                      key={sponsor.id} 
                      delay={idx * 0.1}
                      className="flex items-center justify-center p-12 bg-white/5 hover:bg-white/10 aspect-[3/2]"
                    >
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        src={sponsor.logoUrl} 
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      />
                    </EventCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {sponsors?.length === 0 && (
         <div className="text-center py-20 text-muted-foreground">
          <p>Partner list is currently empty.</p>
        </div>
      )}
      </div>
    </div>
  );
}
