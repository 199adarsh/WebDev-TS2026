import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// -------------------- Types --------------------

interface ClubItem {
  name: string;
  type: "Tech" | "Non-Tech";
  icon: React.ReactNode;
  href: string;
}

interface ClubCardProps {
  title: string;
  items: ClubItem[];
}

// -------------------- Card --------------------

const ClubCard = ({ title, items }: ClubCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full rounded-2xl border border-red-500/20 bg-black/60 p-6 text-white shadow-2xl backdrop-blur-xl liquid-glass-secondary flex flex-col gap-4 netflix-ease"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-light font-display text-white/90">{title}</h2>
        <a 
          href="#"
          className="flex items-center justify-center w-8 h-8 rounded-full 
          border border-red-500/30 bg-black/60 
          hover:border-red-500/50 hover:bg-red-500/10
          transition-all duration-700 netflix-ease"
        >
          <ArrowUpRight className="h-4 w-4 text-white/70 hover:text-red-400 transition-colors" />
        </a>
      </div>

      {/* Pills */}
      <ul className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-center gap-2 rounded-full w-full h-[52px] border border-red-500/15 bg-black/80 px-3">
              {/* Smaller, round icon */}
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10 -ml-1">
                {item.icon}
              </span>

              {/* Text */}
              <div className="flex flex-col justify-center leading-tight overflow-hidden">
                <span className="text-sm font-medium leading-snug break-words font-sans text-white/90" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  {item.name}
                </span>
                <span className="text-xs text-gray-600 font-sans" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  {item.type}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

// -------------------- Data --------------------

const clubs = [
  {
    title: "CS Club",
    items: [
      { name: "CodeX", type: "Tech" as const, icon: "💻", href: "#" },
      { name: "Debug", type: "Tech" as const, icon: "🛠️", href: "#" },
    ],
  },
  {
    title: "ML Club",
    items: [
      { name: "Infer", type: "Tech" as const, icon: "🤖", href: "#" },
      { name: "Predict", type: "Tech" as const, icon: "📊", href: "#" },
    ],
  },
  {
    title: "AIDS Club",
    items: [
      { name: "Neura", type: "Tech" as const, icon: "🧠", href: "#" },
      { name: "Vision", type: "Tech" as const, icon: "📈", href: "#" },
    ],
  },
  {
    title: "MECH Club",
    items: [
      { name: "Forge", type: "Tech" as const, icon: "⚙️", href: "#" },
      { name: "Torque", type: "Tech" as const, icon: "🔩", href: "#" },
    ],
  },
  {
    title: "ETC Club",
    items: [
      { name: "Pulse", type: "Tech" as const, icon: "⚡", href: "#" },
      { name: "Signal", type: "Tech" as const, icon: "📡", href: "#" },
    ],
  },
  {
    title: "ENTC Club",
    items: [
      { name: "Robo", type: "Tech" as const, icon: "🤖", href: "#" },
      { name: "Vector", type: "Tech" as const, icon: "⚔️", href: "#" },
    ],
  },
  {
    title: "CIVIL Club",
    items: [
      { name: "Struct", type: "Tech" as const, icon: "🏗️", href: "#" },
      { name: "Terra", type: "Tech" as const, icon: "🌱", href: "#" },
    ],
  },
];


// -------------------- Page --------------------

const ClubCardsDemo = () => {
  return (
    <div className="bg-black px-4 sm:px-6 md:px-8 lg:px-10 py-12 min-h-screen overflow-y-auto stranger-things-atmosphere">
      {/* Main Title */}
      <h1 className="text-2xl pl-[5vw] sm:text-3xl md:text-4xl font-light text-white mb-8 sm:mb-12 text-center sm:text-left font-display" style={{ letterSpacing: '0.02em' }}>
        Discover The <span className="text-red-500">Events</span>!
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start max-w-7xl mx-auto">
        {clubs.map((club) => (
          <ClubCard
            key={club.title}
            title={club.title}
            items={club.items}
          />
        ))}
      </div>
    </div>
  );
};

export default ClubCardsDemo;
