import { Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Sponsors from "@/pages/Sponsors";
import Developers from "@/pages/Developers";
import NotFound from "@/pages/not-found";
import { FloatingNav } from "@/components/PillNav";
import { MinimalFooter } from "@/components/footer";
import {
  Home as HomeIcon,
  Calendar as CalendarIcon,
  Crown as CrownIcon,
  Code as CodeIcon
} from "lucide-react"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon size={20} /> },
    { name: "Events", link: "/events", icon: <CalendarIcon size={20} /> },
    { name: "Sponsors", link: "/sponsors", icon: <CrownIcon size={20} /> },
  ];

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white flex flex-col">
              <FloatingNav navItems={navItems} />
              <main className="flex-1">
                <Router />
              </main>
              <MinimalFooter />
              <Toaster />
            </div>
          </TooltipProvider>
        </ReactLenis>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
