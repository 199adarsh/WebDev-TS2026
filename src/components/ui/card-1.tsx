import * as React from "react";

// -------------------- Types --------------------

interface ClubItem {
  name: string;
  type: "Tech" | "Non-Tech";
  icon: React.ReactNode;
  href: string;
}

interface ClubCardProps {
  items: ClubItem[];
}

// -------------------- Card --------------------

const ClubCard = ({ items }: ClubCardProps) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {items.map((item) => (
        <li key={item.name}>
          <div className="flex items-center gap-4 rounded-full w-full h-[64px] border border-white/20 bg-white/5 backdrop-blur-md px-6 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/30">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              {item.icon}
            </span>

            <div className="flex flex-col justify-center leading-tight overflow-hidden">
              <span className="text-sm font-medium leading-snug break-words font-sans text-white/90">
                {item.name}
              </span>
              <span className="text-xs text-gray-500 font-sans">
                {item.type}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

// -------------------- Data --------------------

const clubs = [
  {
    title: "Clubs",
    items: [
      { name: "CodeX", type: "Tech" as const, icon: "💻", href: "#" },
      { name: "Debug", type: "Tech" as const, icon: "🛠️", href: "#" },
      { name: "Infer", type: "Tech" as const, icon: "🤖", href: "#" },
      { name: "Predict", type: "Tech" as const, icon: "📊", href: "#" },
      { name: "Neura", type: "Tech" as const, icon: "🧠", href: "#" },
      { name: "Vision", type: "Tech" as const, icon: "📈", href: "#" },
      { name: "Forge", type: "Tech" as const, icon: "⚙️", href: "#" },
      { name: "Torque", type: "Tech" as const, icon: "🔩", href: "#" },
      { name: "Pulse", type: "Tech" as const, icon: "⚡", href: "#" },
      { name: "Signal", type: "Tech" as const, icon: "📡", href: "#" },
      { name: "Robo", type: "Tech" as const, icon: "🤖", href: "#" },
      { name: "Vector", type: "Tech" as const, icon: "⚔️", href: "#" },
      { name: "Struct", type: "Tech" as const, icon: "🏗️", href: "#" },
      { name: "Terra", type: "Tech" as const, icon: "🌱", href: "#" },
    ],
  },
];

// -------------------- Page --------------------

const ClubCardsDemo = () => {
  return (
    <div className="bg-black min-h-screen px-6 py-20 stranger-things-atmosphere">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-light text-white mb-14 text-center font-display">
        Discover The <span className="text-red-500">Events</span>
      </h1>

      {/* Centered Hero Card */}
      <div className="flex justify-center items-center">
        {clubs.map((club) => (
          <ClubCard
            key={club.title}
            items={club.items}
          />
        ))}
      </div>
    </div>
  );
};

export default ClubCardsDemo;
