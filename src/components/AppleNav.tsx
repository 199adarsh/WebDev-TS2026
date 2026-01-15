"use client"

import { useState } from "react"
import { Home, Calendar, Users, Code } from "lucide-react"

const desktopItems = ["Events", "Sponsors", "Developers", "Register"]

const mobileItems = [
  { label: "Home", icon: Home },
  { label: "Events", icon: Calendar },
  { label: "Sponsors", icon: Users },
  { label: "Devs", icon: Code },
]

export function AppleLiquidGlassNav() {
  const [activeMobile, setActiveMobile] = useState(1)

  return (
    <>
      {/* ================= Desktop ================= */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[60%]">
        <div
          className="
            w-full flex items-center justify-between
            px-6 py-3.5 rounded-full
            apple-glass
          "
        >
          <span className="text-[15px] font-semibold tracking-tight text-white/95">
            TECH SYMPOSIUM 2026
          </span>

          <div className="flex items-center gap-8">
            {desktopItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-[15px] font-semibold tracking-tight
                  text-white/60 hover:text-white/90
                  transition-all duration-350 ease hover:translate-y-[-0.5px]
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= Mobile Top Pill ================= */}
      <nav className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[9999] w-[85%]">
        <div
          className="
            w-full flex items-center justify-between
            px-6 py-3 rounded-full
            apple-glass
          "
        >
          <span className="text-[13px] font-semibold tracking-tight text-white/85">
            TECH SYMPOSIUM 2026
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-white/50">
            {mobileItems[activeMobile].label}
          </span>
        </div>
      </nav>

      {/* ================= Mobile Bottom Dock ================= */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[50%] max-w-xs">
        <div
          className="
            w-full flex items-center justify-around
            px-2 py-1 rounded-full
            apple-glass
          "
        >
          {mobileItems.map((item, index) => {
            const Icon = item.icon
            const isActive = index === activeMobile

            return (
              <button
                key={item.label}
                onClick={() => setActiveMobile(index)}
                className="
                  relative p-3 rounded-full
                  text-white/50 hover:text-white/80
                  transition-all duration-350 ease active:scale-95
                "
              >
                <Icon size={18} />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-1.5 bg-white/50 rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
