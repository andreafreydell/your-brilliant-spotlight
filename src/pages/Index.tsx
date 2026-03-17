import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Code2,
  Compass,
  FolderTree,
  Image,
  MessageSquare,
  Monitor,
  Palette,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import ProjectCard from "@/components/ProjectCard";
import ContactDialog from "@/components/ContactDialog";
import OfferCard from "@/components/OfferCard";
import { getFeaturedProjects } from "@/data/projects";
import { courses, homeFaqs, offers } from "@/data/coursePlatform";

const heroHighlights: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    title: "Content systems",
    description: "Plan, generate, review, and package content faster.",
    icon: MessageSquare,
    accent: "bg-lavender text-lavender-foreground",
  },
  {
    title: "Image workflows",
    description: "Create cleaner, more on-brand visual outputs at scale.",
    icon: Image,
    accent: "bg-blush-peach text-blush-peach-foreground",
  },
  {
    title: "Website production",
    description: "Turn brand inputs into pages, assets, and launch-ready copy.",
    icon: Monitor,
    accent: "bg-sky text-sky-foreground",
  },
  {
    title: "AI build stack",
    description: "Use Lovable, Claude Code, OpenAI Codex, GitHub, and Notion with more control.",
    icon: Bot,
    accent: "bg-seafoam text-seafoam-foreground",
  },
];

const foundationPath: Array<{
  slug: string;
  label: string;
  outcome: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    slug: "tech-stack-overview",
    label: "Tech Stack Overview",
    outcome: "Choose the right tools first.",
    icon: Compass,
    accent: "bg-seafoam text-seafoam-foreground",
  },
  {
    slug: "image-backwards-engineering",
    label: "Image Backwards Engineering",
    outcome: "Reverse-engineer strong visuals and adapt them to your brand.",
    icon: Image,
    accent: "bg-blush-peach text-blush-peach-foreground",
  },
  {
    slug: "key-business-files",
    label: "Key Business Files",
    outcome: "Organize the inputs AI needs.",
    icon: FolderTree,
    accent: "bg-sky text-sky-foreground",
  },
  {
    slug: "lovable-crash-course",
    label: "Lovable Crash Course",
    outcome: "Prototype useful interfaces faster.",
    icon: Workflow,
    accent: "bg-lavender text-lavender-foreground",
  },
  {
    slug: "github-claude-workflow",
    label: "GitHub + Claude Code + OpenAI Codex Workflow",
    outcome: "Build with Claude Code, OpenAI Codex, and GitHub with more safety and less chaos.",
    icon: Code2,
    accent: "bg-seafoam text-seafoam-foreground",
  },
];

const advancedLanes: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  courseItems: Array<{ slug: string; label: string }>;
}> = [
  {
    title: "Content Systems",
    description: "Turn strategy into a repeatable publishing engine.",
    icon: MessageSquare,
    accent: "bg-lavender text-lavender-foreground",
    courseItems: [
      { slug: "ig-content-builder-3pillar", label: "3-Pillar Instagram Content Builder" },
      { slug: "personal-instagram-content-builder", label: "Personal Instagram Content Builder" },
    ],
  },
  {
    title: "Brand and Image Control",
    description: "Scale visuals without losing brand consistency.",
    icon: Palette,
    accent: "bg-blush-peach text-blush-peach-foreground",
    courseItems: [
      { slug: "on-brand-automation", label: "On-Brand Automation" },
      { slug: "wide-range-image-generation", label: "Wide-Range Image Generation" },
    ],
  },
  {
    title: "Website Systems",
    description: "Ship stronger website visuals and copy with less friction.",
    icon: Monitor,
    accent: "bg-sky text-sky-foreground",
    courseItems: [
      { slug: "website-photo-generator", label: "Website Photo Generator" },
      { slug: "website-content-generator", label: "Website Content Generator" },
    ],
  },
];

const Index = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const courseMap = new Map(courses.map((course) => [course.slug, course]));

  return (
    <main>
      <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--lavender)/0.28)_0%,transparent_52%),radial-gradient(ellipse_at_bottom_right,hsl(var(--seafoam)/0.22)_0%,transparent_48%)]" />
        <div className="container relative mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <ScrollReveal>
                <p className="mb-5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  AI Workflow Library
                </p>
                <h1
                  className="mb-6 max-w-4xl text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Build content, image, and website systems without hiring a full team first.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  Courses, workflow blueprints, and custom support for founders who want faster output,
                  tighter brand control, and a cleaner AI stack.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-btn text-sm font-medium">
                    <a href="#offers">Start With the Free Courses</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                    <a href="#course-roadmap">See the Course Path</a>
                  </Button>
                  <ContactDialog>
                    <Button variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                      Book Free Consultation
                    </Button>
                  </ContactDialog>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={280}>
              <div className="rounded-card border border-border bg-card/90 p-8 backdrop-blur-sm">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">What you can build</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-card border border-border bg-background/70 p-5">
                        <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${item.accent}`}>
                          <Icon size={18} />
                        </div>
                        <h2 className="mb-2 text-lg font-medium">{item.title}</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="offers" className="px-6 pb-10">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Offers</p>
              <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                Start with the offer that fits how fast you want to move.
              </h2>
              <p className="font-light leading-relaxed text-muted-foreground">
                Begin with the limited-time free courses, unlock the full library, or book direct support if you
                want help choosing the right build.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <ScrollReveal key={offer.slug} delay={index * 80}>
                <OfferCard offer={offer} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="course-roadmap" className="px-6 py-20 md:py-24">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Course Roadmap</p>
              <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                Start with the foundations. Then choose the system you want live next.
              </h2>
              <p className="font-light leading-relaxed text-muted-foreground">
                The foundations give you stack clarity, cleaner inputs, and better decision-making. From there,
                the advanced workflows take you into content, image, and website execution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_auto_1.05fr] lg:items-start">
            <ScrollReveal>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Foundations</p>
                <h3 className="mb-6 text-2xl font-medium">Build the base first</h3>
                <div className="space-y-4">
                  {foundationPath.map((step, index) => {
                    const course = courseMap.get(step.slug);
                    const Icon = step.icon;

                    if (!course) {
                      return null;
                    }

                    return (
                      <div key={step.slug} className="rounded-card border border-border bg-background/70 p-5">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${step.accent}`}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                Step {index + 1}
                              </p>
                              <h4 className="text-lg font-medium">{step.label}</h4>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">{course.priceLabel}</p>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{step.outcome}</p>
                        {course.limitedTimeNote && (
                          <p className="mt-4 inline-flex rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
                            {course.limitedTimeNote}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="hidden h-full items-start justify-center lg:flex">
              <div className="mt-24 inline-flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
                <ArrowRight size={22} className="text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={80}>
                <div className="rounded-card border border-border bg-card p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Advanced Workflows</p>
                  <h3 className="mb-3 text-2xl font-medium">Choose the outcome you want</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    Once the foundations are in place, pick the lane that helps you ship the next visible result.
                  </p>
                </div>
              </ScrollReveal>

              {advancedLanes.map((lane, index) => {
                const Icon = lane.icon;

                return (
                  <ScrollReveal key={lane.title} delay={index * 90 + 120}>
                    <div className="rounded-card border border-border bg-card p-8">
                      <div className="mb-5 flex items-center gap-4">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${lane.accent}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-xl font-medium">{lane.title}</h4>
                          <p className="text-sm text-muted-foreground">{lane.description}</p>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {lane.courseItems.map((item) => (
                          <div key={item.slug} className="rounded-card border border-border bg-background/70 p-4">
                            <p className="text-sm font-medium leading-snug">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" size="lg" className="rounded-btn">
                <Link to="/courses">View Full Course Library</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Proof</p>
                <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                  See the taste, systems thinking, and execution behind the work.
                </h2>
                <p className="font-light leading-relaxed text-muted-foreground">
                  Browse case studies across brand, digital, strategy, and AI systems if you want a deeper look at how
                  the work gets applied in the real world.
                </p>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                View all proof <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 70}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Need help choosing?</p>
              <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                Start self-serve or book direct support.
              </h2>
              <p className="mb-6 font-light leading-relaxed text-muted-foreground">
                Most founders start with the free courses or a standalone workflow. If your stack is messy or the use
                case is more specific, book a free consultation and map the fastest path forward.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Standalone courses for focused implementation",
                  "Membership for the full library and future releases",
                  "Custom guidance when you need a business-specific build",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="rounded-btn">
                  <Link to="/courses">Browse Courses</Link>
                </Button>
                <ContactDialog>
                  <Button variant="outline" className="rounded-btn">
                    Book Free Consultation
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">FAQ</p>
              <Accordion type="single" collapsible className="w-full">
                {homeFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
