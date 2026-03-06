import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByPillar } from "@/data/projects";

const filters = [
  { key: "all", label: "All" },
  { key: "consulting", label: "Consulting" },
  { key: "creative", label: "Creative" },
  { key: "digital", label: "Digital" },
];

const Work = () => {
  const [active, setActive] = useState("all");
  const filtered = getProjectsByPillar(active);

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            A curated selection of brand strategy, creative direction, and digital projects across industries.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-btn text-sm font-medium transition-colors ${
                  active === f.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <ProjectCard {...p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
