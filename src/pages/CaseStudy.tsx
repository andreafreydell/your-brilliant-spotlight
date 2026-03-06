import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PillarTag from "@/components/PillarTag";
import Divider from "@/components/Divider";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";

const acts = [
  { num: "1/4", title: "The Problem", key: "problem" as const },
  { num: "2/4", title: "The Shift", key: "shift" as const },
  { num: "3/4", title: "The System", key: "system" as const },
  { num: "4/4", title: "The Assets", key: "assets" as const },
];

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) return <Navigate to="/work" replace />;

  const { prev, next } = getAdjacentProjects(slug || "");

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Hero */}
        <ScrollReveal>
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
            ← Back to Work
          </Link>
          <PillarTag pillar={project.pillar} className="mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{project.caseStudy.heroSubtitle}</p>
        </ScrollReveal>

        {/* Illustration placeholder */}
        <ScrollReveal delay={100}>
          <div className="aspect-video rounded-card bg-muted flex items-center justify-center mb-16">
            <svg width="64" height="64" viewBox="0 0 48 48" fill="none" className="text-muted-foreground/30">
              <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
              <path d="M6 30l10-8 8 6 10-10 8 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        </ScrollReveal>

        {/* Four Acts */}
        {acts.map((act, i) => (
          <ScrollReveal key={act.key} delay={i * 80}>
            <section className="mb-16">
              <p className="text-xs uppercase tracking-widest text-brass font-semibold mb-2">WAY {act.num}</p>
              <h2 className="text-2xl font-semibold mb-4">{act.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{project.caseStudy[act.key]}</p>
            </section>
          </ScrollReveal>
        ))}

        <Divider />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to={`/work/${prev.slug}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {prev.title}
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {next.title} →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CaseStudy;
