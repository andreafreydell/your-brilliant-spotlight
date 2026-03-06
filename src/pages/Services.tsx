import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";

const systems = [
  {
    title: "Management Consulting",
    color: "bg-seafoam",
    services: [
      "Brand & portfolio architecture",
      "Market positioning & competitive analysis",
      "Operational restructuring",
      "Go-to-market strategy",
      "Investor & stakeholder communications",
    ],
  },
  {
    title: "Branding & Creative Direction",
    color: "bg-blush-peach",
    services: [
      "Visual identity & brand systems",
      "Creative campaign direction",
      "Packaging & retail experience design",
      "Brand voice & messaging frameworks",
      "Art direction & content strategy",
    ],
  },
  {
    title: "Digital Strategy",
    color: "bg-sky",
    services: [
      "Digital transformation roadmaps",
      "E-commerce architecture & UX",
      "Platform & product strategy",
      "Social media & content systems",
      "CRM & customer journey design",
    ],
  },
];

const Services = () => (
  <main className="pt-24 pb-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Three Systems, One Practice</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Every engagement draws from three interconnected disciplines. The mix depends on what your brand needs most.
        </p>
      </ScrollReveal>

      <div className="grid gap-8">
        {systems.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <div className="rounded-card bg-card border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-full ${s.color}`} />
                <h2 className="text-xl font-semibold">{s.title}</h2>
              </div>
              <ul className="space-y-3">
                {s.services.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
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
          <h2 className="text-xl font-semibold mb-4">How Engagements Work</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I work in focused sprints — typically 2–6 weeks per phase — so we move fast without sacrificing depth.
            Every engagement starts with a discovery session to understand your business, market, and ambitions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From there, I propose a tailored scope drawing from any combination of the three systems above.
            You get a clear deliverable timeline, weekly check-ins, and a final handoff designed for your team to run with.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to start?</h2>
          <Button asChild size="lg" className="rounded-btn">
            <Link to="/contact">Let's Talk →</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default Services;
