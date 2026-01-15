import SyntheticHero from './components/SyntheticHero'
import { AppleLiquidGlassNav } from './components/AppleNav'
import { BlurFade } from "./components/ui/blur-fade"
import { ProgressiveBlur } from "./components/progressiveblur"
import { Skiper17 } from "./components/cardscroll"

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <AppleLiquidGlassNav />
      
      {/* Hero Section with top blur */}
      <div className="relative">
        <ProgressiveBlur position="top" backgroundColor="rgba(0,0,0,0.8)" height="100px" blurAmount="15px" className="z-30" />
        <BlurFade>    
          <SyntheticHero 
            title="WHERE TOP ENGINERS RISE"
            description="A national-level technical event by DKTE."
          />
        </BlurFade>
      </div>
      
      {/* Sticky Card Scroll Section with bottom blur */}
      <div className="relative h-screen bg-black">
        <Skiper17 />
        <ProgressiveBlur position="bottom" backgroundColor="rgba(0,0,0,0.8)" height="100px" blurAmount="15px" className="z-30" />
      </div>
      
      {/* Extra section to make bottom blur visible */}
      <div className="h-screen bg-black flex items-center justify-center">
        <p className="text-white/60 text-xl">More content coming soon...</p>
      </div>
    </div>
  )
}

export default App
