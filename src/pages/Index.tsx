import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import Divider from "@/components/Divider";
import { getFeaturedProjects } from "@/data/projects";

const industries = ["Fragrance", "Fashion", "Fintech", "Agriculture", "Jewelry", "Home & Lifestyle"];

const pillars = [
  {
    title: "Management Consulting",
    desc: "Operational strategy, brand architecture, and market positioning for businesses ready to scale with intention.",
    color: "bg-seafoam",
  },
  {
    title: "Branding & Creative Direction",
    desc: "Visual identity, creative campaigns, and brand worlds that connect emotionally and perform commercially.",
    color: "bg-blush-peach",
  },
  {
    title: "Digital Strategy",
    desc: "Digital transformation, e-commerce architecture, and platform strategies that turn browsers into believers.",
    color: "bg-sky",
  },
];

const Index = () => {
  const featured = getFeaturedProjects();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--seafoam)/0.2)_0%,transparent_70%)]" />
        <div className="relative text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              I build <span className="underline-stroke">brand worlds</span> that perform.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
              Strategy, identity, and digital systems for brands that refuse to blend in.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-btn text-sm font-medium">
                <Link to="/work">See the Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                <Link to="/contact">Let's Talk →</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-16">Three Systems, One Practice</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="rounded-card bg-card border border-border p-8 text-center">
                  <div className={`w-12 h-12 rounded-full ${p.color} mx-auto mb-5`} />
                  <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold">Featured Work</h2>
              <Link to="/work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                View all →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 80}>
                <ProjectCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <p className="text-center text-lg md:text-xl text-muted-foreground italic tracking-wide">
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
              <div className="aspect-[3/4] rounded-card bg-muted flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-muted-foreground/30">
                  <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">The Strategist Behind the Systems</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Andrea — a brand strategist and creative director who works at the intersection of business
                  thinking and creative expression. I help ambitious brands build systems that scale beautifully.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With a background spanning management consulting, creative direction, and digital strategy,
                  I bring a rare cross-disciplinary perspective to every engagement.
                </p>
                <Link
                  to="/about"
                  className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's explore how strategy, creativity, and digital thinking can transform your brand.
            </p>
            <Button asChild size="lg" className="rounded-btn bg-tag-red text-tag-red-foreground hover:bg-tag-red/90">
              <Link to="/contact">Start a Conversation →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
