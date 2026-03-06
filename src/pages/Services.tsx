import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import ContactDialog from "@/components/ContactDialog";

const systems = [
  {
    num: "System 1",
    title: "Scaling with AI",
    color: "bg-lavender",
    services: [
      "AI image generation for product & brand content",
      "Automated product data & catalog systems",
      "Content platforms & self-building agent systems",
      "AI-powered ecommerce optimization",
    ],
  },
  {
    num: "System 2",
    title: "Management Consulting",
    color: "bg-seafoam",
    services: [
      "Financial modeling & projections",
      "Debt & equity fundraising support",
      "Competitive & market analysis",
      "Wholesale distribution strategy",
      "Sales team training & enablement",
    ],
  },
  {
    num: "System 3",
    title: "Branding & Creative Direction",
    color: "bg-blush-peach",
    services: [
      "Brand identity & visual systems",
      "Product design (physical & digital)",
      "Packaging & retail display",
      "Photography art direction & production",
      "Corporate presentation design",
    ],
  },
  {
    num: "System 4",
    title: "Digital Strategy",
    color: "bg-sky",
    services: [
      "Website design & conversion optimization",
      "Social media content & ad systems",
      "Influencer program architecture",
      "PR strategy & media placement",
      "Campaign logic & content calendars",
    ],
  },
];

const Services = () => (
  <main className="pt-24 pb-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: '-0.02em' }}>Four Systems, One Practice</h1>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mb-16">
          I don't offer services — I build systems. Each engagement starts with understanding the business, then designing the infrastructure to make it work.
        </p>
      </ScrollReveal>

      <div className="grid gap-8">
        {systems.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <div className="rounded-card bg-card border border-border p-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{s.num}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-full ${s.color}`} />
                <h2 className="text-xl font-medium">{s.title}</h2>
              </div>
              <ul className="space-y-3">
                {s.services.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Divider />

      {/* Engagement Format */}
      <ScrollReveal>
        <div className="rounded-card bg-card border border-border p-8 mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">How it Works</p>
          <h2 className="text-xl font-medium mb-4">Engagement Format</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Most projects begin with a strategy sprint — 2 to 4 weeks of diagnosis and framework design. From there, we build. Implementation scope depends on the system. Some projects are 6 weeks, some are ongoing retainers.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-normal mb-4">Ready to start?</h2>
          <ContactDialog>
            <Button size="lg" className="rounded-btn">Let's Talk →</Button>
          </ContactDialog>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default Services;
