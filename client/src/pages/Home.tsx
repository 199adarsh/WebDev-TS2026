import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { FeaturesSectionMinimal } from "@/components/BentoCard";
import FeatureSection from "@/components/FeatureSection";
import { ParallaxHero } from "@/components/ParallaxHero";
import ClubCard from "@/components/Club-card";
import { NavBarDemo } from "@/components/NavBarDemo";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const farLayerY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Pill Navigation */}
      <NavBarDemo />

      {/* Parallax Hero Section */}
      <ParallaxHero />

      {/* Highlights Bento Grid */}
      <section className="py-32">
     <FeaturesSectionMinimal />
      </section>

      {/* Clubs Section */}
      <section className="py-16">
        <ClubCard />
      </section>

      {/* Feature Section with Orbit Animation */}
      <FeatureSection />

      {/* CTA Section */}
      <section className="py-40 text-center px-4 relative">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display text-white mb-8">Ready to join the narrative?</h2>
          <Link href="/events">
             <button className="px-10 py-5 bg-white text-black rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Get Tickets Now
             </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
