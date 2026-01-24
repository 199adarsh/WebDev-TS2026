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
import {
  Home as HomeIcon,
  User as UserIcon,
  Briefcase as BriefcaseIcon,
  FileText as FileTextIcon
} from "lucide-react"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon size={18} /> },
    { name: "Events", link: "/events", icon: <FileTextIcon size={18} /> },
    { name: "Partners", link: "/sponsors", icon: <BriefcaseIcon size={18} /> },
    { name: "Team", link: "/developers", icon: <UserIcon size={18} /> },
  ];

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
              <FloatingNav navItems={navItems} />
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
