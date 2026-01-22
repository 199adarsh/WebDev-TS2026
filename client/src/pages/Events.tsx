import { mockEvents } from "@/data/mock-data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { Calendar, MapPin, Tag } from "lucide-react";
import { format } from "date-fns";

export default function Events() {
  const events = mockEvents;
  const isLoading = false;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        title="Event Schedule" 
        subtitle="Explore the sessions that will define the conversation."
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-3xl bg-card border border-white/5" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event, index) => (
            <EventCard key={event.id} delay={index * 0.1} className="h-full min-h-[320px] flex flex-col">
              {/* Image Area */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden bg-secondary">
                {/* 
                  Using Unsplash image with descriptive alt text. 
                  In a real app, this would use event.imageUrl
                */}
                <img 
                  src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-display text-white mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                  {event.description}
                </p>

                <div className="flex items-center justify-between text-xs text-white/60 border-t border-white/5 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(event.date), "MMM d, h:mm a")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </EventCard>
          ))}
        </div>
      )}

      {events?.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p>No events scheduled yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
