import { cn } from "@/lib/utils";
import type { Offer } from "@/data/coursePlatform";

interface OfferCardProps {
  offer: Offer;
  className?: string;
}

const OfferCard = ({ offer, className }: OfferCardProps) => (
  <div
    className={cn(
      "rounded-card border border-border bg-card p-6",
      offer.slug === "limited-time" && "border-brass/40 bg-brass/5",
      className
    )}
  >
    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{offer.label}</p>
    <h3 className="text-2xl font-medium mb-2">{offer.title}</h3>
    <p className="text-sm font-medium text-brass mb-4">{offer.price}</p>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{offer.description}</p>
    <ul className="space-y-2">
      {offer.highlights.map((highlight) => (
        <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default OfferCard;
