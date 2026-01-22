import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLocation } from "wouter";
import { BrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Sponsors from "@/pages/Sponsors";
import Developers from "@/pages/Developers";
import NotFound from "@/pages/not-found";
import PillNav from "@/components/PillNav";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/sponsors" component={Sponsors} />
      <Route path="/developers" component={Developers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  
  const navItems = [
    { href: "/", label: "Vision" },
    { href: "/events", label: "Events" },
    { href: "/sponsors", label: "Partners" },
    { href: "/developers", label: "Team" },
  ];

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
              <PillNav 
                logo="/logo.png"
                logoAlt="App Logo"
                items={navItems}
                activeHref={location}
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#ffffff"
                pillColor="#060010"
                hoveredPillTextColor="#ff0000"
                pillTextColor="#ff0000"
                initialLoadAnimation={false}
              />
              <Router />
              <Toaster />
            </div>
          </TooltipProvider>
        </ReactLenis>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
