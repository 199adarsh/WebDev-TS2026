import { Hero } from './components/SyntheticHero'    
import { AppleLiquidGlassNav } from './components/AppleNav'
import { LiquidGlassDock } from './components/ui/liquid-glass-dock'
import { HoverPreview } from "./components/ui/hover-preview"
import { SmoothScroll } from "./components/ui/smooth-scroll"

function App() {

  return (
    <SmoothScroll>
      <div className="min-h-screen relative overflow-hidden">
        <AppleLiquidGlassNav />
        
        {/* New Liquid Glass Dock */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9998]">
          <LiquidGlassDock />
        </div>

       
      
        {/* Hero Section */}
        <Hero 
          title="WHERE TOP ENGINEERS RISE"
          subtitle="TECH SYMPOSIUM 2026"
          ctaLabel="Get Started"
          ctaHref="#"
          eyebrow="A National Level Event"
        />

      <HoverPreview />

      
    
    </div>
    </SmoothScroll>
  )
}


export default App
