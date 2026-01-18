import React, { useState } from 'react';

interface FeatureItem {
  id: number;
  text: string;
  isActive: boolean;
}

interface EventCard {
  id: number;
  clubName: string;
  eventName: string;
  tags: string[];
  isHovered: boolean;
}

export default function NetflixHero() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: FeatureItem[] = [
    { id: 0, text: "Innovative Engineering competitions", isActive: false },
    { id: 1, text: "Next-generation learning platforms", isActive: false },
    { id: 2, text: "Elite networking opportunities", isActive: false },
    { id: 3, text: "Career-defining challenges", isActive: false }
  ];

  const events: EventCard[] = [
    {
      id: 1,
      clubName: "Engineering Club",
      eventName: "RoboWars Championship",
      tags: ["Tech", "Competition"],
      isHovered: false
    },
    {
      id: 2,
      clubName: "Innovation Hub",
      eventName: "HackFest 2026",
      tags: ["Tech", "Coding"],
      isHovered: false
    },
    {
      id: 3,
      clubName: "Design Society",
      eventName: "Creative Showcase",
      tags: ["Non-tech", "Design"],
      isHovered: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">TECH SYMPOSIUM</div>
          <div className="hidden md:flex items-center space-x-8">
            {['Events', 'Schedule', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
            <button className="liquid-glass-secondary px-6 py-2 text-sm font-medium hover:border-red-500/30 transition-all duration-300">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase text-gray-500 border border-gray-800 rounded-full">
              A National Level Event
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-gray-200">WHERE GREAT MINDS</span>
            <span className="block text-white">COMPETE FOR THE CROWN</span>
          </h1>

          {/* Subline */}
          <p className="mb-12 text-lg md:text-xl text-gray-600 font-light tracking-wide">
            TECH SYMPOSIUM 2026
          </p>

          {/* CTA Button */}
          <button className="liquid-glass-secondary px-8 py-4 text-lg font-medium hover:border-red-500/40 hover:shadow-red-500/10 transition-all duration-300">
            Register Now
          </button>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            WHY PARTICIPATE IN TECH SYMPOSIUM
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center space-x-4 cursor-pointer group"
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {/* Bullet Point */}
                  <div className="relative">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFeature === feature.id
                          ? 'bg-red-500 shadow-red-500/50 shadow-lg'
                          : 'bg-gray-600'
                      }`}
                    />
                    {activeFeature === feature.id && (
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    )}
                  </div>

                  {/* Feature Text */}
                  <span
                    className={`text-sm transition-all duration-300 ${
                      activeFeature === feature.id
                        ? 'text-white'
                        : 'text-gray-500 group-hover:text-gray-400'
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Paragraph */}
            <div className="space-y-6">
              <div>
                <p className="text-lg leading-relaxed">
                  <span className="text-gray-500">Explore innovative </span>
                  <span className="text-white font-medium">Engineering</span>
                  <span className="text-gray-600"> competitions</span>
                </p>
                <p className="text-gray-700 mt-2">Built for next-generation engineers</p>
              </div>

              <div>
                <p className="text-lg leading-relaxed">
                  <span className="text-gray-500">Experience a stage for </span>
                  <span className="text-white font-medium">Innovation</span>
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="text-gray-600">Where elite minds rise to shape the </span>
                  <span className="text-white font-medium">Future</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover The Events Section */}
      <section className="py-24 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Discover The Events 
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="liquid-glass-secondary p-6 rounded-xl cursor-pointer group transition-all duration-300 hover:border-red-500/30"
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Red Accent Dot */}
                <div
                  className={`w-1 h-1 bg-red-500 rounded-full mb-4 transition-all duration-300 ${
                    hoveredCard === event.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Club Name */}
                <h3
                  className={`text-lg font-bold mb-2 transition-all duration-300 ${
                    hoveredCard === event.id ? 'text-white' : 'text-white/90'
                  }`}
                >
                  {event.clubName}
                </h3>

                {/* Event Name */}
                <p
                  className={`text-sm mb-4 transition-all duration-300 ${
                    hoveredCard === event.id ? 'text-gray-300' : 'text-gray-400'
                  }`}
                >
                  {event.eventName}
                </p>

                {/* Tags */}
                <div className="flex gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 px-2 py-1 border border-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Red Accent Line */}
                <div
                  className={`h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-4 transition-all duration-300 ${
                    hoveredCard === event.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
