import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";

const industries = [
  "Fragrance", "Fashion", "Fintech", "Agriculture", "Jewelry",
  "Home & Lifestyle", "Hospitality", "Beauty", "Food & Beverage",
];

const tools = [
  "Figma", "Notion", "Miro", "Adobe Creative Suite", "Webflow",
  "Shopify", "HubSpot", "Google Analytics", "Airtable", "Slack",
];

const About = () => (
  <main className="pt-24 pb-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
        {/* Portrait */}
        <ScrollReveal className="md:col-span-2">
          <div className="aspect-[3/4] rounded-card bg-muted flex items-center justify-center sticky top-24">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-muted-foreground/30">
              <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
              <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={100} className="md:col-span-3">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Andrea</h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a brand strategist and creative director who believes the best brands are built at the intersection
                of business rigor and creative audacity.
              </p>
              <p>
                My career has spanned management consulting, creative agencies, and startup ecosystems — giving me a
                rare ability to translate between boardrooms and design studios. I've helped brands across fragrance,
                fashion, fintech, agriculture, and hospitality build systems that are as strategically sound as they
                are visually compelling.
              </p>
              <p>
                I work as an independent practitioner, assembling the right team for each project. This means you get
                senior-level thinking on every touchpoint — no junior handoffs, no bloated timelines.
              </p>
              <p>
                When I'm not building brand worlds, you'll find me exploring markets in new cities, studying how
                spaces and scents shape experience, or deep in a novel about someone making something beautiful.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Divider />

      {/* Industries */}
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Industries</h2>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span key={ind} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Tools */}
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Tools & Platforms</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-4">Let's work together</h2>
          <Button asChild size="lg" className="rounded-btn">
            <Link to="/contact">Get in Touch →</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default About;
