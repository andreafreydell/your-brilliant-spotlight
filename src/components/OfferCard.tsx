import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { Offer } from "@/data/coursePlatform";
import { useLanguage } from "@/contexts/LanguageContext";

interface OfferCardProps {
  offer: Offer;
  className?: string;
}

const offerTranslationMap: Record<string, { label: string; title: string; price: string; desc: string; highlights: string[] }> = {
  "limited-time": {
    label: "offer.limitedTime.label",
    title: "offer.limitedTime.title",
    price: "offer.limitedTime.price",
    desc: "offer.limitedTime.desc",
    highlights: ["offer.limitedTime.h1", "offer.limitedTime.h2"],
  },
  membership: {
    label: "offer.membership.label",
    title: "offer.membership.title",
    price: "offer.membership.price",
    desc: "offer.membership.desc",
    highlights: ["offer.membership.h1", "offer.membership.h2"],
  },
  "custom-builds": {
    label: "offer.custom.label",
    title: "offer.custom.title",
    price: "offer.custom.price",
    desc: "offer.custom.desc",
    highlights: ["offer.custom.h1", "offer.custom.h2", "offer.custom.h3"],
  },
};

const OfferCard = ({ offer, className }: OfferCardProps) => {
  const { t } = useLanguage();
  const keys = offerTranslationMap[offer.slug];

  const label = keys ? t(keys.label) : offer.label;
  const title = keys ? t(keys.title) : offer.title;
  const price = keys ? t(keys.price) : offer.price;
  const description = keys ? t(keys.desc) : offer.description;
  const highlights = keys ? keys.highlights.map((k) => t(k)) : offer.highlights;

  return (
    <div
      className={cn(
        "rounded-card border border-border bg-card p-6",
        offer.slug === "limited-time" && "border-brass/40 bg-brass/5",
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{label}</p>
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-sm font-medium text-brass mb-4">{price}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      {offer.slug === "limited-time" && (
        <Link
          to="/courses/image-backwards-engineering/lessons/ai-jewelry-prompt-lab"
          className="mt-6 inline-flex items-center justify-center rounded-btn bg-brass px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brass/90"
        >
          {t("offerCard.viewFree")}
        </Link>
      )}
    </div>
  );
};

export default OfferCard;
