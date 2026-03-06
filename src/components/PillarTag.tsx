import { cn } from "@/lib/utils";

type Pillar = "consulting" | "creative" | "digital" | "ai";

const pillarStyles: Record<Pillar, string> = {
  consulting: "bg-seafoam text-seafoam-foreground",
  creative: "bg-blush-peach text-blush-peach-foreground",
  digital: "bg-sky text-sky-foreground",
  ai: "bg-lavender text-lavender-foreground",
};

const pillarLabels: Record<Pillar, string> = {
  consulting: "Consulting",
  creative: "Creative",
  digital: "Digital",
  ai: "Scaling with AI",
};

interface PillarTagProps {
  pillar: Pillar;
  className?: string;
}

const PillarTag = ({ pillar, className }: PillarTagProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
      pillarStyles[pillar],
      className
    )}
  >
    {pillarLabels[pillar]}
  </span>
);

export default PillarTag;
export type { Pillar };
