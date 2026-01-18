"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-screen h-screen pt-48 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-black
      rounded-b-xl stranger-things-atmosphere"
    >
      {/* Background with directional light */}
      <div className="absolute inset-0 z-0">
        {/* Base background */}
        <img 
          src="/assets/BG03.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        
        {/* Directional light overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40" />
        
        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60" 
             style={{
               background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)'
             }} />
      </div>

      {/* Eyebrow - Now just a badge */}
      {eyebrow && (
        <div className="flex justify-center relative z-20">
          <span
            className="text-white text-[10px] md:text-xs font-medium mt-14 mb-[-10px]
            bg-black/40 backdrop-blur-xl
            rounded-full w-fit tracking-[0.15em] uppercase
            flex items-center justify-center px-3 py-1
            border-[1.5px] border-red-500
            font-sans liquid-glass-primary"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255, 0, 0, 0.35), 0 0 14px rgba(255, 0, 0, 0.25), inset 0 0 8px rgba(255, 0, 0, 0.15)",
            }}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {/* Title - Stacked for cinematic feel */}
      <h1
        className="max-w-4xl mx-auto text-balance relative z-20
        text-white
        py-8 text-4xl md:text-4xl lg:text-4xl xl:text-5xl 
        font-light leading-[1] tracking-[-0.01em] 
		mb-[-24px]
        font-display"
        style={{
          fontVariationSettings: '"wght" 300',
          fontWeight: 300,
          letterSpacing: '0.02em',
        }}
      >
        <span className="block text-white">WHERE GREAT MINDS</span>
        <span className="block text-red-500">COMPETE</span>
        <span className="block text-white">FOR THE CROWN</span>
      </h1>

      {/* Subtitle */}
		<p
			className="mx-auto max-w-2xl text-center text-balance relative z-20
			mb-8
			text-[0.8rem] md:text-[1.125rem] lg:text-[1.25rem]
			leading-[1.7]
			font-medium
			tracking-[0.025em]
			text-gray-500 font-sans"
			style={{
				fontVariationSettings: '"wght" 500',
			}}
		>
			{subtitle}
		</p>

      {/* CTA */}
      {ctaLabel && (
        <div className="flex justify-center relative z-20">
          <Button
            asChild
            variant="liquidGlass"
            className="mt-[-20px] w-fit md:w-56 z-20 font-semibold tracking-[0.08em] text-center text-base rounded-full px-6 py-3 
            backdrop-blur-3xl bg-gradient-to-r from-white/5 via-white/3 to-white/5 border-[2px] border-white/20 hover:border-white/30 hover:border-red-500/30
            shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(229,9,20,0.3)]
            transition-all duration-700 hover:scale-[1.03] hover:translate-y-[-2px]
            border-[1.5px] backdrop-brightness-125
            relative overflow-hidden group
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
            before:translate-x-[-100%] before:transition-transform before:duration-700
            hover:before:translate-x-[100%] font-sans"
          >
            <a href={ctaHref} className="relative z-10 flex items-center gap-3">
              <span>{ctaLabel}</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </a>
          </Button>
        </div>
      )}

      {/* Bottom Fade - More atmospheric */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] 
        bg-gradient-to-t from-black via-black/50 to-transparent 
        opacity-10"
      />
      
      {/* Enhanced grain overlay with Stranger Things texture */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: `
            url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4zIi8+PC9zdmc+'),
            url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJiIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjgiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2IpIiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg==')
          `,
          backgroundBlendMode: 'overlay, multiply'
        }}
      />
      
      {/* Subtle chromatic aberration effect */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(229,9,20,0.1) 0%, transparent 50%, rgba(59,130,246,0.1) 100%)',
          mixBlendMode: 'screen'
        }}
      />
    </section>
  )
}
