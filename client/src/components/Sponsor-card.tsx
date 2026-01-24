import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils"; // Your utility for merging Tailwind classes

// Define the type for a single sponsor
export interface Sponsor {
  name: string;
  tier: string;
  logo: React.ReactNode;
  href: string;
}

// Define the props for the main component
export interface SponsorCardProps {
  title: string;
  sponsors: Sponsor[];
  viewAllHref?: string;
  className?: string;
}

export const SponsorCardComponent = ({
  title,
  sponsors,
  viewAllHref = "#",
  className,
}: SponsorCardProps) => {
  // Animation variants for the container to orchestrate children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each sponsor item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "w-full max-w-[90vw] rounded-2xl border border-netflix-red/20 bg-black/40 p-6 text-white shadow-sm",
        className
      )}
    >
      {/* Card Header */}
      <div className="mb-6 flex items-center justify-between">
        
      </div>

      {/* Sponsors Grid */}
      <motion.ul
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sponsors.map((sponsor, index) => (
          <motion.li key={index} variants={itemVariants}>
            <a
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 md:gap-3 rounded-full border border-netflix-red/30 bg-[#141414]/20 p-1.5 md:p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#2a2a2a] hover:shadow-md hover:border-netflix-red/50"
            >
              {/* Sponsor Logo */}
              <div className="flex h-6 w-6 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#141414]/50">
                {sponsor.logo}
              </div>
              {/* Sponsor Info */}
              <div>
                <p className="text-[10px] md:font-medium md:text-base text-white">{sponsor.name}</p>
                <div className={`text-[8px] md:text-sm px-2 py-0.5 rounded-full inline-block ${
                  sponsor.tier === 'Bronze' ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
                  sponsor.tier === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30' :
                  'bg-gray-500/40 text-gray-400 border border-gray-500/60'
                }`}>
                  {sponsor.tier}
                </div>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};


// --- Initial Components for each sponsor ---
const getInitials = (name: string) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
};

const SponsorInitial = ({ name, tier }: { name: string; tier: string }) => {
  const initials = getInitials(name);
  const bgColor = 
    tier === 'Bronze' ? 'bg-brown-500/20 text-brown-300 border border-brown-500/30' :
    tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
    'bg-gray-500/20 text-gray-300 border border-gray-500/30';
  
  return (
    <div className={`h-6 w-6 md:h-10 md:w-10 flex items-center justify-center rounded-full text-xs md:text-sm font-bold ${bgColor}`}>
      {initials}
    </div>
  );
};


// --- Demo Component ---
const SponsorCard = () => {
  const sponsorsData: Sponsor[] = [
    {
      name: "NVIDIA",
      tier: "Bronze",
      logo: <SponsorInitial name="NVIDIA" tier="Bronze" />,
      href: "#",
    },
    {
      name: "OpenAI",
      tier: "Bronze",
      logo: <SponsorInitial name="OpenAI" tier="Bronze" />,
      href: "#",
    },
    {
      name: "Supabase",
      tier: "Bronze",
      logo: <SponsorInitial name="Supabase" tier="Bronze" />,
      href: "#",
    },
    {
      name: "GitHub",
      tier: "Gold",
      logo: <SponsorInitial name="GitHub" tier="Gold" />,
      href: "#",
    },
    {
      name: "Claude AI",
      tier: "Gold",
      logo: <SponsorInitial name="Claude AI" tier="Gold" />,
      href: "#",
    },
    {
      name: "Turso",
      tier: "Silver",
      logo: <SponsorInitial name="Turso" tier="Silver" />,
      href: "#",
    },
    {
      name: "Clerk",
      tier: "Silver",
      logo: <SponsorInitial name="Clerk" tier="Silver" />,
      href: "#",
    },
    {
      name: "Vercel",
      tier: "Silver",
      logo: <SponsorInitial name="Vercel" tier="Silver" />,
      href: "#",
    },
  ];

  // Sort sponsors by tier: Bronze first, then Gold, then Silver
  const tierOrder = { 'Bronze': 0, 'Gold': 1, 'Silver': 2 };
  const sortedSponsors = [...sponsorsData].sort((a, b) => 
    (tierOrder[a.tier as keyof typeof tierOrder] || 999) - (tierOrder[b.tier as keyof typeof tierOrder] || 999)
  );

  return (
    <div className="relative w-full bg-black text-white transition-colors duration-500">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div
          className="absolute inset-0 [--aurora-base:#000000] [--aurora-accent:rgba(229,9,20,0.15)]"
          style={{
            background:
              "radial-gradient(ellipse 55% 100% at 12% 0%, rgba(229,9,20,0.15), transparent 65%), radial-gradient(ellipse 40% 80% at 88% 0%, rgba(229,9,20,0.1), transparent 70%), #000000",
          }}
        />
        <div
          className="absolute inset-0 [--grid-color:rgba(229,9,20,0.08)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage:
              "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            opacity: 0.9,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 [--edge-color:rgba(0,0,0,1)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 55%, var(--edge-color) 100%)",
            filter: "blur(40px)",
            opacity: 0.75,
          }}
        />
      </div>

      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <header className="mb-10 flex flex-col gap-6 border-b border-netflix-red/20 pb-6 transition-colors duration-500 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-netflix-red/60">
              Our Valued Partners
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white transition-colors duration-500 md:text-5xl">
              SPONSORS
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-sm text-sm text-white/60">
              Industry leaders and innovators powering the next generation of technology. Join us in shaping the future of innovation.
            </p>
            <button
              type="button"
              className="rounded-full border border-netflix-red/30 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition-colors duration-500 hover:bg-netflix-red/10 hover:text-white"
            >
              Become a Sponsor
            </button>
          </div>
        </header>

        <SponsorCardComponent 
          title="Featured Sponsors" 
          sponsors={sortedSponsors} 
          className="bg-black/40 border-netflix-red/20"
        />
      </section>
    </div>
  );
};

export default SponsorCard;
