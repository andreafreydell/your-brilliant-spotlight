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
                I'm a strategist and creative director based in Colombia. I work at the intersection of brand building, financial thinking, and digital systems.
              </p>
              <p>
                My career started in management consulting — financial modeling, fundraising, and commercial strategy for companies across agriculture, fintech, fashion, and consumer goods. Over time, I moved into the creative side: building brand identities, directing photography, designing products, and leading digital strategy.
              </p>
              <p>
                I don't separate these disciplines. The best brands are built by people who understand both the spreadsheet and the moodboard. That's where I operate.
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
