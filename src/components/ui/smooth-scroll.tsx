"use client"

import { useEffect } from 'react'

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Enable native smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return <>{children}</>
}
