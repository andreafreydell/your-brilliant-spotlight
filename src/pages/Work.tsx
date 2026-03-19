import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByPillar } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const Work = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("all");
  const filtered = getProjectsByPillar(active);

  const filters = [
    { key: "all", labelKey: "work.filter.all" },
    { key: "consulting", labelKey: "work.filter.consulting" },
    { key: "creative", labelKey: "work.filter.creative" },
    { key: "digital", labelKey: "work.filter.digital" },
    { key: "ai", labelKey: "work.filter.ai" },
  ];

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>{t("work.title")}</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mb-12">
            {t("work.subtitle")}
          </p>
        </ScrollReveal>

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
                {t(f.labelKey)}
              </button>
            ))}
          </div>
        </ScrollReveal>

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
