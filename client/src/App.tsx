import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Sponsors from "@/pages/Sponsors";
import Developers from "@/pages/Developers";
import NotFound from "@/pages/not-found";
import { Navigation } from "@/components/Navigation";

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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <Navigation />
            <Router />
            <Toaster />
          </div>
        </TooltipProvider>
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
