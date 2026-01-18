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
          <span className="text-[15px] font-light tracking-tight text-white font-display">
            TECH SYMPOSIUM 2026
          </span>

          <div className="flex items-center gap-8">
            {desktopItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-[15px] font-medium tracking-tight
                  text-gray-400 hover:text-white
                  transition-all duration-500 ease hover:translate-y-[-0.5px]
                  font-sans
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
          <span className="text-[13px] font-light tracking-tight text-white font-display">
            TECH SYMPOSIUM 2026
          </span>
          <span className="text-[13px] font-medium tracking-tight text-gray-400 font-sans">
            Menu
          </span>
        </div>
      </nav>
    </>
  )
}
