import { mockDevelopers } from "@/data/mock-data";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Developers() {
  const developers = mockDevelopers;
  const isLoading = false;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        title="The Minds Behind" 
        subtitle="Meet the architects, designers, and dreamers who built this platform."
      />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-card rounded-3xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {developers?.map((dev, index) => (
            <EventCard key={dev.id} delay={index * 0.1} className="p-0 overflow-hidden group">
              <div className="relative aspect-square">
                <img 
                  src={dev.photoUrl} 
                  alt={dev.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl text-white mb-1">{dev.name}</h3>
                  <p className="text-sm text-primary tracking-wide uppercase mb-4">{dev.role}</p>
                  
                  {dev.socialUrl && (
                    <a 
                      href={dev.socialUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Profile</span>
                    </a>
                  )}
                </div>
              </div>
            </EventCard>
          ))}
        </div>
      )}

      {developers?.length === 0 && (
         <div className="text-center py-20 text-muted-foreground">
          <p>Team members to be announced.</p>
        </div>
      )}
    </div>
  );
}
