import SyntheticHero from './components/SyntheticHero'
import { AppleLiquidGlassNav } from './components/AppleNav'
import { BlurFade } from "./components/ui/blur-fade"
import { Skiper17 } from "./components/cardscroll"

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AppleLiquidGlassNav />
      
      {/* Hero Section */}
      <div className="relative">
        <BlurFade>    
          <SyntheticHero 
            title="WHERE TOP ENGINERS RISE"
            description="A national-level technical event by DKTE."
          />
        </BlurFade>
      </div>
      
      {/* Sticky Card Scroll Section - Increased height for scrolling */}
      <div className="relative mt-96 py-20">
        <Skiper17/>
      </div>
    </div>
  )
}

export default App
