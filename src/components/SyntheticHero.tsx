"use client"

import { ChevronRight } from "lucide-react"
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

      {/* Eyebrow */}
      {eyebrow && (
        <a href="#" className="group relative z-20">
          <span
            className="text-[0.5rem] mt-[60px] mb-[-10px] md:text-[0.65rem] font-light text-white/80 font-geist mx-auto px-2 py-1 
            bg-gradient-to-r from-white/10 via-white/8 to-white/5  
            border border-white/20 hover:border-white/30
            rounded-full w-fit tracking-[0.15em] uppercase flex items-center justify-center
            transition-all duration-700 hover:bg-white/15 backdrop-blur-xl
            shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-white/10
            hover:scale-[1.02]"
          >
            {eyebrow}
            <ChevronRight className="inline w-2 h-2 md:w-3 md:h-3 ml-1 transition-all duration-700 group-hover:translate-x-1" />
          </span>
        </a>
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
            className="mt-[-20px] w-fit md:w-64 z-20 font-medium tracking-[0.05em] text-center text-base rounded-full px-2 py-1 
            backdrop-blur-3xl bg-white/5 border-white/10 hover:bg-white/8 
            shadow-2xl shadow-white/6 hover:shadow-2xl hover:shadow-white/12 
            transition-all duration-700 hover:scale-[1.02] hover:translate-y-[-1px]
            border-[1px] hover:border-white/15 backdrop-brightness-110"
          >
            <a href={ctaHref}>{ctaLabel}</a>
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
