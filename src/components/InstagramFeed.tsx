import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import instagramGrid from "@/assets/instagram-grid.png";

const INSTAGRAM_URL = "https://www.instagram.com/andreafreydell";

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
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block group">
        <img
          src={instagramGrid}
          alt="Andrea Freydell's Instagram feed"
          className="w-full rounded-card transition-opacity duration-300 group-hover:opacity-90"
          loading="lazy"
        />
      </a>
    </div>
  </ScrollReveal>
);

export default InstagramFeed;
