import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      <div className="w-full overflow-hidden rounded-card">
        <iframe
          src="https://www.instagram.com/andreafreydell/embed"
          className="w-full border-0"
          style={{ minHeight: "600px" }}
          allowTransparency
          scrolling="no"
          title="Andrea Freydell Instagram Feed"
          loading="lazy"
        />
      </div>
    </div>
  </ScrollReveal>
);

export default InstagramFeed;
