import { Link } from "react-router-dom";
import andreaPortrait from "@/assets/andrea-portrait.webp";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import ContactDialog from "@/components/ContactDialog";
import InstagramFeed from "@/components/InstagramFeed";

const industries = ["Fragrance", "Fashion", "Fintech", "Agriculture", "Jewelry", "Home & Lifestyle"];

const tools = [
  "Lovable",
  "Claude Code + OpenAI Codex (Free Module)",
  "Claude Cowork (Now Featuring Free Codex Upgrade)",
  "GitHub",
  "Notion",
  "Shopify",
  "Financial Modeling",
  "Creative Direction",
  "AI Image Systems",
];

const About = () => (
  <main className="pt-24 pb-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
        <ScrollReveal className="md:col-span-2">
          <img src={andreaPortrait} alt="Andrea Freydell - founder and operator" className="aspect-[3/4] rounded-btn object-cover w-full sticky top-24" loading="lazy" />
        </ScrollReveal>

        <ScrollReveal delay={100} className="md:col-span-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">About</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>
              Andrea Freydell
            </h1>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                Andrea is a founder and operator building at the intersection of brand, systems, ecommerce, and AI-assisted execution.
                She leads GEA and Grupo Ambiente and builds practical workflow systems for founders who want more speed, control, and better output.
              </p>
              <p>
                Her background spans management thinking, brand building, digital strategy, and creative direction. The result is a point of view
                that stays useful for non-technical founders: serious enough to build from, clear enough to act on.
              </p>
              <p>
                The work is designed for people who care about quality, brand consistency, and execution, but do not want to build their business
                around a bloated team or a chaotic tool stack.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="rounded-btn">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-btn">
                <Link to="/work">See Proof</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <InstagramFeed />

      <Divider />

      <ScrollReveal>
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Industries</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span key={industry} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground font-light">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Tools & Operating Stack</p>
          <p className="text-sm text-muted-foreground font-light">{tools.join(" / ")}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-center py-8">
          <h2 className="text-2xl font-normal mb-4">Want help deciding where to start?</h2>
          <ContactDialog>
            <Button size="lg" className="rounded-btn">Book Free Consultation</Button>
          </ContactDialog>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default About;
