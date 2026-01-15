import SyntheticHero from './components/SyntheticHero'
import { AppleLiquidGlassNav } from './components/AppleNav'
import { BlurFade } from "./components/ui/blur-fade"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <BlurFade>
        <AppleLiquidGlassNav />
  
        <SyntheticHero 
          title="WHERE TOP ENGINERS RISE"
          description="A national-level technical event by DKTE."
        />
      </BlurFade>
    </div>
  )
}

export default App
