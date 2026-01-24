import { mockSponsors } from "@/data/mock-data";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { motion } from "framer-motion";
import { AnimatedBeamDemo } from "@/components/ui/sponsorhero";
import LightRays from "@/components/ui/sponsorhero";
import { useRef } from "react";
import SponsorCard from "@/components/Sponsor-card";

export default function Sponsors() {
  const sponsors = mockSponsors;
  const isLoading = false;

  // Refs for AnimatedBeam
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // Group sponsors by tier
  const tiers = ["Bronze", "Gold", "Silver"];
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

     

      {/* SponsorCard Section */}
      <SponsorCard />

      {/* Sponsors Content */}
      
    </div>
  );
}
