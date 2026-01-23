import { mockEvents } from "@/data/mock-data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { Calendar, MapPin, Tag } from "lucide-react";
import { format } from "date-fns";
import EarbudShowcase from "@/components/eventshowcase";

export default function DemoOne() {
  return <EarbudShowcase />;
}
