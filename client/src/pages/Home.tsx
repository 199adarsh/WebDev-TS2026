import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, Star, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { BentoCard } from "@/components/BentoCard";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          {/* Abstract geometric background */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs tracking-widest uppercase mb-6 bg-primary/5">
              Annual Conference 2025
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter mb-8 leading-[0.9]">
              TECH<br/>SYMPOSIUM
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Where innovation meets narrative. A cinematic journey through the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/events" className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold transition-transform hover:scale-105 active:scale-95">
                Explore Events
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/sponsors" className="px-8 py-4 text-white hover:text-white/80 transition-colors">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section - Editorial Style */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="The Vision" 
              subtitle="We believe technology is not just code and silicon—it's the story of human progress." 
            />
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p className="mb-6">
                Tech Symposium isn't just a conference. It's a gathering of minds dedicated to shaping the narrative of tomorrow. We bring together visionaries, builders, and dreamers.
              </p>
              <p>
                From AI ethics to quantum leaps, every session is designed to challenge your perspective and ignite your imagination.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted/20">
            {/* Using a subtle gradient/abstract shape instead of stock photo for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 h-2/3 border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bento Grid */}
      <section className="py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Highlights" 
            subtitle="Curated experiences designed to inspire."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {/* Large Card */}
            <BentoCard className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-card/50">
              <div className="h-full flex flex-col justify-end">
                <div className="p-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">Keynote</span>
                  <h3 className="text-4xl font-display font-bold text-white mb-2">The Future of AI</h3>
                  <p className="text-muted-foreground">Join industry leaders as they discuss the ethical boundaries and limitless potential of artificial intelligence.</p>
                </div>
              </div>
            </BentoCard>

            {/* Small Card 1 */}
            <BentoCard delay={0.1}>
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">3 Days</h3>
              <p className="text-muted-foreground text-sm">Of immersive content, workshops, and networking.</p>
            </BentoCard>

            {/* Small Card 2 */}
            <BentoCard delay={0.2}>
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">50+ Speakers</h3>
              <p className="text-muted-foreground text-sm">Thought leaders from across the globe.</p>
            </BentoCard>
            
            {/* Wide Card */}
            <BentoCard className="md:col-span-2 md:col-start-2" delay={0.3}>
              <div className="flex items-center gap-6 h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Exclusive Workshops</h3>
                  <p className="text-muted-foreground">Hands-on sessions with cutting-edge technology stacks.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 text-center px-4 relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform -translate-y-1/2 scale-y-50 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">Ready to join the narrative?</h2>
          <Link href="/events">
             <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Get Tickets Now
             </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
