"use client"

const desktopItems = ["Events", "Sponsors", "Developers", "Register"]

export const AppleLiquidGlassNav = () => {
  return (
    <>
      {/* ================= Desktop ================= */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[60%]">
        <div
          className="
            w-full flex items-center justify-between
            px-6 py-3.5 rounded-full
            apple-glass backdrop-blur-lg opacity-80
          "
        >
          <span className="text-[15px] font-semibold tracking-tight text-white/70">
            TECH SYMPOSIUM 2026
          </span>

          <div className="flex items-center gap-8">
            {desktopItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-[15px] font-semibold tracking-tight
                  text-white/40 hover:text-white/60
                  transition-all duration-500 ease hover:translate-y-[-0.5px]
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= Mobile Top Pill ================= */}
      <nav className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[85%]">
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
            Menu
          </span>
        </div>
      </nav>
    </>
  )
}
