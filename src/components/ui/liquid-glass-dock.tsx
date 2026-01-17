import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';
import { Home, Calendar, Users, Code } from 'lucide-react';

// --- Internal Types and Defaults ---

const defaultNavItems = [
  { id: 'home', icon: <Home />, label: 'Home' },
  { id: 'events', icon: <Calendar />, label: 'Events' },
  { id: 'sponsors', icon: <Users />, label: 'Sponsors' },
  { id: 'developers', icon: <Code />, label: 'Developers' },
];

export type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  onClick?: () => void;
};

type LiquidGlassDockProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * A thin mobile-only navigation dock with limelight effect
 */
export const LiquidGlassDock = ({
  items = defaultNavItems,
  defaultActiveIndex = 1, // Start on middle icon (Events)
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LiquidGlassDockProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav className={`md:hidden relative inline-flex items-center h-12 rounded-full liquid-glass-secondary px-3 ${className}`}>
      {items.map(({ id, icon, label, onClick }, index) => (
          <a
            key={id}
            ref={el => (navItemRefs.current[index] = el)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-3 ${iconContainerClassName}`}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
          >
            {cloneElement(icon, {
              className: `w-5 h-5 transition-opacity duration-100 ease-in-out ${
                activeIndex === index ? 'opacity-100 text-white' : 'opacity-70 text-white/80'
              } ${icon.props.className || ''} ${iconClassName || ''}`,
            })}
          </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute top-1 -translate-y-1/2 z-10 w-8 h-[3px] rounded-full bg-white shadow-[0_50px_15px_rgba(255,255,255,0.3)] ${
          isReady ? 'transition-[left] duration-400 ease-in-out' : ''
        } ${limelightClassName}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[3px] w-[160%] h-8 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};

// Example usage components
const customNavItems = [
  { id: 'home', icon: <Home />, label: 'Home', onClick: () => console.log('Home Clicked!') },
  { id: 'bookmark', icon: <Users />, label: 'Bookmarks', onClick: () => console.log('Bookmark Clicked!') },
  { id: 'add', icon: <Calendar />, label: 'Add New', onClick: () => console.log('Add Clicked!') },
  { id: 'profile', icon: <Code />, label: 'Profile', onClick: () => console.log('Profile Clicked!') },
];

export const CustomizedDock = () => {
  return <LiquidGlassDock className="liquid-glass-secondary rounded-xl" items={customNavItems} />;
};

export const DefaultDock = () => {
  return <LiquidGlassDock />;
};
