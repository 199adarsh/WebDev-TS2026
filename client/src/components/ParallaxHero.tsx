"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Link } from 'wouter';
import './ParallaxHero.css';

export function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 1,  // Smooth scrubbing
          ease: "power1.inOut"  // Add easing for smoothness
        }
      });

      const layers = [
        { layer: "1", yPercent: -50 },  // Far background - slowest
        { layer: "2", yPercent: -30 },  // Mid glow layer - medium
        { layer: "3", yPercent: -10 }   // PNG characters - fastest
      ];

      layers.forEach((layerObj, idx) => {
        const layerElements = triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`) as NodeListOf<HTMLElement>;
        if (layerElements.length > 0) {
          tl.to(layerElements as any, {
            yPercent: layerObj.yPercent,
            ease: "none"
          }, idx === 0 ? undefined : "<");
        }
      });
    }

    const lenis = new Lenis({
      duration: 1.2,  // Slightly slower for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 5)),  // Custom easing
      smoothWheel: true
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        const layerElements = triggerElement.querySelectorAll('[data-parallax-layer]') as NodeListOf<HTMLElement>;
        gsap.killTweensOf(layerElements as any);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            {/* Far Background Layer - Slowest */}
            <div 
              data-parallax-layer="1" 
              className="parallax__layer-bg md:hidden"
              style={{
                backgroundImage: 'url(/TechSympoSium%20BackGround%20M.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Desktop Background Layer - Hidden on mobile */}
            <div 
              data-parallax-layer="1" 
              className="parallax__layer-bg hidden md:block"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(229,9,20,0.08), transparent 70%)'
              }}
            />
            
            {/* Mid Glow Layer - Medium */}
            <div 
              data-parallax-layer="2" 
              className="parallax__layer-glow hidden md:block"
              style={{
                background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(229,9,20,0.15), transparent 60%)'
              }}
            />
            
            {/* PNG Characters Layer - Fastest */}
            <div 
              data-parallax-layer="3" 
              className="parallax__layer-characters hidden md:block"
              style={{
                backgroundImage: `url("/TechSympoSium BackGround2.png")`,
                backgroundSize: '90% auto',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
          
          {/* Content Overlay */}
          <div className="parallax__content-overlay mt-8 md:mt-0">
            {/* <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs tracking-widest uppercase mb-4 bg-primary/5">
              DKTE'S National Level Event 
            </span> */}
            <div className="flex justify-center mb-2">
              <img 
                src="/TechSympoSium Logo.png" 
                alt="Tech Symposium Logo"
                className="max-w-full h-auto"
                style={{ maxHeight: '200px', width: 'auto' }}
              />
            </div>
          
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-4 font-body text-center px-4">
              Where innovation meets narrative
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/events" className="group relative glass-panel px-4 py-2 bg-card rounded-full border border-primary transition-transform hover:scale-105 active:scale-95 text-sm cursor-pointer">
                Explore Events
                <svg className="inline-block ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
