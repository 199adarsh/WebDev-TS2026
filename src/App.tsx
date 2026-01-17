import { Hero } from './components/SyntheticHero'    
import { AppleLiquidGlassNav } from './components/AppleNav'
import { LiquidGlassDock } from './components/ui/liquid-glass-dock'
import { HoverPreview } from "./components/ui/hover-preview"
import { SmoothScroll } from "./components/ui/smooth-scroll"
import { FeatureSteps } from "./components/ui/feature-section"
import ClubCardsDemo from "./components/ui/card-1";


//YOUR JOURNEY STARTS HERE
const features = [
  { 
    step: 'Step 1', 
    title: 'Discover Your Strengths',
    content: 'Explore both technical and creative challenges that match your skills.', 
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Compete & Collaborate',
    content: 'Test your limits in high-impact tech and non-tech competitions.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Rise & Create Impact',
    content: 'Elevate your career with real-world experience, confidence, and recognition.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
]


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


      <FeatureSteps 
        features={features}
        autoPlayInterval={4000}
      />

      
      <HoverPreview />
      
      <div className="bg-black mt-20">
       
        <ClubCardsDemo />
        
      </div>
      
      
    
    </div>
    </SmoothScroll>
  )
}


export default App
