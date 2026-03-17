import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import ContactDialog from "@/components/ContactDialog";

const waysToWork = [
  {
    title: "Course Library",
    description:
      "For founders who want structured, self-serve implementation blueprints across the foundations and advanced workflow tracks.",
    items: ["Standalone courses", "Bundles", "Clear implementation paths"],
  },
  {
    title: "Membership",
    description:
      "For buyers who want the current library plus future builds, a monthly release cadence, and a more ongoing relationship with the platform.",
    items: ["All current courses", "Future workflow releases", "Community-oriented product layer"],
  },
  {
    title: "Custom Builds",
    description:
      "For businesses whose use case does not fit neatly into the catalog and needs a more specific workflow architecture.",
    items: ["Diagnosis and scope", "Recommended stack", "Custom build path"],
  },
  {
    title: "Strategic Advisory",
    description:
      "For founders who need help deciding what to build first, how to structure the stack, and where AI should actually create leverage.",
    items: ["Priority mapping", "Stack decisions", "Workflow sequencing"],
  },
];

const backgroundSystems = [
  {
    num: "Background 1",
    title: "Scaling with AI",
    color: "bg-lavender",
    services: [
      "Workflow builds and AI-assisted operating layers",
      "Image and content systems",
      "Internal tooling logic for lean teams",
    ],
  },
  {
    num: "Background 2",
    title: "Management Consulting",
    color: "bg-seafoam",
    services: [
      "Financial and operational framing",
      "Growth decisions grounded in business logic",
      "Strategic clarity before execution",
    ],
  },
  {
    num: "Background 3",
    title: "Branding & Creative Direction",
    color: "bg-blush-peach",
    services: [
      "Brand quality as an operating input",
      "Creative systems and visual direction",
      "Stronger taste embedded into workflows",
    ],
  },
  {
    num: "Background 4",
    title: "Digital Strategy",
    color: "bg-sky",
    services: [
      "Web, content, and conversion thinking",
      "Digital systems rather than disconnected assets",
      "A practical route from idea to interface",
    ],
  },
];

const Services = () => (
  <main className="pt-24 pb-16 px-6">
    <div className="container mx-auto max-w-6xl">
      <ScrollReveal>
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Ways to Work Together</p>
          <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
            Choose the level of support that matches how you want to move.
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Start with a course, unlock the full library, or book direct help if your use case needs a more specific build.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {waysToWork.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 80}>
            <div className="rounded-card border border-border bg-card p-8 h-full">
              <h2 className="text-2xl font-medium mb-3">{item.title}</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">{item.description}</p>
              <ul className="space-y-3">
                {item.items.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Divider />

      <ScrollReveal>
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">What the products are built from</p>
          <h2 className="text-3xl font-normal mb-4" style={{ letterSpacing: "-0.01em" }}>
            Strategy, brand, and systems thinking in the same room.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            These are the capabilities behind the courses, the memberships, and the custom builds.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {backgroundSystems.map((system, index) => (
          <ScrollReveal key={system.title} delay={index * 70}>
            <div className="rounded-card border border-border bg-card p-6 h-full">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-2">{system.num}</p>
              <div className="flex items-center gap-4 mb-5">
                <div className={`h-10 w-10 rounded-full ${system.color}`} />
                <h3 className="text-lg font-medium">{system.title}</h3>
              </div>
              <ul className="space-y-3">
                {system.services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Divider />

      <ScrollReveal>
        <div className="rounded-card border border-border bg-card p-8 md:p-10 text-center">
          <h2 className="text-3xl font-normal mb-4" style={{ letterSpacing: "-0.01em" }}>
            Not sure whether you need a course, membership, or a custom build?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed mb-8">
            The free consultation is there to help you choose the fastest path. If the library is enough, that will be clear quickly.
            If not, the call creates a more focused next step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-btn">
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <ContactDialog>
              <Button variant="outline" size="lg" className="rounded-btn">
                Book Free Consultation
              </Button>
            </ContactDialog>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </main>
);

export default Services;
