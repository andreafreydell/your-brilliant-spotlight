import { useState } from "react";
import andreaPortrait from "@/assets/andrea-portrait.webp";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import Divider from "@/components/Divider";
import { getFeaturedProjects } from "@/data/projects";

const industries = ["Fragrance", "Fashion", "Fintech", "Agriculture", "Jewelry", "Home & Lifestyle"];

const pillars = [
  {
    key: "consulting",
    num: "WAY 1/4",
    title: "Management Consulting",
    desc: "Financial modeling, fundraising strategy, market analysis, and wholesale systems that scale.",
  },
  {
    key: "creative",
    num: "WAY 2/4",
    title: "Branding & Creative Direction",
    desc: "Identity systems, product design, packaging, photography direction, and corporate presentations.",
  },
  {
    key: "digital",
    num: "WAY 3/4",
    title: "Digital Strategy",
    desc: "Web design, social media systems, content architecture, PR campaigns, and influencer programs.",
  },
  {
    key: "ai",
    num: "WAY 4/4",
    title: "Scaling with AI",
    desc: "AI image generation, automated product data, content platforms, and self-building agent systems for ecommerce.",
  },
];

const Index = () => {
  const featured = getFeaturedProjects();
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const filteredFeatured = activePillar
    ? featured.filter((p) => p.pillar === activePillar)
    : featured;

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--seafoam)/0.2)_0%,transparent_70%)]" />
        <div className="relative text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              I build brand worlds<br />that <span className="underline-stroke">perform</span>.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto mb-8">
              Strategy, creative direction, and digital systems — from the boardroom to the shelf.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-btn text-sm font-medium">
                <Link to="/work">See the Work →</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars — Filter Buttons */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => {
              const isActive = activePillar === p.key;
              return (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <button
                    onClick={() => setActivePillar(isActive ? null : p.key)}
                    className={`w-full text-center p-8 rounded-card border-2 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? p.key === "consulting"
                          ? "bg-seafoam border-seafoam shadow-md scale-[1.02]"
                          : p.key === "creative"
                          ? "bg-blush-peach border-blush-peach shadow-md scale-[1.02]"
                          : "bg-sky border-sky shadow-md scale-[1.02]"
                        : "border-transparent hover:border-border hover:shadow-sm"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{p.num}</p>
                    <h3 className="text-xl font-medium mb-3 text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-normal" style={{ letterSpacing: '-0.01em' }}>
                Featured Work
                {activePillar && (
                  <span className="text-lg text-muted-foreground font-light ml-3">
                    — {pillars.find(pl => pl.key === activePillar)?.title}
                  </span>
                )}
              </h2>
              <Link to="/work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                View all →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatured.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <ProjectCard {...p} />
              </ScrollReveal>
            ))}
          </div>
          {filteredFeatured.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No featured projects in this category.</p>
          )}
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <p className="text-center text-lg md:text-xl text-muted-foreground italic tracking-wide font-light">
              {industries.join(" · ")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* About Teaser */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src={andreaPortrait} alt="Andrea Freydell — strategist and creative director" className="aspect-[3/4] rounded-btn object-cover w-full" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-2xl md:text-3xl font-normal mb-6" style={{ letterSpacing: '-0.01em' }}>Andrea Freydell</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  I'm a strategist and creative director based in Colombia. I work at the intersection of brand building, financial thinking, and digital systems — helping companies translate vision into revenue.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  My background spans management consulting, product design, and full-spectrum creative direction across fashion, fragrance, agriculture, fintech, and home & lifestyle.
                </p>
                <Button asChild variant="outline" className="rounded-btn text-sm font-medium">
                  <Link to="/about">Read More →</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ letterSpacing: '-0.01em' }}>Have a project in mind?</h2>
            <p className="text-muted-foreground font-light mb-8">
              Let's talk about what you're building.
            </p>
            <Button asChild size="lg" className="rounded-btn bg-tag-red text-tag-red-foreground hover:bg-tag-red/90">
              <Link to="/contact">Get in Touch →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
