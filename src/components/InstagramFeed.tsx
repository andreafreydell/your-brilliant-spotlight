import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/andreafreydell";
const GRID_COUNT = 18; // 6 columns × 3 rows

const InstagramFeed = () => (
  <ScrollReveal>
    <div className="mb-16">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-6 hover:text-foreground transition-colors"
      >
        <Instagram className="w-4 h-4" />
        @andreafreydell
      </a>
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: GRID_COUNT }).map((_, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square bg-muted rounded-sm overflow-hidden"
          >
            {/* Gradient placeholder with subtle variation */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: `linear-gradient(${135 + i * 20}deg, hsl(var(--seafoam) / ${0.15 + (i % 3) * 0.1}), hsl(var(--blush-peach) / ${0.1 + (i % 4) * 0.08}), hsl(var(--lavender) / ${0.12 + (i % 5) * 0.06}))`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/30">
              <Instagram className="w-5 h-5 text-background" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </ScrollReveal>
);

export default InstagramFeed;
