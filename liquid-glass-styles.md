/* ===== Apple Liquid Glass Button Styles ===== */

/* Primary Liquid Glass Button */
.liquid-glass-primary {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.20),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(32px) saturate(140%);
  -webkit-backdrop-filter: blur(32px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.30);
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.25),
    0 8px 30px rgba(0, 0, 0, 0.25),
    inset 0 0 20px rgba(255, 255, 255, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-glass-primary:hover {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.30),
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.10)
  );
  border-color: rgba(255, 255, 255, 0.40);
  transform: translateY(-2px);
  filter: brightness(1.1);
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.35),
    0 12px 40px rgba(0, 0, 0, 0.30),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
}

/* Secondary Liquid Glass Button */
.liquid-glass-secondary {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  backdrop-filter: blur(24px) saturate(140%);
  -webkit-backdrop-filter: blur(24px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.20);
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-glass-secondary:hover {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.20),
    rgba(255, 255, 255, 0.10),
    rgba(255, 255, 255, 0.05)
  );
  border-color: rgba(255, 255, 255, 0.30);
  transform: translateY(-2px);
  filter: brightness(1.1);
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.25),
    0 10px 30px rgba(0, 0, 0, 0.20),
    inset 0 0 20px rgba(255, 255, 255, 0.03);
}

/* ===== React Component Example ===== */

import React from 'react'

export function LiquidGlassButton({ 
  children, 
  primary = false,
  className = '',
  ...props 
}) {
  const baseClasses = "px-6 py-3 rounded-full font-medium text-[15px] tracking-tight transition-all duration-300"
  const variantClasses = primary 
    ? "text-white liquid-glass-primary"
    : "text-sky-100 liquid-glass-secondary hover:text-white"
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

/* ===== Usage Examples ===== */

/* Primary Button */
<LiquidGlassButton primary>
  Learn More
</LiquidGlassButton>

/* Secondary Button */
<LiquidGlassButton>
  Get Started
</LiquidGlassButton>

/* ===== Tailwind Version ===== */

/* If you prefer Tailwind classes instead of custom CSS: */
<button className="
  backdrop-blur-3xl 
  bg-gradient-to-b 
  from-white/20 
  via-white/10 
  to-white/5 
  border 
  border-white/30 
  px-6 
  py-3 
  rounded-full 
  text-[15px] 
  font-medium 
  text-white 
  hover:from-white/30 
  hover:via-white/15 
  hover:to-white/10 
  transition-all 
  duration-300 
  hover:translate-y-[-2px] 
  hover:brightness-110 
  shadow-lg 
  hover:shadow-xl 
  hover:border-white/40
">
  Learn More
</button>
