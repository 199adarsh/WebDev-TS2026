"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"

const previewData = {

engineering: {
  image: "https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg",
  title: "Engineering",
  subtitle: "Hands shaping ideas into reality",
},

ambition: {
  image: "https://images.pexels.com/photos/6250946/pexels-photo-6250946.jpeg",
  title: "Ambition",
  subtitle: "Beyond every boundary",
},

limits: {
  image: "https://images.pexels.com/photos/29022334/pexels-photo-29022334.jpeg",
  title: "Vision",
  subtitle: "Looking ahead into the vast unknown",
},

innovation: {
  image: "https://images.pexels.com/photos/8294591/pexels-photo-8294591.jpeg",
  title: "Innovation",
  subtitle: "Where intelligence meets possibility",
},

future: {
  image: "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=1260&h=620&auto=compress&cs=tinysrgb&fit=cover",
  title: "Future",
  subtitle: "Where intelligence meets possibility",
},




}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Canela:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

  .hover-preview-container {
    min-height: 50vh;
    background: #000000ff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    position: relative;
  }

  @media (min-width: 768px) {
    .hover-preview-container {
      padding-left: 4rem;
      padding-right: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .hover-preview-container {
      padding-left: 120px;
      padding-right: 2rem;
    }
  }

  .hover-preview-container::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 9999;
  }

  .content-container {
    max-width: 900px;
    width: 100%;
  }

  .text-block {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    line-height: 1.6;
    color: #6b7280;
    font-weight: 400;
    letter-spacing: -0.02em;
    text-align: justify;
  }

  .text-block p {
    margin-bottom: 1.5em;
    opacity: 1;
  }

  .text-gray-500 {
    color: #6b7280;
  }

  .text-gray-600 {
    color: #4f5358;
  }

  .text-gray-700 {
    color: #3f454a;
  }

  .hover-link {
    color: #e50914;
    font-weight: 300;
    font-family: 'Canela', serif;
    cursor: pointer;
    position: relative;
    display: inline-block;
    transition: color 0.3s ease;
    letter-spacing: 0.02em;
  }

  .hover-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #e50914;
    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .hover-link:hover::after {
    width: 100%;
  }

  .preview-card {
    position: fixed;
    pointer-events: none;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .preview-card.visible {
    opacity: 1;
  }

  .preview-card-inner {
    background: #1a1a1a;
    border-radius: 16px;
    padding: 8px;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.8),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 0 60px rgba(229, 9, 20, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .preview-card img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    display: block;
  }

  @media (max-width: 480px) {
    .preview-card img {
      width: 160px;
    }
  }

  .preview-card-title {
    padding: 8px 6px 4px;
    font-size: 0.85rem;
    color: #fff;
    font-weight: 600;
    font-family: 'Syne', sans-serif;
  }

  .preview-card-subtitle {
    padding: 0 6px 6px;
    font-size: 0.75rem;
    color: #9ca3af;
  }
`

const HoverLink = ({
  previewKey,
  children,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: {
  previewKey: string
  children: React.ReactNode
  onHoverStart: (key: string, e: React.MouseEvent | React.TouchEvent) => void
  onHoverMove: (e: React.MouseEvent | React.TouchEvent) => void
  onHoverEnd: () => void
}) => {
  return (
    <span
      className="hover-link"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
      onTouchStart={(e) => onHoverStart(previewKey, e)}
      onTouchMove={onHoverMove}
      onTouchEnd={onHoverEnd}
      style={{ touchAction: 'none' }}
    >
      {children}
    </span>
  )
}

const PreviewCard = ({
  data,
  position,
  isVisible,
  cardRef,
}: {
  data: (typeof previewData)[keyof typeof previewData] | null
  position: { x: number; y: number }
  isVisible: boolean
  cardRef: React.RefObject<HTMLDivElement | null>
}) => {
  if (!data) return null

  return (
    <div
      ref={cardRef as React.Ref<HTMLDivElement>}
      className={`preview-card ${isVisible ? "visible" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="preview-card-inner">
        <img
          src={data.image || "/placeholder.svg"}
          alt={data.title || ""}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <div className="preview-card-title">{data.title}</div>
        <div className="preview-card-subtitle">{data.subtitle}</div>
      </div>
    </div>
  )
}

export function HoverPreview() {
  const [activePreview, setActivePreview] = useState<(typeof previewData)[keyof typeof previewData] | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Preload all images on mount
  useEffect(() => {
    Object.entries(previewData).forEach(([, data]) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = data.image
    })
  }, [])

  const updatePosition = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    const cardWidth = 300
    const cardHeight = 250 // Approximate card height
    const offsetY = 20 // Gap between cursor and card bottom

    // Get coordinates from both mouse and touch events
    let clientX, clientY
    if ('touches' in e) {
      clientX = e.touches[0]?.clientX || 0
      clientY = e.touches[0]?.clientY || 0
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    // Position card so its bottom-left is above cursor
    let x = clientX - cardWidth / 2 // Center horizontally on cursor
    let y = clientY - cardHeight - offsetY // Position above cursor

    // Boundary checks - keep card on screen
    if (x + cardWidth > window.innerWidth - 20) {
      x = window.innerWidth - cardWidth - 20
    }
    if (x < 20) {
      x = 20
    }

    // If card would go above viewport, position below cursor instead
    if (y < 20) {
      y = clientY + offsetY
    }

    setPosition({ x, y })
  }, [])

  const handleHoverStart = useCallback(
    (key: string, e: React.MouseEvent | React.TouchEvent) => {
      setActivePreview(previewData[key as keyof typeof previewData])
      setIsVisible(true)
      updatePosition(e)
    },
    [updatePosition],
  )

  const handleHoverMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (isVisible) {
        updatePosition(e)
      }
    },
    [isVisible, updatePosition],
  )

  const handleHoverEnd = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <>
      <style>{styles}</style>
      <div className="hover-preview-container">
        <div className="content-container">
          <div className="text-block">

            <p>
              <span className="text-gray-500">Explore innovative</span>{" "}
              <HoverLink
                previewKey="engineering"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
              Engineering
              </HoverLink>{" "}
              <span className="text-gray-600">competitions</span>
              <br />
              <span className="text-gray-700">
                crafted for the next generation of creators.
              </span>
            </p>

            <p>
              <span className="text-gray-500">Built for</span>{" "}
              <span className="text-gray-600">those who think <HoverLink
                previewKey="limits"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                Beyond Limits,
              </HoverLink>{" "} </span>
              <br />
              <span className="text-gray-700">
                where <HoverLink
                previewKey="ambition"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                Ambition
              </HoverLink>{" "} meets execution.
              </span>
            </p>

            <p>
              <span className="text-gray-500">Step into a stage where</span>{" "}
              <HoverLink
                previewKey="innovation"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                Innovation
              </HoverLink>{" "}
              <span className="text-gray-600">comes alive,</span>
              <br />
              <span className="text-gray-600">and elite minds rise to shape the</span>{" "}
              <HoverLink
                previewKey="future"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                Future
              </HoverLink>
              .
            </p>

          </div>
        </div>




        <PreviewCard data={activePreview} position={position} isVisible={isVisible} cardRef={cardRef} />
      </div>
    </>
  )
}