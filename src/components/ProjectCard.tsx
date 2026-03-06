import { Link } from "react-router-dom";
import PillarTag from "./PillarTag";
import type { Pillar } from "./PillarTag";

interface ProjectCardProps {
  slug: string;
  title: string;
  microLabel: string;
  description: string;
  pillar: Pillar;
}

const ProjectCard = ({ slug, title, microLabel, description, pillar }: ProjectCardProps) => (
  <Link
    to={`/work/${slug}`}
    className="group block rounded-card bg-card border border-border p-6 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 hover:border-foreground/20"
  >
    {/* Illustration placeholder */}
    <div className="aspect-[4/3] rounded-md bg-muted flex items-center justify-center mb-5">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground/40">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 30l10-8 8 6 10-10 8 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>

    <PillarTag pillar={pillar} className="mb-3" />
    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{microLabel}</p>
    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
    <span className="text-sm font-medium text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
      View Case Study <span>→</span>
    </span>
  </Link>
);

export default ProjectCard;
