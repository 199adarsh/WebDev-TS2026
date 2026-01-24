"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  User as UserIcon,
  Briefcase as BriefcaseIcon,
  FileText as FileTextIcon
} from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      // Always show nav at the top of the page
      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        // Only hide when scrolling down, and show when scrolling up
        if (direction < 0) {
          setVisible(true);
        } else if (direction > 0.02) { // Only hide if scrolling down significantly
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/10 rounded-full bg-black/40 backdrop-blur-lg shadow-lg z-[5000] px-4 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-white/80 hover:text-white transition-colors",
              location.pathname === navItem.link && "text-white bg-white/10 px-3 py-1 rounded-full"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
