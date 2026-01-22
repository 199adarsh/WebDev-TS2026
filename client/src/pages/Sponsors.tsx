import { mockSponsors } from "@/data/mock-data";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { motion } from "framer-motion";

export default function Sponsors() {
  const sponsors = mockSponsors;
  const isLoading = false;

  // Group sponsors by tier
  const tiers = ["Platinum", "Gold", "Silver"];
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    const tier = sponsor.tier;
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <SectionHeader 
          title="Our Partners" 
          subtitle="Collaboration is the heartbeat of innovation. Meet the organizations powering the future."
          centered
        />
      </div>

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
  );
}
