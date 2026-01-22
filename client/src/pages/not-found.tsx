import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border p-8 rounded-3xl text-center shadow-2xl">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-3xl font-display text-white mb-4">404 Lost in Space</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for has drifted away into the void.
        </p>
        <Link href="/">
          <button className="w-full py-3 px-6 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
