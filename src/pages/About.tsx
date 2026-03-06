import { Link } from "react-router-dom";
import andreaPortrait from "@/assets/andrea-portrait.webp";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";

const industries = [
  "Fragrance", "Fashion", "Fintech", "Agriculture", "Jewelry", "Home & Lifestyle",
];

const tools = [
  "Figma", "Adobe Creative Suite", "Excel & Financial Modeling", "Notion",
  "Shopify", "Meta Business Suite", "Google Analytics", "Midjourney", "Claude",
];

const About = () => (
  <main className="pt-24 pb-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
        {/* Portrait */}
        <ScrollReveal className="md:col-span-2">
          <img src={andreaPortrait} alt="Andrea Freydell — strategist and creative director" className="aspect-[3/4] rounded-btn object-cover w-full sticky top-24" loading="lazy" />
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={100} className="md:col-span-3">
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ letterSpacing: '-0.02em' }}>Andrea Freydell</h1>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                I'm a digital strategist and creative director based in Colombia, currently Managing Director at Grupo Ambiente — my family's multi-brand home fashion company. I work at the intersection of brand building, financial thinking, and digital systems.
              </p>
              <p>
                My background spans private equity, real estate investment, and founding a fashion brand. I've led international expansion, M&A strategy, and operations at scale. Throughout, I've built brands from the ground up—understanding both the financial model and the creative vision required to make them resonate.
              </p>
              <p>
                I don't separate strategy from creativity. The strongest brands are built by people who can read a spreadsheet, design a moodboard, and understand what actually moves customers. That's where I operate.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Divider />

      {/* Industries */}
      <ScrollReveal>
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Industries</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span key={ind} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground font-light">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Tools */}
      <ScrollReveal>
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Tools & Platforms</p>
          <p className="text-sm text-muted-foreground font-light">
            {tools.join(" · ")}
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center py-8">
          <h2 className="text-2xl font-normal mb-4">Let's work together</h2>
          <Button asChild size="lg" className="rounded-btn">
            <Link to="/contact">Get in Touch →</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default About;
