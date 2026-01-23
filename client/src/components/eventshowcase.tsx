"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

// =========================================
// 1. CONFIGURATION & DATA TYPES
// =========================================

export type ProductId = 'aids' | 'aiml' | 'civil' | 'cse' | 'entc' | 'etc' | 'mech';

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  type: 'tech' | 'non-tech';
}

export interface ClubData {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
  };
  stats: {
    memberCount: number;
    eventsCount: number;
  };
  events: EventData[];
}

// Club Data with Tech/Non-Tech Events
const PRODUCT_DATA: Record<ProductId, ClubData> = {
  aids: {
    id: 'aids',
    label: 'AIDS',
    title: 'AIDS Club',
    description: 'The AIDS club focuses on awareness, prevention, and support for HIV/AIDS initiatives.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/aids-club.png',
    colors: {
      gradient: 'from-red-600 to-pink-900',
      glow: 'bg-red-500',
      ring: 'border-red-500/50',
    },
    stats: { memberCount: 45, eventsCount: 2 },
    events: [
      {
        id: 'aids-awareness',
        title: 'AIDS Awareness Campaign',
        description: 'Annual awareness campaign with educational workshops and guest speakers.',
        date: '2024-03-15',
        location: 'Main Auditorium',
        image: 'https://images.unsplash.com/photo-1584467722066-f40628b5a9be?w=800&q=80',
        type: 'non-tech'
      },
      {
        id: 'aids-fundraiser',
        title: 'Charity Fundraiser',
        description: 'Fundraising event for AIDS research and support programs.',
        date: '2024-04-20',
        location: 'Community Hall',
        image: 'https://images.unsplash.com/photo-1541348263660-e30a4d490b1f?w=800&q=80',
        type: 'non-tech'
      }
    ]
  },
  aiml: {
    id: 'aiml',
    label: 'AIML',
    title: 'AI & Machine Learning Club',
    description: 'Exploring the frontiers of artificial intelligence and machine learning technologies.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/aiml-club.png',
    colors: {
      gradient: 'from-purple-600 to-indigo-900',
      glow: 'bg-purple-500',
      ring: 'border-purple-500/50',
    },
    stats: { memberCount: 120, eventsCount: 2 },
    events: [
      {
        id: 'aiml-hackathon',
        title: 'AI Hackathon 2024',
        description: '24-hour hackathon focused on developing AI solutions for real-world problems.',
        date: '2024-03-10',
        location: 'Tech Lab',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        type: 'tech'
      },
      {
        id: 'aiml-workshop',
        title: 'ML Workshop Series',
        description: 'Hands-on workshop covering machine learning fundamentals and applications.',
        date: '2024-04-05',
        location: 'Computer Lab',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
        type: 'tech'
      }
    ]
  },
  civil: {
    id: 'civil',
    label: 'CIVIL',
    title: 'Civil Engineering Club',
    description: 'Building the future through innovative civil engineering solutions and sustainable design.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/civil-club.png',
    colors: {
      gradient: 'from-orange-600 to-amber-900',
      glow: 'bg-orange-500',
      ring: 'border-orange-500/50',
    },
    stats: { memberCount: 85, eventsCount: 2 },
    events: [
      {
        id: 'civil-bridge',
        title: 'Bridge Design Competition',
        description: 'Annual competition to design and model innovative bridge structures.',
        date: '2024-03-20',
        location: 'Engineering Workshop',
        image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80',
        type: 'tech'
      },
      {
        id: 'civil-green',
        title: 'Green Building Summit',
        description: 'Summit on sustainable construction and green building practices.',
        date: '2024-04-15',
        location: 'Conference Hall',
        image: 'https://images.unsplash.com/photo-1541976590-71394168d59a?w=800&q=80',
        type: 'non-tech'
      }
    ]
  },
  cse: {
    id: 'cse',
    label: 'CSE',
    title: 'Computer Science Club',
    description: 'Advancing computer science education and innovation through coding competitions and workshops.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/cse-club.png',
    colors: {
      gradient: 'from-blue-600 to-cyan-900',
      glow: 'bg-blue-500',
      ring: 'border-blue-500/50',
    },
    stats: { memberCount: 150, eventsCount: 2 },
    events: [
      {
        id: 'cse-codefest',
        title: 'CodeFest 2024',
        description: 'Annual coding competition with prizes and recognition for top performers.',
        date: '2024-03-08',
        location: 'Computer Center',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
        type: 'tech'
      },
      {
        id: 'cse-algo',
        title: 'Algorithm Masterclass',
        description: 'Advanced algorithms and data structures workshop with industry experts.',
        date: '2024-04-12',
        location: 'Tech Auditorium',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
        type: 'tech'
      }
    ]
  },
  entc: {
    id: 'entc',
    label: 'ENTC',
    title: 'Electronics & Telecommunication Club',
    description: 'Exploring electronics, communication systems, and emerging technologies.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/entc-club.png',
    colors: {
      gradient: 'from-green-600 to-teal-900',
      glow: 'bg-green-500',
      ring: 'border-green-500/50',
    },
    stats: { memberCount: 95, eventsCount: 2 },
    events: [
      {
        id: 'entc-robotics',
        title: 'Robotics Competition',
        description: 'Build and program robots to compete in various challenges and tasks.',
        date: '2024-03-18',
        location: 'Robotics Lab',
        image: 'https://images.unsplash.com/photo-1561557944-6f78295b58d2?w=800&q=80',
        type: 'tech'
      },
      {
        id: 'entc-iot',
        title: 'IoT Symposium',
        description: 'Symposium on Internet of Things applications and future trends.',
        date: '2024-04-10',
        location: 'Electronics Lab',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        type: 'tech'
      }
    ]
  },
  etc: {
    id: 'etc',
    label: 'ETC',
    title: 'Electrical & Electronics Club',
    description: 'Powering innovation through electrical engineering and electronics projects.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/etc-club.png',
    colors: {
      gradient: 'from-yellow-600 to-orange-900',
      glow: 'bg-yellow-500',
      ring: 'border-yellow-500/50',
    },
    stats: { memberCount: 75, eventsCount: 2 },
    events: [
      {
        id: 'etc-power',
        title: 'Power Systems Workshop',
        description: 'Hands-on workshop on modern power systems and renewable energy.',
        date: '2024-03-22',
        location: 'Electrical Lab',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        type: 'tech'
      },
      {
        id: 'etc-circuit',
        title: 'Circuit Design Challenge',
        description: 'Competition to design innovative electronic circuits and systems.',
        date: '2024-04-18',
        location: 'Design Studio',
        image: 'https://images.unsplash.com/photo-1598425085408-753d6c1fb8b5?w=800&q=80',
        type: 'tech'
      }
    ]
  },
  mech: {
    id: 'mech',
    label: 'MECH',
    title: 'Mechanical Engineering Club',
    description: 'Designing and building the future through mechanical engineering innovation.',
    image: 'https://ik.imagekit.io/kqmrslzuq/SOUND/mech-club.png',
    colors: {
      gradient: 'from-gray-600 to-slate-900',
      glow: 'bg-gray-500',
      ring: 'border-gray-500/50',
    },
    stats: { memberCount: 110, eventsCount: 2 },
    events: [
      {
        id: 'mech-cad',
        title: 'CAD Design Competition',
        description: 'Competition showcasing advanced CAD design and modeling skills.',
        date: '2024-03-25',
        location: 'Design Lab',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        type: 'tech'
      },
      {
        id: 'mech-engine',
        title: 'Engine Assembly Workshop',
        description: 'Workshop on engine design, assembly, and performance optimization.',
        date: '2024-04-22',
        location: 'Mechanical Workshop',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
        type: 'tech'
      }
    ]
  }
};

// =========================================
// 2. MAIN SHOWCASE COMPONENT
// =========================================

export default function ClubEventShowcase() {
  // Separate events by type
  const techEvents: { event: EventData; club: ClubData }[] = [];
  const nonTechEvents: { event: EventData; club: ClubData }[] = [];

  Object.values(PRODUCT_DATA).forEach(club => {
    club.events.forEach(event => {
      if (event.type === 'tech') {
        techEvents.push({ event, club });
      } else {
        nonTechEvents.push({ event, club });
      }
    });
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Club Events
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
          Engineering club events categorized by type
        </p>
      </div>

      {/* Tech Events Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Tech Events</h2>
            <div className="h-0.5 w-16 bg-white rounded-full opacity-60"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {techEvents.map(({ event, club }) => (
              <ExpandableCard
                key={event.id}
                title={event.title}
                src={event.image}
                description={`${club.label} • ${event.location}`}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Event Details</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4 border-2 border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-white">{club.title}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {club.stats.memberCount} members • {club.stats.eventsCount} events
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {event.date} • {event.location}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 text-xs font-medium bg-white text-black hover:bg-gray-100 transition-colors rounded-lg">
                      Join
                    </button>
                    <button className="flex-1 h-9 text-xs font-medium border border-gray-600 text-white hover:bg-gray-800 transition-colors rounded-lg">
                      Register
                    </button>
                  </div>
                </div>
              </ExpandableCard>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Tech Events Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Non-Tech Events</h2>
            <div className="h-0.5 w-16 bg-white rounded-full opacity-60"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {nonTechEvents.map(({ event, club }) => (
              <ExpandableCard
                key={event.id}
                title={event.title}
                src={event.image}
                description={`${club.label} • ${event.location}`}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Event Details</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4 border-2 border-gray-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-white">{club.title}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {club.stats.memberCount} members • {club.stats.eventsCount} events
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {event.date} • {event.location}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 text-xs font-medium bg-white text-black hover:bg-gray-100 transition-colors rounded-lg">
                      Join
                    </button>
                    <button className="flex-1 h-9 text-xs font-medium border border-gray-600 text-white hover:bg-gray-800 transition-colors rounded-lg">
                      Register
                    </button>
                  </div>
                </div>
              </ExpandableCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Stats */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">
                {techEvents.length}
              </div>
              <div className="text-gray-400">Tech Events</div>
            </div>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">
                {nonTechEvents.length}
              </div>
              <div className="text-gray-400">Non-Tech Events</div>
            </div>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">
                {Object.keys(PRODUCT_DATA).length}
              </div>
              <div className="text-gray-400">Engineering Clubs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    // Disable body scrolling when modal is open
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            className={cn(
              "fixed inset-0 grid place-items-center z-[100] sm:mt-16 before:pointer-events-none",
            )}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-[850px] max-h-[90vh] flex flex-col sm:rounded-2xl backdrop-blur-xl relative border border-white/20",
                classNameExpanded,
              )}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                backgroundImage: 'linear-gradient(135deg, transparent 50%, rgba(229, 39, 39, 0.15) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.18)'
              }}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`} className="flex-shrink-0">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-40 object-cover object-center sm:rounded-t-2xl"
                />
              </motion.div>
              
              <div className="flex justify-between items-start p-6 sm:p-8 flex-shrink-0">
                <div className="flex-1">
                  <motion.p
                    layoutId={`description-${description}-${id}`}
                    className="text-white/80 text-lg"
                  >
                    {description}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="font-semibold text-white text-3xl sm:text-4xl mt-0.5"
                  >
                    {title}
                  </motion.h3>
                </div>
                <motion.button
                  aria-label="Close card"
                  layoutId={`button-${title}-${id}`}
                  className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-red-600/20 hover:bg-red-600/30 text-white/70 hover:text-white border border-red-600/30 hover:border-red-600/50 transition-colors duration-300 focus:outline-none pointer-events-auto relative z-[9999]"
                  style={{
                    backgroundColor: 'rgba(229, 39, 39, 0.2)',
                    borderColor: 'rgba(229, 39, 39, 0.4)'
                  }}
                  onClick={() => setActive(false)}
                >
                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 pb-6">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/80 text-base flex flex-col items-start gap-4"
                >
                  {children}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        className={cn(
          "p-4 flex flex-col justify-between items-start bg-gray-500/20  rounded-2xl transition-all duration-300 border border-gray-700 cursor-pointer",
          className,
        )}
      >
        <div className="flex gap-4 flex-col">
          <motion.div 
            layoutId={`image-${title}-${id}`}
            onClick={() => setActive(true)}
            className="cursor-pointer"
          >
            <img
              src={src}
              alt={title}
              className="w-64 h-56 rounded-lg object-cover object-center"
            />
          </motion.div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-white/80 md:text-left text-sm font-medium"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="text-white md:text-left font-semibold"
              >
                {title}
              </motion.h3>
            </div>
            <div className="relative z-[50] pointer-events-auto">
              <motion.button
                aria-label="Open card"
                layoutId={`button-${title}-${id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(true);
                }}
                className={cn(
                  "h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-red-600/20 hover:bg-red-600/30 text-white/70 hover:text-white border border-red-600/30 hover:border-red-600/50 transition-colors duration-300 focus:outline-none",
                  className,
                )}
                style={{
                  backgroundColor: 'rgba(229, 39, 39, 0.2)',
                  borderColor: 'rgba(229, 39, 39, 0.4)'
                }}
              >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
