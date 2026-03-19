import { Link } from "react-router-dom";
import PillarTag from "./PillarTag";
import type { Pillar } from "./PillarTag";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  slug: string;
  title: string;
  microLabel: string;
  description: string;
  pillar: Pillar;
  illustration: string;
}

const ProjectCard = ({ slug, title, microLabel, description, pillar, illustration }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <Link
      to={`/work/${slug}`}
      className="group block rounded-card bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 hover:border-foreground/20"
    >
      <div
        className="w-full aspect-[4/3]"
        dangerouslySetInnerHTML={{ __html: illustration }}
      />
      <div className="p-6">
        <PillarTag pillar={pillar} className="mb-3" />
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{microLabel}</p>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <span className="text-sm font-medium text-dusty-teal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          {t("projectCard.viewCaseStudy")} <span>{"->"}</span>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
