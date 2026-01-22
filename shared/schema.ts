import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === Events ===
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  category: text("category").notNull(), // e.g., "Keynote", "Workshop", "Panel"
  imageUrl: text("image_url").notNull(),
});

// === Sponsors ===
export const sponsors = pgTable("sponsors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tier: text("tier").notNull(), // "Platinum", "Gold", "Silver"
  logoUrl: text("logo_url").notNull(),
});

// === Developers / Team ===
export const developers = pgTable("developers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  photoUrl: text("photo_url").notNull(),
  socialUrl: text("social_url"),
});

// === Schemas ===
export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export const insertSponsorSchema = createInsertSchema(sponsors).omit({ id: true });
export const insertDeveloperSchema = createInsertSchema(developers).omit({ id: true });

export type Event = typeof events.$inferSelect;
export type Sponsor = typeof sponsors.$inferSelect;
export type Developer = typeof developers.$inferSelect;
