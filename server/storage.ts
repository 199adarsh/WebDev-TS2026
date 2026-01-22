import { db } from "./db";
import { events, sponsors, developers, type Event, type Sponsor, type Developer } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  getSponsors(): Promise<Sponsor[]>;
  getDevelopers(): Promise<Developer[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async getSponsors(): Promise<Sponsor[]> {
    return await db.select().from(sponsors);
  }

  async getDevelopers(): Promise<Developer[]> {
    return await db.select().from(developers);
  }

  async seedData(): Promise<void> {
    // Check if data exists
    const existingEvents = await this.getEvents();
    if (existingEvents.length === 0) {
      await db.insert(events).values([
        {
          title: "The Future of AI",
          description: "An immersive deep dive into generative models and the ethical landscape of artificial intelligence.",
          date: new Date("2024-10-15T10:00:00"),
          location: "Main Auditorium",
          category: "Keynote",
          imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Quantum Leaps",
          description: "Exploring the next frontier of computing power and its implications for cryptography.",
          date: new Date("2024-10-15T14:00:00"),
          location: "Hall B",
          category: "Panel",
          imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop"
        },
        {
          title: "Sustainable Tech",
          description: "How green technologies are reshaping the infrastructure of tomorrow.",
          date: new Date("2024-10-16T11:00:00"),
          location: "Green Room",
          category: "Workshop",
          imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop"
        }
      ]);

      await db.insert(sponsors).values([
        { name: "Nebula Corp", tier: "Platinum", logoUrl: "https://placehold.co/200x100/1a1a1a/FFF?text=Nebula" },
        { name: "Apex Systems", tier: "Gold", logoUrl: "https://placehold.co/200x100/1a1a1a/FFF?text=Apex" },
        { name: "Horizon Labs", tier: "Gold", logoUrl: "https://placehold.co/200x100/1a1a1a/FFF?text=Horizon" },
        { name: "Quantum Ventures", tier: "Silver", logoUrl: "https://placehold.co/200x100/1a1a1a/FFF?text=Quantum" },
        { name: "Echo Media", tier: "Silver", logoUrl: "https://placehold.co/200x100/1a1a1a/FFF?text=Echo" }
      ]);

      await db.insert(developers).values([
        { name: "Alex Chen", role: "Lead Architect", photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", socialUrl: "#" },
        { name: "Sarah Jones", role: "UX Director", photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", socialUrl: "#" },
        { name: "Marcus Johnson", role: "Frontend Engineer", photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", socialUrl: "#" }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
