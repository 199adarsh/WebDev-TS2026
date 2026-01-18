import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ShinyButton } from "./shiny-button";

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
      className="w-full rounded-3xl border border-white/20 bg-white/5 p-6 text-white shadow-sm backdrop-blur-xl liquid-glass-secondary flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-light font-display">{title}</h2>
        <ShinyButton onClick={() => console.log("View all")}>
          <ArrowUpRight className="h-4 w-4" />
        </ShinyButton>
      </div>

      {/* Pills */}
      <ul className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="flex items-center gap-2 rounded-full w-full h-[52px] border border-white/10 bg-black/50 px-3 transition-all hover:bg-black/70 hover:border-red-500/30 group"
            >
              {/* Smaller, round icon */}
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 -ml-1">
                {item.icon}
              </span>

              {/* Text */}
              <div className="flex flex-col justify-center leading-tight overflow-hidden">
                <span className="text-sm font-medium leading-snug break-words font-sans text-white hover:text-red-400 transition-colors" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  {item.name}
                </span>
                <span className="text-xs text-gray-500 font-sans" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  {item.type}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

// -------------------- Data --------------------

const clubs = [
  {
    title: "Partners",
    items: [
      { name: "Code..", type: "Tech" as const, icon: "💻", href: "#" },
      { name: "Debug..", type: "Tech" as const, icon: "🔧", href: "#" },
    ],
  },
  {
    title: "Sponsors",
    items: [
      { name: "MLMas..", type: "Tech" as const, icon: "🤖", href: "#" },
      { name: "DataDuel", type: "Tech" as const, icon: "📊", href: "#" },
    ],
  },
  {
    title: "Collaborators",
    items: [
      { name: "AI Arena", type: "Tech" as const, icon: "🧠", href: "#" },
      { name: "InsightX", type: "Tech" as const, icon: "📈", href: "#" },
    ],
  },
  {
    title: "Partners",
    items: [
      { name: "Mechat..", type: "Tech" as const, icon: "⚙️", href: "#" },
      { name: "GearUp", type: "Tech" as const, icon: "🔧", href: "#" },
    ],
  },
  {
    title: "Sponsors",
    items: [
      { name: "Circuit..", type: "Tech" as const, icon: "⚡", href: "#" },
      { name: "Worksh..", type: "Tech" as const, icon: "🔌", href: "#" },
    ],
  },
  {
    title: "Partners",
    items: [
      { name: "RoboRa..", type: "Tech" as const, icon: "🤖", href: "#" },
      { name: "TechTak", type: "Tech" as const, icon: "⚡", href: "#" },
    ],
  },
  {
    title: "Collaborators",
    items: [
      { name: "Structura", type: "Tech" as const, icon: "🏗️", href: "#" },
      { name: "EcoBuild", type: "Tech" as const, icon: "🌱", href: "#" },
    ],
  },
];

// -------------------- Page --------------------

const ClubCardsDemo = () => {
  return (
    <div className="bg-black px-4 sm:px-6 md:px-8 lg:px-10 py-12 min-h-screen overflow-y-auto">
      {/* Main Title */}
      <h1 className="text-2xl pl-[5vw] sm:text-3xl md:text-4xl font-light text-red-500 mb-8 sm:mb-12 text-center sm:text-left font-display" style={{ letterSpacing: '0.02em' }}>
        Discover The Events !
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
