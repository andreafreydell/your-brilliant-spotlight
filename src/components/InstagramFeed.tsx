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
        className="group block w-full rounded-card border border-border p-12 text-center transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
      >
        <Instagram className="w-10 h-10 mx-auto mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        <p className="text-lg font-light mb-2 text-foreground">@andreafreydell</p>
        <p className="text-sm text-muted-foreground font-light">Follow along on Instagram →</p>
      </a>
    </div>
  </ScrollReveal>
);

export default InstagramFeed;
