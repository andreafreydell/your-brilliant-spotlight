import { Link } from "react-router-dom";
import PillarTag from "./PillarTag";
import type { Pillar } from "./PillarTag";

interface ProjectCardMiniProps {
  slug: string;
  title: string;
  microLabel: string;
  pillar: Pillar;
  illustration: string;
}

const ProjectCardMini = ({ slug, title, microLabel, pillar, illustration }: ProjectCardMiniProps) => (
  <Link
    to={`/work/${slug}`}
    className="group block rounded-card bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-foreground/5 hover:-translate-y-0.5 hover:border-foreground/20"
  >
    <div
      className="w-full aspect-[5/3]"
      dangerouslySetInnerHTML={{ __html: illustration }}
    />
    <div className="p-3 sm:p-4">
      <PillarTag pillar={pillar} className="mb-2 text-[10px] px-2 py-0.5" />
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{microLabel}</p>
      <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-foreground/80 transition-colors leading-snug">
        {title}
      </h3>
    </div>
  </Link>
);

export default ProjectCardMini;
