import React, { useEffect, useRef, useState } from "react";
import { Aperture, BarChart3, LayoutGrid, Activity, Layers } from "lucide-react";

const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.getAttribute("data-theme") === "dark" || root.dataset?.theme === "dark") return "dark";
  if (root.classList.contains("light")) return "light";

  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
};

function FeaturesSectionMinimal() {
  const [theme, setTheme] = useState(() => getRootTheme());
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento2-animations";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento2-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6%); }
      }
      @keyframes bento2-pulse {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes bento2-tilt {
        0% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
        100% { transform: rotate(-2deg); }
      }
      @keyframes bento2-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(6%, -6%, 0); }
      }
      @keyframes bento2-glow {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 0 rgba(0,0,0,0.4)); }
        50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(0,0,0,0.2)); }
      }
      @keyframes bento2-intro {
        0% { opacity: 0; transform: translate3d(0, 28px, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      @keyframes bento2-card {
        0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });

    const handleStorage = (event) => {
      if (event.key === "bento-theme") syncTheme();
    };

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMediaChange = () => syncTheme();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    media?.addEventListener("change", handleMediaChange);

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
      media?.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const current = getRootTheme();
    const next = current === "dark" ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    root.setAttribute("data-theme", next);
    setTheme(next);
    try {
      window.localStorage?.setItem("bento-theme", next);
    } catch (_err) {
      /* ignore */
    }
  };

  const features = [
    {
      title: "System Patterns",
      blurb: "Foundational blocks arranged with deliberate rhythm and precise spacing across the viewport grid.",
      meta: "Layout",
      icon: Aperture,
      animation: "bento2-float 6s ease-in-out infinite",
    },
    {
      title: "Signal Balance",
      blurb: "Monochrome surfaces and tight contrast ratios keep focus on intent over ornamentation.",
      meta: "Tone",
      icon: BarChart3,
      animation: "bento2-pulse 4s ease-in-out infinite",
    },
    {
      title: "Structured Flow",
      blurb: "Information passes through aligned channels for clarity, speed, and effortless scanning.",
      meta: "Flow",
      icon: LayoutGrid,
      animation: "bento2-tilt 5.5s ease-in-out infinite",
    },
    {
      title: "Clean Signals",
      blurb: "Each icon is drawn once, animated gently, and rendered strictly in strokes for a disciplined feel.",
      meta: "Craft",
      icon: Activity,
      animation: "bento2-drift 8s ease-in-out infinite",
    },
    {
      title: "Quiet Energy",
      blurb: "Subtle motion hints at responsiveness without ever distracting from the message conveyed.",
      meta: "Pulse",
      icon: Layers,
      animation: "bento2-glow 7s ease-in-out infinite",
    },
  ];

  const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white transition-colors duration-500">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div
          className="absolute inset-0 [--aurora-base:#000000] [--aurora-accent:rgba(229,9,20,0.15)]"
          style={{
            background:
              "radial-gradient(ellipse 55% 100% at 12% 0%, var(--aurora-accent), transparent 65%), radial-gradient(ellipse 40% 80% at 88% 0%, rgba(229,9,20,0.1), transparent 70%), var(--aurora-base)",
          }}
        />
        <div
          className="absolute inset-0 [--grid-color:rgba(229,9,20,0.08)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage:
              "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            opacity: 0.9,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 [--edge-color:rgba(0,0,0,1)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 55%, var(--edge-color) 100%)",
            filter: "blur(40px)",
            opacity: 0.75,
          }}
        />
      </div>

      <section
        ref={sectionRef}
        className={`relative mx-auto max-w-6xl px-6 py-20 motion-safe:opacity-0 ${
          sectionVisible ? "motion-safe:animate-[bento2-intro_0.9s_ease-out_forwards]" : ""
        }`}
      >
        <header className="mb-10 flex flex-col gap-6 border-b border-netflix-red/20 pb-6 transition-colors duration-500 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-netflix-red transition-colors duration-500 font-display">
              Grid Studies
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white transition-colors duration-500 md:text-5xl font-display">
              Netflix Bento
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-sm text-sm text-white/60 transition-colors duration-500 md:text-base font-body">
              A stark layout built on modular spans, animated outlines, and purposeful whitespace.
            </p>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-netflix-red/30 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.35em] text-netflix-red transition-colors duration-500 hover:bg-netflix-red hover:text-white font-body"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3 md:auto-rows-[minmax(120px,auto)] md:grid-cols-6">
          {features.map((feature, index) => (
            <BentoItem
              key={feature.title}
              span={spans[index]}
              feature={feature}
              theme={theme}
              index={index}
              isVisible={sectionVisible}
            />
          ))}
        </div>

        <footer className="mt-16 border-t border-netflix-red/20 pt-6 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors duration-500 font-body">
          Streaming precision for entertainment systems.
        </footer>
      </section>
    </div>
  );
}

function BentoItem({ feature, span = "", theme = "dark", index = 0, isVisible = false }) {
  const { icon: Icon, animation, title, blurb, meta } = feature;
  const gradientFill = "radial-gradient(ellipse 60% 120% at 12% 0%, rgba(229,9,20,0.24), transparent 72%)";
  const animationDelay = `${Math.max(index * 0.12, 0)}s`;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-netflix-red/20 bg-black/40 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:-translate-y-1 motion-safe:opacity-0 ${
        isVisible ? "motion-safe:animate-[bento2-card_0.8s_ease-out_forwards]" : ""
      } ${span}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-black/60 transition-colors duration-500" />
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-500"
          style={{ background: gradientFill }}
        />
      </div>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-netflix-red/30 bg-netflix-red/10 transition-colors duration-500">
          <Icon
            className="h-7 w-7 text-netflix-red transition-colors duration-500"
            strokeWidth={1.5}
            style={{ animation }}
          />
        </div>
        <div className="flex-1">
          <header className="flex items-start gap-3">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white transition-colors duration-500 font-display hover:text-netflix-red">
              {title}
            </h3>
            {meta && (
              <span className="ml-auto rounded-full border border-netflix-red/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-netflix-red transition-colors duration-500">
                {meta}
              </span>
            )}
          </header>
          <p className="mt-2 text-sm leading-relaxed text-white/60 transition-colors duration-500 font-body">
            {blurb}
          </p>
        </div>
      </div>
    </article>
  );
}

export default FeaturesSectionMinimal;
export { FeaturesSectionMinimal };

