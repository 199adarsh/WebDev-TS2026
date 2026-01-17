"use client"

import { Button } from "@/components/ui/button"
import { ShaderBackground } from "@/components/ui/shader-background"

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
      rounded-b-xl"
    >
      {/* Three.js Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderBackground className="w-full h-full" />
      </div>

      {/* Eyebrow - Now just a badge */}
      {eyebrow && (
        <div className="flex justify-center relative z-20">
          <span className="text-white/60 text-xs md:text-xs font-medium mt-14 mb-[-10px]
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-full w-fit tracking-[0.15em] uppercase flex items-center justify-center px-2 py-1
            border-[2px]">
            {eyebrow}
          </span>
        </div>
      )}

      {/* Title - Stacked for cinematic feel */}
      <h1
        className="max-w-4xl mx-auto text-balance relative z-20
        bg-gradient-to-br from-white via-white to-gray-200 
        bg-clip-text py-8 text-4xl md:text-4xl lg:text-4xl xl:text-5xl 
        font-light leading-[1] tracking-[-0.01em] 
		mb-[-24px]
        text-transparent"
        style={{
          fontVariationSettings: '"wght" 800',
          fontWeight: 800,
        }}
      >
        <span className="block">WHERE GREAT MINDS COMPETE</span>
        <span className="block">FOR THE CROWN</span>
      </h1>

      {/* Subtitle */}
		<p
			className="mx-auto max-w-2xl text-center text-balance relative z-20
			mb-8
			text-[0.8rem] md:text-[1.125rem] lg:text-[1.25rem]
			leading-[1.7]
			font-light
			tracking-[0.025em]
			text-white/60"
			style={{
				fontVariationSettings: '"wght" 300',
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
            className="mt-[-20px] w-fit md:w-56 z-20 font-medium tracking-[0.08em] text-center text-base rounded-full px-6 py-3 
            backdrop-blur-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-[2px] border-white/40 hover:border-white/30
            shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
            transition-all duration-700 hover:scale-[1.03] hover:translate-y-[-2px]
            border-[1.5px] backdrop-brightness-125
            relative overflow-hidden group
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
            before:translate-x-[-100%] before:transition-transform before:duration-700
            hover:before:translate-x-[100%]"
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
      
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.2] 
        bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4zIi8+PC9zdmc+')] 
        pointer-events-none"
      />
    </section>
  )
}
